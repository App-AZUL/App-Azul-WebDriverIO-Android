import { $ } from "@wdio/globals";
import Helpers from "../../../../Helpers/Helpers.ts";

class PinConfigurationScreen {
  get screenTitle() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Confirma tu PIN' or . = 'Confirma tu PIN') and @resource-id = 'com.sdp.appazul:id/confirmText']"
    );
  }
  get incorrectPinConfirmationTitle() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Los dígitos no coinciden.' or . = 'Los dígitos no coinciden.') and @resource-id = 'com.sdp.appazul:id/textTitle']"
    );
  }
  get incorrectPinConfirmationMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Por favor inténtalo de nuevo.' or . = 'Por favor inténtalo de nuevo.') and @resource-id = 'com.sdp.appazul:id/textMsg']"
    );
  }
  get sequentialPinConfirmationMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Los dígitos no pueden ser secuenciales' or . = 'Los dígitos no pueden ser secuenciales') and @resource-id = 'com.sdp.appazul:id/textMsg']"
    );
  }
  get equalPinConfirmationMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Utiliza un PIN diferente al anterior' or . = 'Utiliza un PIN diferente al anterior') and @resource-id = 'com.sdp.appazul:id/textMsg']"
    );
  }
  get repeatedPinDigitsConfirmationMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Los 4 dígitos no pueden ser iguales' or . = 'Los 4 dígitos no pueden ser iguales') and @resource-id = 'com.sdp.appazul:id/textMsg']"
    );
  }
  async setPin(arg0: number) {
    let pinString = arg0.toString();
    console.log("Setting PIN: " + pinString);

    for (let i = 0; i < pinString.length; i++) {
      let buttonDigitNumber = pinString[i];
      let buttonXpath =
        '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
        buttonDigitNumber +
        '"]';
      let buttonDigitElement = driver.$(buttonXpath);
      await buttonDigitElement.click();
    }

    for (let i = 0; i < pinString.length; i++) {
      let buttonDigitNumber = pinString[i];
      let buttonXpath =
        '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
        buttonDigitNumber +
        '"]';
      let buttonDigitElement = driver.$(buttonXpath);
      await buttonDigitElement.click();
    }
    //Continue in case user already did set the same PIN
    if (
      await Helpers.verifyElementExist(
        this.equalPinConfirmationMessage,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      )
    ) {
      await console.log("El pin no puede ser igual al anterior.");
      await Helpers.dismissPopUp();
      pinString = await this.reversePIN(pinString);
      console.log("Setting (again) PIN: " + pinString);

      for (let i = 0; i < pinString.length; i++) {
        let buttonDigitNumber = pinString[i];
        let buttonXpath =
          '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
          buttonDigitNumber +
          '"]';
        let buttonDigitElement = driver.$(buttonXpath);
        await buttonDigitElement.click();
      }

      for (let i = 0; i < pinString.length; i++) {
        let buttonDigitNumber = pinString[i];
        let buttonXpath =
          '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
          buttonDigitNumber +
          '"]';
        let buttonDigitElement = driver.$(buttonXpath);
        await buttonDigitElement.click();
      }
    }
  }

  async typePin(arg0: number) {
    let pinString = arg0.toString();
    console.log("Typing PIN: " + pinString);
    for (let i = 0; i < pinString.length; i++) {
      let buttonDigitNumber = pinString[i];
      let buttonXpath =
        '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
        buttonDigitNumber +
        '"]';
      let buttonDigitElement = driver.$(buttonXpath);
      await buttonDigitElement.click();
    }
  }

  async reversePIN(str: string) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
}

export default new PinConfigurationScreen();

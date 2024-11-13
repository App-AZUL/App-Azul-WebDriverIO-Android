import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import Commons from "./Commons.ts";
import LoginScreen from "./LoginScreen.ts";
import OnboardingScreen from "./OnboardingScreen.ts";
import NewAccessScreen from "./NewAccessScreen.ts";

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
  get PinConfiguration24HoursMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Acción permitida una (1) vez por día. Inténtalo de nuevo en 24 horas' or . = 'Acción permitida una (1) vez por día. Inténtalo de nuevo en 24 horas') and @resource-id = 'com.sdp.appazul:id/textMsg']"
    );
  }
  get timeWaitFor24HoursMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and @resource-id = 'com.sdp.appazul:id/tvTryCount']"
    );
  }

  async setPin(arg0: number) {
    let pinString = arg0.toString();
    global.PIN = pinString;
    console.log("Setting PIN: " + pinString);

    //Typing PIN
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
    driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
    //Continue in case user already set the pin before 24 hours
    if (
      await Helpers.verifyElementExist(
        this.PinConfiguration24HoursMessage,
        Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
      )
    ) {
      this.reset24HoursPinValidation(pinString);
    }

    //Continue in case user already did set the same PIN
    if (
      await Helpers.verifyElementExist(
        this.equalPinConfirmationMessage,
        Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
      )
    ) {
      await console.log("El pin no puede ser igual al anterior.");
      await Helpers.dismissPopUp();
      pinString = await this.reversePIN(pinString);
      global.IS_PIN_REVERSED = true;
      global.PIN = pinString;
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
    let isPinReversed = global.IS_PIN_REVERSED as boolean;
    //global.PIN = pinString;

    if (isPinReversed) {
      pinString = await this.reversePIN(pinString);
      console.log("Typing PIN: " + pinString);
      for (let i = 0; i < pinString.length; i++) {
        let buttonDigitNumber = pinString[i];
        let buttonXpath =
          '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
          buttonDigitNumber +
          '"]';
        let buttonDigitElement = driver.$(buttonXpath);
        driver.pause(900);
        await buttonDigitElement.click();
      }
    } else {
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

    //this.reset24HoursPinValidation(pinString);
  }

  async reversePIN(str: string) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  async reset24HoursPinValidation(pin: string) {
    if (
      await Helpers.verifyElementExist(
        this.PinConfiguration24HoursMessage,
        Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
      )
    ) {
      // Get the text and remove non-numeric characters
      let timeWaitNumbers = (
        await this.timeWaitFor24HoursMessage.getText()
      ).replace(/\D/g, "");

      // Extract hours, minutes, and seconds
      const hours = parseInt(timeWaitNumbers.slice(0, 2)) * 3600; // 60 * 60
      const minutes = parseInt(timeWaitNumbers.slice(2, 4)) * 60; // 60
      const seconds = parseInt(timeWaitNumbers.slice(4, 6));

      // Calculate total delay in seconds
      const delay = hours + minutes + seconds;

      console.log(`Hours: ${hours / 3600}`);
      console.log(`Minutes: ${minutes / 60}`);
      console.log(`Seconds: ${seconds}`);
      console.log(`Delay: ${delay}`);

      // Wait for the specified delay
      await driver.pause(delay * 1000); // Convert seconds to milliseconds

      // Enter the PIN twice
      for (let i = 0; i < pin.length; i++) {
        let buttonDigitNumber = pin[i];
        let buttonXpath =
          '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
          buttonDigitNumber +
          '"]';
        let buttonDigitElement = driver.$(buttonXpath);
        await buttonDigitElement.click();
      }

      for (let i = 0; i < pin.length; i++) {
        let buttonDigitNumber = pin[i];
        let buttonXpath =
          '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
          buttonDigitNumber +
          '"]';
        let buttonDigitElement = driver.$(buttonXpath);
        await buttonDigitElement.click();
      }
      if (
        await Helpers.verifyElementExist(
          Commons.okButton,
          Helpers.FIVE_SECONDS_IN_MILLISECONDS
        )
      ) {
        Helpers.dismissPopUp();
        (await LoginScreen.iniciarSesionButton).click();

        for (let i = 0; i < pin.length; i++) {
          let buttonDigitNumber = pin[i];
          let buttonXpath =
            '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
            buttonDigitNumber +
            '"]';
          let buttonDigitElement = driver.$(buttonXpath);
          await buttonDigitElement.click();
        }

        for (let i = 0; i < pin.length; i++) {
          let buttonDigitNumber = pin[i];
          let buttonXpath =
            '//android.widget.Button[@resource-id="com.sdp.appazul:id/button_' +
            buttonDigitNumber +
            '"]';
          let buttonDigitElement = driver.$(buttonXpath);
          await buttonDigitElement.click();
        }
      }
    }
  }
  async navigateToPinConfiguration(username: string, password: string) {
    if (
      !(await Helpers.verifyElementExist(
        this.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      ))
    ) {
      await Helpers.startAppByFirstTime();
      await (await OnboardingScreen.saltarDemostracionButton).click();
      await (await NewAccessScreen.yaSoyClienteButton).click();
      await Helpers.acceptNotificationPermission();

      await LoginScreen.passwordInput.setValue(password);
      await LoginScreen.usernameInput.setValue(username);
      await LoginScreen.iniciarSesionButton.click();

      await Helpers.verifyElementExist(
        this.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      );
    }
  }
}

export default new PinConfigurationScreen();

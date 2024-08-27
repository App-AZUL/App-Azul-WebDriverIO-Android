import { $ } from "@wdio/globals";

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
  async typePin(arg0: number) {
    let pinString = arg0.toString();
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

export default new PinConfigurationScreen();

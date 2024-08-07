import { $ } from "@wdio/globals";

class PinConfigurationScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/welcomeText"]'
    );
  }
  get yaSoyClienteButton() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/alreadyCustomer"]'
    );
  }
  get AfiliarmeButton() {
    return $("//*[contains(@text,'Afiliarme')]");
  }
  get PressBackButton() {
    return $("");
  }
}

export default new PinConfigurationScreen();

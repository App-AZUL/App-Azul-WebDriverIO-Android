import { $ } from "@wdio/globals";
import Helpers from "../../../../Helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";

class NewAccessScreen {
  get screenTitle() {
    return $(
      "//*[contains(@text,'Vende desde tu móvil\nde forma fácil y segura')]"
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
  async navigateToNewAccessScreen() {
    if (
      !(await Helpers.verifyElementExist(
        this.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      ))
    ) {
      await Helpers.startAppByFirstTime();
      await OnboardingScreen.skipOnboardingScreen();
    }
  }
}

export default new NewAccessScreen();

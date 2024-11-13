import { $ } from "@wdio/globals";
import Helpers from "../../../../Helpers/Helpers.ts";
import PreloggedScreen from "../../prelogged/ScreenObjects/PreloggedScreen.ts";
import LoginScreen from "../../login/ScreenObjects/LoginScreen.ts";
import Commons from "../../common_screen_objects/Commons.ts";

class DashboardScreen {
  get screenTitle() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/dashBoardTopBar"]'
    );
  }
  get burguerMenu() {
    return $(
      "//*[@class = 'android.widget.ImageView' and @resource-id = 'com.sdp.appazul:id/dashBoardBurgerMenu' and (@text = '' or . = '')]"
    );
  }
  get salirButton() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  async logOutFromDashboard() {
    await this.burguerMenu.click();
    this.salirButton.click();
    await Helpers.verifyElementIsDisplayed(
      PreloggedScreen.enteradoButton,
      Helpers.TWENTY_SECONDS_IN_MILLISECONDS
    );

    await PreloggedScreen.nextButtonTips.click();
    await Helpers.verifyElementIsDisplayed(
      PreloggedScreen.secondPageTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementIsDisplayed(
      PreloggedScreen.secondPageTitle,
      Helpers.TEN_SECONDS_IN_MILLISECONDS
    );
    await PreloggedScreen.enteradoButton.click();

    await PreloggedScreen.burguerMenu.click();
    await PreloggedScreen.desvincularButton.click();
    await Helpers.verifyElementIsDisplayed(
      PreloggedScreen.desvincularTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementIsDisplayed(
      PreloggedScreen.desvincularBody,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );

    (await Commons.siButton).click();

    await Helpers.verifyElementIsDisplayed(
      LoginScreen.usernameInput,
      Helpers.TWENTY_SECONDS_IN_MILLISECONDS
    );
  }
}

export default new DashboardScreen();

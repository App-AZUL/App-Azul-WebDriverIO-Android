import { $ } from "@wdio/globals";
import Helpers from "../../../../Helpers/Helpers.ts";
import PreloggedScreen from "../../prelogged/ScreenObjects/PreloggedScreen.ts";
import LoginScreen from "../../login/ScreenObjects/LoginScreen.ts";

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
    await Helpers.verifyElement(
      PreloggedScreen.enteradoButton,
      Helpers.TWENTY_SECONDS_IN_MILLISECONDS
    );

    await PreloggedScreen.nextButtonTips.click();
    await Helpers.verifyElement(
      PreloggedScreen.secondPageTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElement(
      PreloggedScreen.secondPageTitle,
      Helpers.TEN_SECONDS_IN_MILLISECONDS
    );
    await PreloggedScreen.enteradoButton.click();

    await PreloggedScreen.burguerMenu.click();
    await PreloggedScreen.desvincularButton.click();
    await Helpers.verifyElement(
      PreloggedScreen.desvincularTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElement(
      PreloggedScreen.desvincularBody,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );

    await Helpers.verifyElement(
      LoginScreen.usernameInput,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
}

export default new DashboardScreen();

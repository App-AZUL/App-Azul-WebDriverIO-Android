import { $ } from "@wdio/globals";
import Helpers from "../../../../Helpers/Helpers.ts";
import PreloggedScreen from "../../prelogged/ScreenObjects/PreloggedScreen.ts";

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
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
}

export default new DashboardScreen();

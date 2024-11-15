import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import PreloggedScreen from "./PreloggedScreen.ts";
import LoginScreen from "./LoginScreen.ts";
import Commons from "./Commons.ts";
import OnboardingScreen from "./OnboardingScreen.ts";
import NewAccessScreen from "./NewAccessScreen.ts";
import PinConfigurationScreen from "./PinConfigurationScreen.ts";

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
  get greeting() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get commercialGroupName() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get currentDateElement() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get miPerfil() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get preferencias() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get salir() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get appVersion() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get sdpText() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get locationFilter() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Salir' or . = 'Salir') and @resource-id = 'com.sdp.appazul:id/tvLogout']"
    );
  }
  get avanceOfferMessage() {
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
  async navigateToDashboard(username: string, password: string) {
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
        PinConfigurationScreen.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      );
      await PinConfigurationScreen.setPin(9499);
    }
  }
}

export default new DashboardScreen();

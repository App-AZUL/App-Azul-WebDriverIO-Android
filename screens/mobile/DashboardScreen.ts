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
    return $("//*[contains(@text,'Hola')]");
  }
  get commercialGroupName() {
    return $("//*[contains(@text,'Grupo Popular Dominicano')]");
  }
  get currentDateElement() {
    let date = this.getFormattedDateInSpanish();
    let ekispat = "//*[contains(@text,'" + date + "')]";
    console.log("xpath: " + ekispat);

    return $(ekispat);
  }
  get miPerfil() {
    return $("//*[contains(@text,'Mi perfil')]");
  }
  get preferencias() {
    return $("//*[contains(@text,'Preferencias')]");
  }
  get salir() {
    return $("//*[contains(@text,'Salir')]");
  }
  get appVersion() {
    return $("//*[contains(@text,'Version')]");
  }
  get sdpText() {
    return $("//*[contains(@text,'Servicios Digitales Popular, S.A.')]");
  }
  get locationFilter() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/locationFilter"]'
    );
  }
  get avanceOfferMessage() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/offersImageNoAmount"]'
    );
  }
  get azulLocationGroupElement() {
    return $('//*[contains(@text,"AZUL")]');
  }
  get affiliatedAutoRentalElement() {
    return $('//*[contains(@text,"AFFILIATED AUTO RENTAL")]');
  }
  get alticeLocationElement() {
    return $('//*[contains(@text,"ALTICE")]');
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
    try {
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

        //loginAppVersion = await this.appVersion.getText().toString();
        await LoginScreen.passwordInput.setValue(password);
        await LoginScreen.usernameInput.setValue(username);
        await LoginScreen.iniciarSesionButton.click();

        await Helpers.verifyElementExist(
          PinConfigurationScreen.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
        await PinConfigurationScreen.setPin(9499);

        await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
        await Helpers.acceptDashboardPermissions();
        await this.dismissDashboardNovelty();
        await Helpers.verifyElementExist(
          this.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
      }
    } catch (error) {
      await Helpers.startAppByFirstTime();
      await (await OnboardingScreen.saltarDemostracionButton).click();
      await (await NewAccessScreen.yaSoyClienteButton).click();
      await Helpers.acceptNotificationPermission();

      //loginAppVersion = await (await this.appVersion).getText().toString();

      await LoginScreen.passwordInput.setValue(password);
      await LoginScreen.usernameInput.setValue(username);
      await LoginScreen.iniciarSesionButton.click();

      await Helpers.verifyElementExist(
        PinConfigurationScreen.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      );
      await PinConfigurationScreen.setPin(9499);

      await Helpers.acceptDashboardPermissions();
      await this.dismissDashboardNovelty();

      await Helpers.verifyElementExist(
        this.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      );
    }
  }
  getFormattedDateInSpanish() {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let dateConverted = `${day} de ${month} del ${year}`;
    console.log(dateConverted);

    return dateConverted;
  }
  async dismissDashboardNovelty() {
    try {
      await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
      (await Commons.continuarButton).click();
    } catch (error) {
      console.log("couldn't dismiss novelty");
    }
  }
}

export default new DashboardScreen();

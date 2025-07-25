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
  get proffileCircleButton() {
    return $(
      "//android.widget.RelativeLayout[@resource-id=\"com.sdp.appazul:id/profile_cardView\"]"
    );
  }
  get burgerMenu() {
    return $(
      "//*[@class = 'android.widget.ImageView' and @resource-id = 'com.sdp.appazul:id/dashBoardBurgerMenu' and (@text = '' or . = '')]"
    );
  }
  get logoutButton() {
    return $(
      "//android.widget.RelativeLayout[@resource-id=\"com.sdp.appazul:id/btnLogoutMenu\"]"
    );
  }
  get sdpHotelLocationElement() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvItem" and @text="SDP-LODGING/LAB01"]'
    );
  }
  get salirDashboardButton() {
    return $(
      "//android.widget.TextView[@resource-id=\"com.sdp.appazul:id/txtContinueBtnView\"]"
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
    console.log(global.ADMIN_BUSINESS_NAME);
    
    return $("//*[contains(@text,'Grupo Popular Dominicano')]");
  }
  get currentDateElement() {
    let date = this.getFormattedDateInSpanish();
    let dateNextDay = this.getFormattedDateNextDayInSpanish();
    let xpathObject = "//*[contains(@text,'" + date + "')] | //*[contains(@text,'" + dateNextDay + "')]";
    console.log("xpath: " + xpathObject);

    return $(xpathObject);
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
  get avanceOfferMessageWithAmount() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/offersImageWithAmount"]'
    );
  }
  get avanceAmountText() {
    return $(
      '//*[contains(@text,\'RD$ 649,000\')]'
    );
  }
  get azulLocationGroupElement() {
    return $('//*[contains(@text,"AZUL")] | //*[contains(@text,"Servicios Digitales")]');
  }
  get affiliatedAutoRentalElement() {
    return $('//*[contains(@text,"AFFILIATED AUTO RENTAL")]');
  }
  get alticeLocationElement() {
    return $('//*[contains(@text,"ALTICE")]');
  }
  get historialdeTransaccionesButton() {
    return $('//*[contains(@text,"Historial de Transacciones")]');
  }
  get transaccionesLiquidadasOption() {
    return $('//*[contains(@text,"Transacciones liquidadas")]');
  }
  get transaccionesQROption() {
    return $('//*[contains(@text,"Transacciones QR")]');
  }
  get closeQRMessageButton() {
    return $('//*[contains(@text,"Cancelar")]');
  }
  get qrButton() {
    return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/text_view" and @text="Código QR"]');
  }
  get paymentLinkButton() {
    return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/text_view" and @text="Link de Pagos"]');
  }
  async logOutFromDashboard() {
    await this.burgerMenu.click();
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

    await PreloggedScreen.burgerMenu.click();
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
  async goToDashboardAfterReinstall(username: string, password: string) {
    await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
     await (await OnboardingScreen.saltarDemostracionButton).click();
        await (await NewAccessScreen.yaSoyClienteButton).click();

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
        await this.dismissDashboardNovelty();
        await Helpers.verifyElementExist(
          this.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
  }
  async navigateToDashboard(username: string, password: string, keepCurrentApp:boolean = true) {
    try {
      //verify first if the app is already open
      await console.log("should we keep current app?: "+keepCurrentApp);
      keepCurrentApp = await Helpers.verifyElementExist(
        OnboardingScreen.saltarDemostracionButton,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      
      //in case app is already open, it will not try to open it again
      if (keepCurrentApp) {
        await console.log("weisparle");
        await OnboardingScreen.saltarDemostracionButton.click();
        await NewAccessScreen.yaSoyClienteButton.click();
        
        await LoginScreen.passwordInput.setValue(password);
        await LoginScreen.usernameInput.setValue(username);
        await LoginScreen.iniciarSesionButton.click();

        await Helpers.verifyElementExist(
          PinConfigurationScreen.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
        await PinConfigurationScreen.setPin(9499);

        await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
        await this.dismissDashboardNovelty();
        await Helpers.verifyElementExist(
          this.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
      } else if(await Helpers.verifyElementExist(
        this.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      )) {
        await console.log("ya esta en dashboard");

      } else {
        //if app is not open or is not at the desired screen, will start it
          await Helpers.startAppByFirstTime();
          await (await OnboardingScreen.saltarDemostracionButton).click();
          await (await NewAccessScreen.yaSoyClienteButton).click();
          
          await LoginScreen.passwordInput.setValue(password);
          await LoginScreen.usernameInput.setValue(username);
          await LoginScreen.iniciarSesionButton.click();
          
          await Helpers.verifyElementExist(
            PinConfigurationScreen.screenTitle,
            Helpers.TWENTY_SECONDS_IN_MILLISECONDS
          );
          await PinConfigurationScreen.setPin(9499);
        
          await this.dismissDashboardNovelty();
        
          await Helpers.verifyElementExist(
            this.screenTitle,
            Helpers.TWENTY_SECONDS_IN_MILLISECONDS
          );
      }
    } catch (error) {
      //if there is an error, it will try to start the app from the beginning
      await console.log("Error navigating to dashboard, trying to start app from first time: " + error);
      await Helpers.startAppByFirstTime();
      await (await OnboardingScreen.saltarDemostracionButton).click();
      await (await NewAccessScreen.yaSoyClienteButton).click();

      await LoginScreen.passwordInput.setValue(password);
      await LoginScreen.usernameInput.setValue(username);
      await LoginScreen.iniciarSesionButton.click();

      await Helpers.verifyElementExist(
        PinConfigurationScreen.screenTitle,
        Helpers.TWENTY_SECONDS_IN_MILLISECONDS
      );
      await PinConfigurationScreen.setPin(9499);

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
  getFormattedDateNextDayInSpanish() {
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const date = new Date();
    date.setDate(date.getDate() + 1); // Move to next day
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    const dateConverted = `${day} de ${month} del ${year}`;
    console.log(dateConverted);
  
    return dateConverted;
  }
  
  async dismissDashboardNovelty() {
    try {
      await Helpers.verifyElementExist(
        Commons.continuarButton,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      (await Commons.continuarButton).click();
    } catch (error) {
      console.log("couldn't dismiss novelty");
    }
  }
}

export default new DashboardScreen();

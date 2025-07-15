import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";
import NewAccessScreen from "./NewAccessScreen.ts";
import LoginScreen from "./LoginScreen.ts";
import PinConfigurationScreen from "./PinConfigurationScreen.ts";
import DashboardScreen from "./DashboardScreen.ts";

class QrTransactionsScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/toolbarTextTitle"]'
    );
  }
  get noExistenTransaccionesText() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvNoRecordFound"]'
    );
  }
  get locationFilterButton() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/locationFilter"]'
    );
}
  get desdeDatePickerButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvFromActivity"]'
    );
}
get qrTransactionItem() {
    return $(
      '(//android.widget.LinearLayout[@resource-id="com.sdp.appazul:id/grid_adapter"])[1]/android.widget.RelativeLayout'
    );
}
get firstTrxAmount() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvPrice" and contains(@text,"$")])[1]'
    );
}
get searchBarTextfield() {
    return $(
      '//android.widget.EditText[@resource-id="com.sdp.appazul:id/etSearchBy"]'
    );
}
get clearSearchBarButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/clearTextView"]'
    );
}
get firstTrxNoReferencia() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/clearTextView"]'
    );
}
async navigateToSettledTransactionScreen() {
        try {
              let keepCurrentApp:boolean = await Helpers.verifyElementExist(
                OnboardingScreen.saltarDemostracionButton,
                Helpers.THREE_SECONDS_IN_MILLISECONDS
              );
              
              if (keepCurrentApp) {
                console.log("weisparle");
                await OnboardingScreen.saltarDemostracionButton.click();
                await NewAccessScreen.yaSoyClienteButton.click();
                
                await LoginScreen.passwordInput.setValue(global.PASSWORD as string);
                await LoginScreen.usernameInput.setValue(global.USERNAME as string);
                await LoginScreen.iniciarSesionButton.click();
        
                await Helpers.verifyElementExist(
                  PinConfigurationScreen.screenTitle,
                  Helpers.TWENTY_SECONDS_IN_MILLISECONDS
                );
                await PinConfigurationScreen.setPin(9499);
        
                await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
                await DashboardScreen.dismissDashboardNovelty();
                await Helpers.verifyElementExist(
                  DashboardScreen.screenTitle,
                  Helpers.TWENTY_SECONDS_IN_MILLISECONDS
                );
              } else if(await Helpers.verifyElementExist(
                DashboardScreen.screenTitle,
                Helpers.FIVE_SECONDS_IN_MILLISECONDS
              )) {
                console.log("ya esta en dashboard");
        
              } else {
                  await Helpers.startAppByFirstTime();
                  await (await OnboardingScreen.saltarDemostracionButton).click();
                  await (await NewAccessScreen.yaSoyClienteButton).click();
                  await LoginScreen.passwordInput.setValue(global.PASSWORD as string);
                  await LoginScreen.usernameInput.setValue(global.USERNAME as string);
                  await LoginScreen.iniciarSesionButton.click();
                  
                  await Helpers.verifyElementExist(
                    PinConfigurationScreen.screenTitle,
                    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
                  );
                  await PinConfigurationScreen.setPin(9499);
                
                  await DashboardScreen.dismissDashboardNovelty();
                
                  await Helpers.verifyElementExist(
                    DashboardScreen.screenTitle,
                    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
                  );
              }
            } catch (error) {
              await Helpers.startAppByFirstTime();
              await (await OnboardingScreen.saltarDemostracionButton).click();
              await (await NewAccessScreen.yaSoyClienteButton).click();

              await LoginScreen.passwordInput.setValue(global.PASSWORD as string);
              await LoginScreen.usernameInput.setValue(global.USERNAME as string);
              await LoginScreen.iniciarSesionButton.click();
        
              await Helpers.verifyElementExist(
                PinConfigurationScreen.screenTitle,
                Helpers.TWENTY_SECONDS_IN_MILLISECONDS
              );
              await PinConfigurationScreen.setPin(9499);
        
              await DashboardScreen.dismissDashboardNovelty();
        
              await Helpers.verifyElementExist(
                DashboardScreen.screenTitle,
                Helpers.TWENTY_SECONDS_IN_MILLISECONDS
              );
            }
            await DashboardScreen.historialdeTransaccionesButton.click();
            await DashboardScreen.transaccionesQROption.click();
            //await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS, false);
            await Helpers.verifyElementIsDisplayed(this.noExistenTransaccionesText, Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS)
    }
}

export default new QrTransactionsScreen();

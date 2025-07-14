import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";
import NewAccessScreen from "./NewAccessScreen.ts";
import LoginScreen from "./LoginScreen.ts";
import PinConfigurationScreen from "./PinConfigurationScreen.ts";
import DashboardScreen from "./DashboardScreen.ts";
import Commons from "./Commons.ts";

class SettledTransactionsScreen {
  get screenTitle() {
    return $("//*[contains(@text,'Transacciones liquidadas')]");
  }
  get calendarLeftArrow() {
    return $('//android.widget.ImageView[@resource-id="com.sdp.appazul:id/left"]');
  }
  get year2022Label() {
    return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/title"][contains(@text,"2022")]');
  }
  get clearAllFiltersButton() {
    return $('//android.widget.ImageView[@resource-id="com.sdp.appazul:id/clearEnteredText"]');
  }
  get noAprobacionSearchOption() {
    return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvApprovalNo" and @text="No. aprobación"]');
  }
  get noTerminalSearchOption() {
    return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTerminalNo"]');
  }
  get noTarjetaSearchOption() {
    return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvCardNo"]');
  }
  get firstTrxThreeDotsButton() {
    return $('(//android.widget.ImageView[@resource-id="com.sdp.appazul:id/imgMoreButton"])[1]');
  }
  get dayOftheMonthButton() {
    return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/date" and @text="15"]');
  }
  get noExistenTransaccionesText() {
    return $("//android.widget.TextView[@text=\"No existen transacciones\"]");
  }
  get locationFilter() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/locationSymboltr"]'
    );
  }
  get desdeDatePicker() {
    return $(
      '//android.widget.LinearLayout[@resource-id="com.sdp.appazul:id/layoutSinceDatePicker"]'
    );
  }
  get hastaDatePicker() {
    return $(
      '//android.widget.LinearLayout[@resource-id="com.sdp.appazul:id/layoutUntilDatePicker"]'
    );
  }
  get trxSearchBar() {
    return $(
      '//*[@resource-id="com.sdp.appazul:id/etSearchBy"]'
    );
  }
  get firstSettledTransactionContainer() {
    return $(
      '(//android.widget.LinearLayout[@resource-id="com.sdp.appazul:id/mainShadowItem"])[1]'
    );
  }
  get firstSettledTransactionDateTime() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvDateTime"])[1]'
    );
  }
  get firstSettledTransactionCreditCardNumber() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvCardNumber"])[1]'
    );
  }
  get firstSettledTransactionAmount() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvAmount"])[1]'
    );
  }
  get firstSettledTransactionApprovalNumber() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvApprovalNo"])[1]'
    );
  }
  get firstSettledTransactionType() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTransactionType"])[1]'
    );
  }
  get firstSettledTransactionThreeDotsButton() {
    return $(
      '(//android.widget.ImageView[@resource-id="com.sdp.appazul:id/imgMoreButton"])[1]'
    );
  }
  get trxSolicitarDevolucionButton() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/btnTxnInfo"]'
    );
  }
  //Three dots modal
  get DetailModalTrxAmount() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/stMenuAmount"]'
    );
  }
  get DetailModalTrxDateTime() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/stDateTime"]'
    );
  }
  get chevronTrxDetailsButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/nextScreenIcon"]'
    );
  }
  async verifyTrxInfoModal() {
    //Date time
    global["Settled Transaction date and time on modal"] = String(
      await driver.getElementText(await this.DetailModalTrxDateTime.elementId)
    );
    console.log(
      "Hora y fecha de transaccion on modal: " +
        global["Settled Transaction date and time"]
    );

    //amount
    global["Settled Transaction Amount on modal"] = String(
      await driver.getElementText(await this.DetailModalTrxAmount.elementId)
    );
    console.log(
      "Monto de transaccion on modal: " + global["Settled Transaction Amount"]
    );

    //date time validation
    if (
      global["Settled Transaction date and time on modal"] !=
      global["Settled Transaction date and time"]
    ) {
      console.log(
        "Hora y fecha de transaccion on modal: " +
          global["Settled Transaction date and time on modal"]
      );
      console.log(
        "Hora y fecha de transaccion: " +
          global["Settled Transaction date and time"]
      );
      //mark error
      throw new Error("date time in modal is different from the list \n" +
        "Modal date time: " +
        global["Settled Transaction date and time on modal"] +
        "\nList date time: " +
        global["Settled Transaction date and time"]);
    } else if (
      global["Settled Transaction Amount on modal"] !=
      global["Settled Transaction Amount"]
      //amount validation
    ) {
      console.log(
        "Monto de transaccion on modal: " +
          global["Settled Transaction Amount on modal"]
      );
      console.log(
        "Monto de transaccion on modal: " + global["Settled Transaction Amount"]
      );
      //mark error
      throw new Error("Ammount on modal is different from the list");
    }
  }
  async verifyFirstTransactionInListExist() {
    //verify trx
    await Helpers.verifyElementIsDisplayed(
      this.firstSettledTransactionContainer,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    //retrieving info
    //date time
    global["Settled Transaction date and time"] = String(
      await this.firstSettledTransactionDateTime.getText()
    );
    console.log(
      "Hora y fecha de transaccion: " +
        global["Settled Transaction date and time"]
    );

    //amount
    global["Settled Transaction Amount"] = String(
      await driver.getElementText(
        await this.firstSettledTransactionAmount.elementId
      )
    );
    console.log(
      "Monto de transaccion: " + global["Settled Transaction Amount"]
    );

    //trx type
    global["Settled Transaction type"] = String(
      await driver.getElementText(
        await this.firstSettledTransactionType.elementId
      )
    );
    console.log("Tipo de transaccion: " + global["Settled Transaction type"]);

    //trx credit card number
    global["Settled Transaction Credit Card Number"] = String(
      await this.firstSettledTransactionCreditCardNumber.getText()
    );
    console.log(
      "No. de tarjeta: " + global["Settled Transaction Credit Card Number"]
    );

    //trx approval number
    global["Settled Transaction Approval Number In Trx Info Screen"] = String(
      await this.firstSettledTransactionApprovalNumber.getText()
    );
    console.log("No. de transaccion: " + global["Settled Transaction Approval Number In Trx Info Screen"]);
  }
  async selectTrxLocation() {
    // Open location filter
    await this.locationFilter.click();

    // Tap on "Azul" location group
    await DashboardScreen.azulLocationGroupElement.click();

    await Helpers.scrollUntilElementVisible({
  element: DashboardScreen.sdpHotelLocationElement
});


    // Tap on "Hotel" location
    await DashboardScreen.sdpHotelLocationElement.click();
}

    async selectAnyDayFrom2022() {
        (await this.desdeDatePicker).click();
        for (let i = 0; i < 42; i++) {
          await this.calendarLeftArrow.click();
        }
        await this.dayOftheMonthButton.click();
    }
  async queryTransactions() {
        let isFirstTrxVisible:boolean = await Helpers.verifyElementExist(this.firstSettledTransactionContainer, Helpers.TEN_SECONDS_IN_MILLISECONDS);
        if (!isFirstTrxVisible) {
          //verifying if user is at settled transaction screen
          let isUserAtSettledTransactionScreen:boolean = await Helpers.verifyElementExist(this.screenTitle, Helpers.THREE_SECONDS_IN_MILLISECONDS);
          if (isUserAtSettledTransactionScreen) {
            await this.selectTrxLocation();
            await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
            await this.selectAnyDayFrom2022();
            await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
            isFirstTrxVisible = await Helpers.verifyElementExist(this.firstSettledTransactionContainer, Helpers.TEN_SECONDS_IN_MILLISECONDS);   
          }
        }
        if (!isFirstTrxVisible) {
            let isUserAtSettledTransactionScreen:boolean = await Helpers.verifyElementExist(this.desdeDatePicker, Helpers.TEN_SECONDS_IN_MILLISECONDS);
            if (!isUserAtSettledTransactionScreen) {
            await this.navigateToSettledTransactionScreen();
            await this.selectTrxLocation();
            await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
            await this.selectAnyDayFrom2022();
            await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
            await Helpers.verifyElementExist(this.firstSettledTransactionContainer, Helpers.TEN_SECONDS_IN_MILLISECONDS)   
            } else {
                await this.selectTrxLocation();
                await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
                await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
                await this.selectAnyDayFrom2022();
                await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
                await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
                await Helpers.verifyElementExist(this.firstSettledTransactionContainer, Helpers.TEN_SECONDS_IN_MILLISECONDS)   
            }
        }
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
            await DashboardScreen.transaccionesLiquidadasOption.click();
            //await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS, false);
            await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementIsDisplayed(this.noExistenTransaccionesText, Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS)
    }
}

export default new SettledTransactionsScreen();

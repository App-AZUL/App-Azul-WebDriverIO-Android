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
      throw new Error("date time in modal is different from the list");
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
      await driver.getElementText(
        await this.firstSettledTransactionDateTime.elementId
      )
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
      await driver.getElementText(
        await this.firstSettledTransactionType.elementId
      )
    );
    console.log(
      "No. de tarjeta: " + global["Settled Transaction Credit Card Number"]
    );

    //trx approval number
    global["Settled Transaction Approval Number"] = String(
      await driver.getElementText(
        await this.firstSettledTransactionApprovalNumber.elementId
      )
    );
    console.log("No. de transaccion: " + global["Settled Transaction type"]);
  }
  async selectTrxLocation() {
        await this.locationFilter.click();
            await DashboardScreen.azulLocationGroupElement.click();
            const { height, width } = await driver.getWindowRect();
        
            const startX = Math.floor(width / 2);
            const startY = Math.floor(height * 0.8); // Bottom-ish
            const endY = Math.floor(height * 0.2);   // Top-ish
        
              await driver.performActions([
                {
                  type: 'pointer',
                  id: 'finger1',
                  parameters: { pointerType: 'touch' },
                  actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 50 },
                    { type: 'pointerMove', duration: 50, x: startX, y: endY },
                    { type: 'pointerUp', button: 0 },
                  ],
                },
              ]);
              await driver.releaseActions(); // Clean up after each swipe
            
            await DashboardScreen.sdpHotelLocationElement.click();
    }
  async queryTransactions() {
        let isATrxVisible:boolean = await Helpers.verifyElementExist(this.firstTrxOfList, Helpers.TEN_SECONDS_IN_MILLISECONDS, false);
        if (!isATrxVisible) {
            let isUserAtSettledTransactionScreen:boolean = await Helpers.verifyElementExist(this.desdeDatePickerButton, Helpers.TEN_SECONDS_IN_MILLISECONDS, false);
            if (!isUserAtSettledTransactionScreen) {
            await this.navigateToSettledTransactionScreen();
            await this.selectTrxLocation();
            await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
            await this.selectAnyDayFrom2022();
            await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
            await Helpers.verifyElementExist(this.firstTrxOfList, Helpers.TEN_SECONDS_IN_MILLISECONDS, true)   
            } else {
                await this.selectTrxLocation();
                await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
                await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
                await this.selectAnyDayFrom2022();
                await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
                await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
                await Helpers.verifyElementExist(this.firstTrxOfList, Helpers.TEN_SECONDS_IN_MILLISECONDS, true)   
            }
        }
    }
  async navigateToSettledTransactionScreen() {
        let isUserAtSettledTrxScreen:Boolean = await Helpers.verifyElementExist(this.noExistenTransaccionesText, Helpers.FIVE_SECONDS_IN_MILLISECONDS);
          if (!isUserAtSettledTrxScreen) {
            try {
                  await driver.acceptAlert();  
            } catch (error) {
                await console.error("could not accept the notification permission"); 
              }
              await driver.reloadSession();
            await OnboardingScreen.saltarDemostracionButton.click();
            await NewAccessScreen.yaSoyClienteButton.click();
            await LoginScreen.usernameInput.setValue(global.USERNAME);
            await LoginScreen.passwordInput.setValue(global.PASSWORD);
            await LoginScreen.iniciarSesionButton.click();
            await PinConfigurationScreen.setPin(8723);
            await DashboardScreen.dismissDashboardNovelty();
            await Helpers.verifyElementIsDisplayed(DashboardScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
            await DashboardScreen.historialdeTransaccionesButton.click();
            await DashboardScreen.transaccionesLiquidadasOption.click();
            //await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS, false);
            await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
            await Helpers.verifyElementIsDisplayed(this.noExistenTransaccionesText, Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS)
            }
    }
}

export default new SettledTransactionsScreen();

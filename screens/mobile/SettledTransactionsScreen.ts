import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";

class SettledTransactionsScreen {
  get screenTitle() {
    return $("//*[contains(@text,'Transacciones liquidadas')]");
  }
  get noExistenTransaccionesText() {
    return $("//*[contains(@text,'No existen transacciones')]");
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
}

export default new SettledTransactionsScreen();

class SettledTransactionsInfoScreen {
  get trxAmmount() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvMenuAmount"]'
    );
  }
  get trxCardNumber() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvCardNumber"]'
    );
  }
  get trxDateTime() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvDateTime"]'
    );
  }
  get trxApprovalNumber() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvApproval"]'
    );
  }
  get trxType() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvtransactionType"]'
    );
  }
  get trxTerminalId() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTerminalId"]'
    );
  }
  get trxBatchNumber() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLotNo"]'
    );
  }
  get trxReferenceNumber() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvRefNo"]'
    );
  }
  async verifyTrxInformation() {
    //Date time validation
    global["Settled Transaction date and time In Trx Info Screen"] = String(
      await driver.getElementText(await this.trxDateTime.elementId)
    );
    if (
      global["Settled Transaction date and time"] !=
      global["Settled Transaction date and time In Trx Info Screen"]
    ) {
      console.log(
        "expected Date time: " + global["Settled Transaction date and time"]
      );
      console.log(
        "Current date time: " +
          global["Settled Transaction date and time In Trx Info Screen"]
      );
      //mark error
      throw new Error(
        "Date time on Trx Info Screen is different from the expected \n"+
        "expected Date time: " + global["Settled Transaction date and time"] + "\n" +
        "Current date time: " + global["Settled Transaction date and time In Trx Info Screen"]
      );
    }

    //Amount validation
    global["Settled Transaction Amount In Trx Info Screen"] = String(
      await driver.getElementText(await this.trxAmmount.elementId)
    );
    if (
      global["Settled Transaction Amount"] !=
      global["Settled Transaction Amount In Trx Info Screen"]
    ) {
      console.log("expected amount: " + global["Settled Transaction Amount"]);
      console.log(
        "Current amount: " +
          global["Settled Transaction Amount In Trx Info Screen"]
      );
      //mark error
      throw new Error(
        "Amount on Trx Info Screen is different from the expected"
      );
    }

    //Credit card validation
    global["Settled Transaction Credit Card Number In Trx Info Screen"] =
  String(await this.trxCardNumber.getText()).replace(/\s+/g, '');
    if (
      global["Settled Transaction Credit Card Number"] !=
      global["Settled Transaction Credit Card Number In Trx Info Screen"]
    ) {
      console.log(
        "expected credit card: " +
          global["Settled Transaction Credit Card Number"]
      );
      console.log(
        "Current amount: " +
          global["Settled Transaction Credit Card Number In Trx Info Screen"]
      );
      //mark error
      throw new Error(
        "Credit Card on Trx Info Screen is different from the expected \n" +
        "expected credit card: " + global["Settled Transaction Credit Card Number"] + "\n" +
        "Current credit card: " + global["Settled Transaction Credit Card Number In Trx Info Screen"]
      );
    }

    //Trx Type validation
    global["Settled Transaction type In Trx Info Screen"] = String(
      await driver.getElementText(await this.trxType.elementId)
    );
    if (
      global["Settled Transaction type"] !=
      global["Settled Transaction type In Trx Info Screen"]
    ) {
      console.log("expected trx type: " + global["Settled Transaction type"]);
      console.log(
        "Current amount: " +
          global["Settled Transaction type In Trx Info Screen"]
      );
      //mark error
      throw new Error(
        "Trx Type on Trx Info Screen is different from the expected"
      );
    }

    let expected = global["Settled Transaction Approval Number In Trx Info Screen"] as string;
    //expected = String(expected).replace(/^Aprobada\s*/, '');
const actual = global["Settled Transaction Approval Number In Trx Info Screen"];

if (expected !== actual) {
  console.log("expected trx approval number: " + expected);
  console.log("Current trx approval number: " + actual);
  throw new Error(
    "Trx Approval Number on Trx Info Screen is different from the expected\n" +
    "Expected: " + expected + "\n" +
    "Actual: " + actual
  );
    }
  }
}
export default new SettledTransactionsInfoScreen();

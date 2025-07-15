import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import QrTransactionsScreen from '../../screens/mobile/QrTransactionsScreen.ts';

When(`User clicks on Transacciones QR`, async () => {
  await DashboardScreen.transaccionesQROption.click();
});

Then(`User should not see any QR transaction`, async () => {
  await Helpers.verifyElementExist(
    QrTransactionsScreen.noExistenTransaccionesText,
    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
  );
});
Given('User navigates to QR Transactions screen as admin user', async () => {
  let isUserAtTrxScreen:boolean = await Helpers.verifyElementExist(
      QrTransactionsScreen.screenTitle,
      Helpers.THREE_SECONDS_IN_MILLISECONDS
    );
    if (!isUserAtTrxScreen) {
    await QrTransactionsScreen.navigateToSettledTransactionScreen();
    }
})

Given('User sets date to year twenty twenty', async () => {
    await Helpers.setTrxDateOnDesdeCalendar(true);
})

Then('User should see at least one QR transaction', async () => {
  await Helpers.verifyElementExist(
    QrTransactionsScreen.qrTransactionItem,
    Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
  );
})

Given('User can see at least one qr transaction', async () => {
    let isQrTrxVisible = await Helpers.verifyElementExist(
    QrTransactionsScreen.qrTransactionItem,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  if (!isQrTrxVisible) {
    let isUserAtTrxScreen:boolean = await Helpers.verifyElementExist(
        QrTransactionsScreen.screenTitle,
        Helpers.THREE_SECONDS_IN_MILLISECONDS
      );
      if (!isUserAtTrxScreen) {
      await QrTransactionsScreen.navigateToSettledTransactionScreen();
      }
    await Helpers.setTrxDateOnDesdeCalendar(true);
    }
    await Helpers.verifyElementIsDisplayed(
    QrTransactionsScreen.qrTransactionItem,
    Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
  );
})

When('User search the Amount', async () => {
    global.SCENARIO_CONTEXT["firstQrTrxAmount"] = await QrTransactionsScreen.firstTrxAmount.getText();
    let amountStr = (global.SCENARIO_CONTEXT["firstQrTrxAmount"] as string)
    .toString()
    .replace("RD", "")
    .replace("$", "")
    .replace(",", "")
    .trim();

    let amount: number = Math.floor(parseFloat(amountStr)); // removes decimal part
    await QrTransactionsScreen.searchBarTextfield.click();
    await QrTransactionsScreen.searchBarTextfield.setValue(amount.toString());
})

Then('the transactions should match the Amount', async () => {
  let firstTrxAmount = await QrTransactionsScreen.firstTrxAmount.getText();
  let amountStr = (global.SCENARIO_CONTEXT["firstQrTrxAmount"] as string)
  if (firstTrxAmount != amountStr) {
    console.log("The transaction amount does not match the searched amount");
    throw new Error(
      `Amount different from expected. \nExpected amount: ${amountStr}, but found: ${firstTrxAmount}`
    );
  }
  await QrTransactionsScreen.clearSearchBarButton.click();
})

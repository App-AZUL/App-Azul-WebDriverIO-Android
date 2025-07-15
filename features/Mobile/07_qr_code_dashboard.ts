import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import QrCodeScreen from "../../screens/mobile/QrCodeScreen.ts";
import SettledTransactionsScreen from "../../screens/mobile/SettledTransactionsScreen.ts";

Given('User is on QR Code screen', async () => {
    let isUserAtQRCodeScreen:Boolean = await Helpers.verifyElementExist(
      QrCodeScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    if (!isUserAtQRCodeScreen) {
      await DashboardScreen.navigateToDashboard(
        global.USERNAME as string,
        global.PASSWORD as string
      );
      await DashboardScreen.qrButton.click();
    }
})

Then('User should see the QR code', async () => {
  await Helpers.verifyElementExist(QrCodeScreen.qrCodeImage, Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS);
})

When('User clicks on Descargar button', async () => {
  await QrCodeScreen.descargarButton.click();
})

Then('a download message should be visible', async () => {
  await Helpers.verifyElementExist(QrCodeScreen.qrDownloadedSnackbar, Helpers.FIVE_SECONDS_IN_MILLISECONDS);
})

When('User clicks on Compartir button', async () => {
  await QrCodeScreen.compartirButton.click();
})

Then('the share menu should be visible', async () => {
  await Helpers.verifyElementExist(QrCodeScreen.qrSharingMenu, Helpers.FIVE_SECONDS_IN_MILLISECONDS);
})

Then('if user press back should return to QR Code screen', async () => {
  await driver.back(); // Assuming driver is available in the context
  await Helpers.verifyElementExist(QrCodeScreen.screenTitle, Helpers.FIVE_SECONDS_IN_MILLISECONDS);
})

When('User slides to left', async () => {
  await QrCodeScreen.slideLeftButton.click();
})

Then('the current day and month should be visible', async () => {
  await Helpers.verifyElementExist(QrCodeScreen.currentDayText, Helpers.FIVE_SECONDS_IN_MILLISECONDS);
})

Then('a text saying No existen transacciones should be visible', async () => {
  await Helpers.verifyElementIsDisplayed(
      SettledTransactionsScreen.noExistenTransaccionesText,
      Helpers.TWENTY_SECONDS_IN_MILLISECONDS
    );
})

import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import SettledTransactionsScreen from "../../screens/mobile/SettledTransactionsScreen.ts";
import SettledTransactionsInfoScreen from "../../screens/mobile/SettledTransactionsInfoScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import Commons from "../../screens/mobile/Commons.ts";

Given(`User without permissions is on Dashboard screen`, async () => {
  try {
    let userNameElement = $("//*[contains(@text,'zada_3')]");
    let isUserActive = await Helpers.verifyElementIsDisplayed(
      userNameElement,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    if (!isUserActive) {
      await DashboardScreen.navigateToDashboard(
        global.NOT_PERMISSION_USERNAME as string,
        global.PASSWORD as string
      );
    } else {
      await DashboardScreen.burgerMenu.click();
      await DashboardScreen.miPerfil.click();
    }
  } catch (error) {
    await DashboardScreen.navigateToDashboard(
      global.NOT_PERMISSION_USERNAME as string,
      global.PASSWORD as string
    );
    await DashboardScreen.burgerMenu.click();
    await DashboardScreen.miPerfil.click();
  }
});
When(`User clicks on Historial de Transacciones button`, async () => {
  await DashboardScreen.historialdeTransaccionesButton.click();
});

When(`User clicks on Transacciones Liquidadas`, async () => {
  await DashboardScreen.transaccionesLiquidadasOption.click();
});

When(`User clicks on Transacciones QR`, async () => {
  await DashboardScreen.transaccionesQROption.click();
});

Then(
  `User should see a message saying that the proffile doesnt have access`,
  async () => {
    await Helpers.verifyElementIsDisplayed(
      Commons.proffileWithoutAccessModalTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementIsDisplayed(
      Commons.proffileWithoutAccessModalBody,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
);

Then(`User should not see any transaction`, async () => {
  await Helpers.verifyElementIsDisplayed(
    SettledTransactionsScreen.noExistenTransaccionesText,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see a message asking for permission`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Given(`User is on Settled Transaction screen`, async () => {
  await Helpers.verifyElementIsDisplayed(
    SettledTransactionsScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(
  `User selects Affiliated Auto Rental location on settled trx screen`,
  async () => {
    await SettledTransactionsScreen.locationFilter.click();
    await DashboardScreen.azulLocationGroupElement.click();
    await DashboardScreen.affiliatedAutoRentalElement.click();
  }
);

When(`User sets date to january {int}`, async (arg0: number) => {
  await Helpers.setDateJanuary2022onDesdeCalendar();
});

Then(`User should see at least one transaction`, async () => {
  let transactionText = $("//*[contains(@text,'Crédito')]");
  await Helpers.verifyElementIsDisplayed(
    transactionText,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Given(`User can see at least one transaction`, async () => {
  await SettledTransactionsScreen.verifyFirstTransactionInListExist();
});

When(`User clicks three dots button of a transaction`, async () => {
  await SettledTransactionsScreen.firstSettledTransactionThreeDotsButton.click();
});

Then(`the transaction info should match`, async () => {
  await SettledTransactionsScreen.verifyTrxInfoModal();
});

When(`User clicks on chevron details button`, async () => {
  await SettledTransactionsScreen.chevronTrxDetailsButton.click();
});

Then(`the transaction details should match`, async () => {
  await SettledTransactionsInfoScreen.verifyTrxInformation();
});

When(`User search the No.Lote`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User checks the details`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User search the No.aprobacion`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User search the No.terminal`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User search the No.Tarjeta`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User clicks Solicitar devolucion button`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User tries to set a character that is not a number`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`User sould see a message asking for the Amount`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`the Amount should be {int}`, (arg0: number) => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should be in Solicitar devolucion screen`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

When(`User types {int} Amount`, (arg0: number) => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User types {float} Amount`, (arg0: number) => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User clicks on Motivo de la devolucion field`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

When(`User selects Transaccion fraudulenta option`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`the Solicitar a AZUL button should be enabled`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

When(`User clicks Solicitar a AZUL button`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`User should be on Request Received screen`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see the correct SLA message`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see the request number`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see the correct MID`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see the correct Location Name`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

When(`User press X button`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`User should be on Settled Transaction query screen`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Given(
  `User can see at least one transaction after switching the location`,
  () => {
    // [Given] Sets up the initial state of the system.
  }
);

Then(`User should stay in Solicitar devolucion form`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

When(`User types a comment`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`User clicks on Motivo de la devolucion field`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User selects Transaccion fraudulenta option`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User selects Monto Incorrecto option`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User selects Transaccion Duplicada option`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User selects Pagado por otro medio option`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User selects Servicio no recibido option`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User types a comment`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

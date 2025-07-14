import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import SettledTransactionsScreen from "../../screens/mobile/SettledTransactionsScreen.ts";
import SettledTransactionsInfoScreen from "../../screens/mobile/SettledTransactionsInfoScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import Commons from "../../screens/mobile/Commons.ts";
import SettledTransactionsDetailsScreen from "../../screens/mobile/SettledTransactionsDetailsScreen.ts";
import SolicitarDevolucionScreen from "../../screens/mobile/SolicitarDevolucionScreen.ts";
import RequestCreatedSettledTransactionScreen from "../../screens/mobile/RequestCreatedSettledTransactionScreen.ts";

Given(`User is on Solicitar devolucion form`, async () => {
  let isUserAtDevolucionForm:boolean = await Helpers.verifyElementExist(SolicitarDevolucionScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
  if (!isUserAtDevolucionForm) {
    await SettledTransactionsScreen.queryTransactions();
    await SettledTransactionsScreen.firstTrxThreeDotsButton.click();
    await SettledTransactionsScreen.trxSolicitarDevolucionButton.click();
    await Helpers.verifyElementExist(SolicitarDevolucionScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
  }
});
Given(`User without permissions is on Dashboard screen`, async () => {
  /*try {
    let userNameElement = $("//*[contains(@text,'"+global.NOT_PERMISSION_NAME+"')]");
    let isUserActive = !!(await Helpers.verifyElementIsDisplayed(
      userNameElement,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
  ).catch(() => false));  
    if (!isUserActive) {*/
      await DashboardScreen.navigateToDashboard(
        global.NOT_PERMISSION_USERNAME as string,
        global.PASSWORD as string, false
      );
    /*} else {
      //await DashboardScreen.burgerMenu.click();
      //await DashboardScreen.miPerfil.click();
    }
  } catch (error) {
    await DashboardScreen.navigateToDashboard(
      global.NOT_PERMISSION_USERNAME as string,
      global.PASSWORD as string
    );
    //await DashboardScreen.burgerMenu.click();
    //await DashboardScreen.miPerfil.click();
  }*/
});
Given(`User navigates to Settle Transaction screen as admin user`, async () => {
  let isUserAtTrxScreen:boolean = await Helpers.verifyElementExist(
    SettledTransactionsScreen.screenTitle,
    Helpers.THREE_SECONDS_IN_MILLISECONDS
  );
  if (!isUserAtTrxScreen) {
  await SettledTransactionsScreen.navigateToSettledTransactionScreen();
  }
});
Then(`User should stay in Dashboard screen after dismissing the message`, async () => {
  await Helpers.dismissPopUp();
  await driver.back();
  await Helpers.verifyElementIsDisplayed(
      DashboardScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
});
Then(`User should stay in Dashboard screen after dismissing the QR message`, async () => {
  await DashboardScreen.closeQRMessageButton.click();
  await driver.back();
  await Helpers.verifyElementIsDisplayed(
      DashboardScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
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
    /*await Helpers.verifyElementIsDisplayed(
      Commons.proffileWithoutAccessModalBody,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );*/
  }
);

Then(
  `User should see a message saying that the proffile doesnt have QR Product`,
  async () => {
    await Helpers.verifyElementIsDisplayed(
      Commons.proffileWithoutQrCodeProductModalMessage,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
);

Then(`User should not see any transaction`, async () => {
  await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
  await Helpers.verifyElementIsDisplayed(
    SettledTransactionsScreen.noExistenTransaccionesText,
    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
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
  `User selects the expected location on settled trx screen`,
  async () => {
    /*await SettledTransactionsScreen.locationFilter.click();
    await DashboardScreen.azulLocationGroupElement.click();
    await DashboardScreen.affiliatedAutoRentalElement.click();*/
    await SettledTransactionsScreen.selectTrxLocation();
  }
);

When(
  `User filters trx by date on year two thousand twenty two`,
  async () => {
    await Helpers.verifyElementNotExist(
      Commons.newLoadingAnimation,
      Helpers.TWENTY_FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.setDateJanuary2022onDesdeCalendar();
    driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
    await Helpers.verifyElementNotExist(
      Commons.newLoadingAnimation,
      Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS
    );
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
  let isTransactionExist:boolean = await Helpers.verifyElementExist(
    SettledTransactionsScreen.firstSettledTransactionContainer,
    Helpers.THREE_SECONDS_IN_MILLISECONDS
  );
  if (!isTransactionExist) {
    await SettledTransactionsScreen.navigateToSettledTransactionScreen();
  
  await SettledTransactionsScreen.selectTrxLocation();
  await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
  await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
  await SettledTransactionsScreen.selectAnyDayFrom2022();
  await driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
  await Helpers.verifyElementNotExist(Commons.newLoadingAnimation, Helpers.TWENTY_SECONDS_IN_MILLISECONDS, false);
  await Helpers.verifyElementExist(SettledTransactionsScreen.firstSettledTransactionContainer, Helpers.TEN_SECONDS_IN_MILLISECONDS)   

  /*await SettledTransactionsScreen.queryTransactions();*/
  }
  await SettledTransactionsScreen.verifyFirstTransactionInListExist();
});

When(`User clicks three dots button of a transaction`, async () => {
  await SettledTransactionsScreen.firstSettledTransactionThreeDotsButton.click();
});

Then(`the transaction info should match`, async () => {
  await SettledTransactionsScreen.verifyTrxInfoModal();
});

Then(`User still in screen after pressing in the middle`, async () => {
  await driver.back();
  await SettledTransactionsScreen.clearAllFiltersButton.click();
});

When(`User clicks on chevron details button`, async () => {
  await SettledTransactionsScreen.chevronTrxDetailsButton.click();
});

When(`User search the No. de aprobacion`, async () => {
  global.SCENARIO_CONTEXT["firstTrxNoApproval"] = await SettledTransactionsDetailsScreen.approvalNumber.getAttribute("text");
    await Helpers.pressAppBackButton();
    await SettledTransactionsScreen.trxSearchBar.click();
    await SettledTransactionsScreen.noAprobacionSearchOption.click();
    (await SettledTransactionsScreen.trxSearchBar).setValue(global.SCENARIO_CONTEXT["firstTrxNoApproval"]);
});

Then(`the transaction details should match`, async () => {
  await SettledTransactionsInfoScreen.verifyTrxInformation();
  await Helpers.pressAppBackButton();
  await Helpers.verifyElementExist(SettledTransactionsScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

When(`User search the No.Lote`, async () => {
  global.SCENARIO_CONTEXT["firstTrxNoLote"] = await SettledTransactionsDetailsScreen.noLote.getText();
    await Helpers.pressAppBackButton();
    await SettledTransactionsScreen.trxSearchBar.click();
    (await SettledTransactionsScreen.trxSearchBar).setValue(global.SCENARIO_CONTEXT["firstTrxNoLote"]);
});

When(`User search the No.terminal`, async () => {
  global.SCENARIO_CONTEXT["firstTrxNoTerminal"] = await SettledTransactionsDetailsScreen.terminalId.getAttribute("text");
    await Helpers.pressAppBackButton();
    (await SettledTransactionsScreen.trxSearchBar).setValue(global.SCENARIO_CONTEXT["firstTrxNoTerminal"]);
});

When(`User search the No.Tarjeta`, async () => {
  global.SCENARIO_CONTEXT["firstTrxNoTarjeta"] = await SettledTransactionsDetailsScreen.trxCardNumber.getAttribute("text");
    await Helpers.pressAppBackButton();
    (await SettledTransactionsScreen.trxSearchBar).setValue(global.SCENARIO_CONTEXT["firstTrxNoTarjeta"]);
});

When(`User clicks Solicitar devolucion button`, async () => {
  await SettledTransactionsScreen.trxSolicitarDevolucionButton.click();
  await Helpers.verifyElementExist(SolicitarDevolucionScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

When(`User tries to set a character that is not a number`, async () => {
  await SolicitarDevolucionScreen.montoADevolverTextfield.clearValue();
  await SolicitarDevolucionScreen.montoADevolverTextfield.setValue("NOTNUMBER");
  await SolicitarDevolucionScreen.montoADevolverTextfield.click(); // To trigger the validation
  await SolicitarDevolucionScreen.motivoDeDevolucionTextfield.click();
  await driver.back(); // Go back to the text field to check the value
});

Then(`User sould see a message asking for the Amount`, async () => {
  await Helpers.verifyElementExist(SolicitarDevolucionScreen.ingreseElMontoText, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

Then(`the Amount should be 0`, async () => {
  let valueInTextfield:String = await SolicitarDevolucionScreen.montoADevolverTextfield.getAttribute("text");
  let expectedValueInTextfield = "US$ 0.00";
  let expectedValueInTextfieldInDop = "RD$ 0.00";
  if (valueInTextfield != expectedValueInTextfield && valueInTextfield != expectedValueInTextfieldInDop) {
    throw new Error("The value on text field is different from expected \n"+"Value on textfield: "+valueInTextfield+"\n" + "Expected value: "+expectedValueInTextfield + " or " + expectedValueInTextfieldInDop);
  }
});

Then(`User should be in Solicitar devolucion screen`, async () => {
  await Helpers.verifyElementExist(SolicitarDevolucionScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

When(`User types 0 Amount`, async () => {
  await SolicitarDevolucionScreen.montoADevolverTextfield.setValue("0");
});

When(`User types 0.01 Amount`, async () => {
  await SolicitarDevolucionScreen.montoADevolverTextfield.setValue("0.01");
});

When(`User clicks on Motivo de la devolucion field`, async () => {
  await SolicitarDevolucionScreen.motivoDeDevolucionTextfield.click();
});

When(`User selects Transaccion fraudulenta option`, async () => {
  await SolicitarDevolucionScreen.transaccionFraudulentaOption.click();
});

When(`User clicks Solicitar a AZUL button`, async () => {
  await SolicitarDevolucionScreen.solicitarAzulButton.click();
});

Then(`User should be on Request Received screen`, async () => {
  await Helpers.verifyElementExist(RequestCreatedSettledTransactionScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

Then(`User should see the correct SLA message`, async () => {
  await Helpers.verifyElementExist(RequestCreatedSettledTransactionScreen.slaText, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

Then(`User should see the request number`, async () => {
  await Helpers.verifyElementExist(RequestCreatedSettledTransactionScreen.requestNumberText, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

Then(`User should see the correct MID`, async () => {
  await Helpers.verifyElementExist(RequestCreatedSettledTransactionScreen.locationMid, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

Then(`User should see the correct Location Name`, async () => {
  await Helpers.verifyElementExist(RequestCreatedSettledTransactionScreen.locationName, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

When(`User press X button`, async () => {
  await RequestCreatedSettledTransactionScreen.closeButton.click();
});

Then(`User should be on Settled Transaction query screen`, async () => {
  await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);
  await Helpers.verifyElementExist(SettledTransactionsScreen.noExistenTransaccionesText, Helpers.FIVE_SECONDS_IN_MILLISECONDS);
});

Given(
  `User can see at least one transaction after switching the location`,
  async () => {
    await SettledTransactionsScreen.queryTransactions();
  }
);

Then(`User should stay in Solicitar devolucion form`, async () => {
  await Helpers.verifyElementExist(SolicitarDevolucionScreen.screenTitle, Helpers.TEN_SECONDS_IN_MILLISECONDS);
});

When(`User types a comment`, async () => {
  await SolicitarDevolucionScreen.comentarioTextField.setValue("Comment for refund on Settled Transaction");
});

Then(`User selects Monto Incorrecto option`, async () => {
  await SolicitarDevolucionScreen.montoIncorrectoOption.click();
});

Then(`User selects Transaccion Duplicada option`, async () => {
  await SolicitarDevolucionScreen.transaccionDuplicadaOption.click();
});

Then(`User selects Pagado por otro medio option`, async () => {
  await SolicitarDevolucionScreen.pagadoPorOtroMedioOption.click();
});

Then(`User selects Servicio no recibido option`, async () => {
  await SolicitarDevolucionScreen.servicioNoRecibidoOption.click();
});

Then('User can see at least one transaction if goes back', async () => {
  await Helpers.pressAppBackButton();
  await Helpers.verifyElementExist(SettledTransactionsScreen.firstSettledTransactionContainer, Helpers.TEN_SECONDS_IN_MILLISECONDS);
})

When('User search the No. de terminal', async () => {
  global.SCENARIO_CONTEXT["firstTrxNoTerminal"] = await SettledTransactionsDetailsScreen.terminalId.getAttribute("name");
    await Helpers.pressAppBackButton();
    await SettledTransactionsScreen.trxSearchBar.click();
    await SettledTransactionsScreen.noTerminalSearchOption.click();
    (await SettledTransactionsScreen.trxSearchBar).setValue(global.SCENARIO_CONTEXT["firstTrxNoTerminal"]);
})

When('User search the No. de tarjeta', async () => {
  global.SCENARIO_CONTEXT["firstTrxNoTarjeta"] = await SettledTransactionsDetailsScreen.trxCardNumber.getAttribute("text");
    await Helpers.pressAppBackButton();
    await SettledTransactionsScreen.trxSearchBar.click();
    await SettledTransactionsScreen.noTarjetaSearchOption.click();
    let numberToSearch:string = global.SCENARIO_CONTEXT["firstTrxNoTarjeta"]; // Remove spaces
    (await SettledTransactionsScreen.trxSearchBar).setValue(numberToSearch.slice(0, 4));
})
/*
When('User search the No. de terminal', async () => {
  global.SCENARIO_CONTEXT["firstTrxNoTerminal"] = await SettledTransactionsDetailsScreen.terminalId.getAttribute("name");
    await SettledTransactionsScreen.trxSearchFilterArrow.click();
    await SettledTransactionsScreen.trxNoTerminalSearchOption.click();
    (await SettledTransactionsScreen.trxSearchBar).setValue(global.SCENARIO_CONTEXT["firstTrxNoTerminal"]);
})
*/
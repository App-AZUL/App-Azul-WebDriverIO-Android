import { Given, When, Then } from "@cucumber/cucumber";
import PaymentLinkTrxScreen from "../../screens/mobile/PaymentLinkTrxScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import PaymentLinkTrxDetailsScreen from "../../screens/mobile/PaymentLinkTrxDetailsScreen.ts";
import PaymentLinkCalculatorScreen from "../../screens/mobile/PaymentLinkCalculatorScreen.ts";
import GeneratePaymentLinkFormScreen from "../../screens/mobile/GeneratePaymentLinkFormScreen.ts";
import GeneratePaymentLinkConfirmationScreen from "../../screens/mobile/GeneratePaymentLinkConfirmationScreen.ts";
import PaymentLinkGeneratedScreen from "../../screens/mobile/PaymentLinkGeneratedScreen.ts";

Given('User is on PL Transaction Query screen', async () => {
  await PaymentLinkTrxScreen.navigateToPaymentLinkTrxScreen();
})

Given('User can see at least one PL transaction', async () => {
    let doesAnyPLTransactionExist:Boolean = await Helpers.verifyElementExist(
        PaymentLinkTrxScreen.firstPLTransactionAmount,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
        );
    let isUserAtPaymentLinkTrxScreen:Boolean = await Helpers.verifyElementExist(
      PaymentLinkTrxScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    if (!doesAnyPLTransactionExist) {
      console.log("No PL transactions found, navigating to Payment Link Transactions screen");
      await PaymentLinkTrxScreen.navigateToPaymentLinkTrxScreen();
    } else if (isUserAtPaymentLinkTrxScreen) {
      console.log("User could not see any transaction, but is in the PL Trx screen, setting date to 2022");
      await Helpers.setTrxDateOnDesdeCalendar();
    }
})

When('And User filters PL trx by date on year two thousand twenty two', async () => {
  await Helpers.setTrxDateOnDesdeCalendar();
})

When('User search the PL trx Amount', async () => {
  global.SCENARIO_CONTEXT["firstPLTrxAmount"] = await PaymentLinkTrxScreen.firstPLTransactionAmount.getText();
      let amountStr = (global.SCENARIO_CONTEXT["firstPLTrxAmount"] as string)
      .toString()
      .replace("RD", "")
      .replace("$", "")
      .replace(",", "")
      .trim();
  
      let amount: number = Math.floor(parseFloat(amountStr)); // removes decimal part
      await PaymentLinkTrxScreen.searchBarTextfield.click();
      await PaymentLinkTrxScreen.searchBarTextfield.setValue(amount.toString());
})

Then('the PL transactions should match the Amount', async () => {
  let firstTrxAmount = await PaymentLinkTrxScreen.firstPLTransactionAmount.getText();
    let amountStr = (global.SCENARIO_CONTEXT["firstPLTrxAmount"] as string)
    if (firstTrxAmount != amountStr) {
      console.log("The transaction amount does not match the searched amount");
      throw new Error(
        `Amount different from expected. \nExpected amount: ${amountStr}, but found: ${firstTrxAmount}`
      );
    }
    await PaymentLinkTrxScreen.clearSearchBarButton.click();
})

When('User search the Link ID', async () => {
  global.SCENARIO_CONTEXT["firstPLLinkID"] = await PaymentLinkTrxScreen.firstPLTransactionLinkID.getText();
  let linkIDStr = (global.SCENARIO_CONTEXT["firstPLLinkID"] as string).split("Link ID: ")[1];
  await PaymentLinkTrxScreen.trxTypeFilter.click();
  await PaymentLinkTrxScreen.linkIdOption.click();
  await PaymentLinkTrxScreen.searchBarTextfield.setValue(linkIDStr);
})

Then('the PL transaction should match the Link ID', async () => {
  let firstTrxLinkID:string = await PaymentLinkTrxScreen.firstPLTransactionLinkID.getText();
  let linkIDStr:string = (global.SCENARIO_CONTEXT["firstPLLinkID"] as string);
  if (firstTrxLinkID != linkIDStr) {
    console.log("The transaction Link ID does not match the searched Link ID");
    throw new Error(
      `Link ID different from expected. \nExpected Link ID: ${linkIDStr}, but found: ${firstTrxLinkID}`
    );
  }
  await PaymentLinkTrxScreen.clearSearchBarButton.click();
})

Given('User captured all the first trx details', async () => {
  global.SCENARIO_CONTEXT["firstPLTrxAmount"] = await PaymentLinkTrxScreen.firstPLTransactionAmount.getText();
  global.SCENARIO_CONTEXT["firstPLLinkID"] = await PaymentLinkTrxScreen.firstPLTransactionLinkID.getText();
  global.SCENARIO_CONTEXT["firstPLTrxType"] = await PaymentLinkTrxScreen.firstPLTransactionType.getText();
  global.SCENARIO_CONTEXT["firstPLTrxStatus"] = await PaymentLinkTrxScreen.firstPLTransactionStatus.getText();
  global.SCENARIO_CONTEXT["firstPLTrxDate"] = await PaymentLinkTrxScreen.firstPLTransactionDate.getText();
  global.SCENARIO_CONTEXT["firstPLTrxLocality"] = await PaymentLinkTrxScreen.firstPLTransactionLocality.getText();
})

When('clicks on a transaction three dots', async () => {
  await PaymentLinkTrxScreen.firstTrxThreeDots.click();
})

When('User clicks the details', async () => {
  await PaymentLinkTrxScreen.trxDetailsChevronButton.click();
})

Then('the transaction Amount should match', async () => {
  let trxAmountInApp:string = await PaymentLinkTrxDetailsScreen.trxAmount.getText();
  let expectedAmount:string = (global.SCENARIO_CONTEXT["firstPLTrxAmount"] as string);
  if (trxAmountInApp != expectedAmount) {
    console.log("The transaction Amount does not match the expected Amount");
    throw new Error(
      `Amount different from expected. \nExpected Amount: ${expectedAmount}, but found: ${trxAmountInApp}`
    );
  }
})

Then('the transaction Type should match', async () => {
  let trxTypeInApp:string = await PaymentLinkTrxDetailsScreen.trxType.getText();
  let expectedType:string = (global.SCENARIO_CONTEXT["firstPLTrxType"] as string);
  if (trxTypeInApp != expectedType) {
    console.log("The transaction Type does not match the expected Type");
    throw new Error(
      `Type different from expected. \nExpected Type: ${expectedType}, but found: ${trxTypeInApp}`
    );
  }
})

Then('the transaction Status should match', async () => {
  let trxStatusInApp:string = await PaymentLinkTrxDetailsScreen.trxStatus.getText();
  let expectedStatus:string = (global.SCENARIO_CONTEXT["firstPLTrxStatus"] as string);
  if (trxStatusInApp != expectedStatus) {
    console.log("The transaction Status does not match the expected Status");
    throw new Error(
      `Status different from expected. \nExpected Status: ${expectedStatus}, but found: ${trxStatusInApp}`
    );
  }
})

Then('the transaction Link ID should match', async () => {
  let trxLinkIDInApp:string = await PaymentLinkTrxDetailsScreen.trxLinkID.getText();
  let expectedLinkID:string = (global.SCENARIO_CONTEXT["firstPLLinkID"] as string);
  if (trxLinkIDInApp != expectedLinkID) {
    console.log("The transaction Link ID does not match the expected Link ID");
    throw new Error(
      `Link ID different from expected. \nExpected Link ID: ${expectedLinkID}, but found: ${trxLinkIDInApp}`
    );
  }
})

Then('the transaction Date should match', async () => {
  let trxDateInApp:string = await PaymentLinkTrxDetailsScreen.trxDate.getText();
  let expectedDate:string = (global.SCENARIO_CONTEXT["firstPLTrxDate"] as string);
  if (trxDateInApp != expectedDate) {
    console.log("The transaction Date does not match the expected Date");
    throw new Error(
      `Date different from expected. \nExpected Date: ${expectedDate}, but found: ${trxDateInApp}`
    );
  }
})

Then('the transaction Locality should match', async () => {
  let trxLocalityInApp:string = await PaymentLinkTrxDetailsScreen.trxLocalityName.getText();
  let expectedLocality:string = (global.SCENARIO_CONTEXT["firstPLTrxLocality"] as string);
  if (trxLocalityInApp != expectedLocality) {
    console.log("The transaction Locality does not match the expected Locality");
    throw new Error(
      `Locality different from expected. \nExpected Locality: ${expectedLocality}, but found: ${trxLocalityInApp}`
    );
  }
})

Then('if user goes back to the PL transactions screen', async () => {
  await Helpers.pressAppBackButton();
})

Then('User should be on the PL transactions screen', async () => {
  await Helpers.verifyElementExist(
    PaymentLinkTrxScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
})
When('User clicks the Crear shortcut', async () => {
  await PaymentLinkTrxScreen.crearShortcutButton.click();
})

When('User presses ten times a random number', async () => {
  await PaymentLinkCalculatorScreen.setTenRandomNumbers();
})

Then('the app should show a message saying Limit Amount exceed', async () => {
  await Helpers.verifyElementExist(
    PaymentLinkCalculatorScreen.amountExceededSnackbar,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
})

Given('User is on PL calculator screen', async () => {
  await PaymentLinkCalculatorScreen.navigateToPaymentLinkCalculatorScreen();
})

When('User sets an Amount bitween {float} and {float}', async (float: number, float2: number) => {
  // Generate random float between 0.01 and 9999999.99
  const min = 0.01;
  const max = 9999999.99;
  const randomFloat = parseFloat((Math.random() * (max - min) + min).toFixed(2));
  
  // Convert to string and remove the decimal point
  const randomString = randomFloat.toString().replace('.', '');
  
  console.log(`Random float: ${randomFloat}`);      // e.g., 12345.67
  console.log(`Stored string: ${randomString}`);    // e.g., "1234567"

  await PaymentLinkCalculatorScreen.setPaymentLinkAmount(randomString);
})

When('User clicks on Continuar button', async () => {
  await PaymentLinkCalculatorScreen.continuarButton.click();
})

Then('User should see a form with the PL details', async () => {
  await GeneratePaymentLinkFormScreen.verifyGeneratePaymentLinkFormElements();
})

When('User clicks on Confirmar', async () => {
  await GeneratePaymentLinkFormScreen.confirmarButton.click();
})

Then('User should see a confirmation screen with all the details', async () => {
    await GeneratePaymentLinkConfirmationScreen.verifyGeneratePaymentLinkConfirmationElements();
})

Then('all the information match', async () => {
  let locationNameinApp = await GeneratePaymentLinkConfirmationScreen.locationTextfield.getText();
  let expectedLocationName = (global.SCENARIO_CONTEXT["firstPLTrxLocality"] as string);
  if (locationNameinApp != expectedLocationName) {
    console.log("The location Name does not match the expected Name");
    throw new Error(
      `Location Name different from expected. \nExpected Location Name: ${expectedLocationName}, but found: ${locationNameinApp}`
    );
  }

  let trxAmountInApp = await GeneratePaymentLinkConfirmationScreen.totalAmountTextfield.getText();
  let expectedAmount = (global.SCENARIO_CONTEXT["firstPLTrxAmount"] as string);
  if (trxAmountInApp != expectedAmount) {
    console.log("The transaction Amount does not match the expected Amount");
    throw new Error(
      `Amount different from expected. \nExpected Amount: ${expectedAmount}, but found: ${trxAmountInApp}`
    );
  }
})

When('User slide to generate the PL', async () => {
  // Locate the element
  const slider = GeneratePaymentLinkConfirmationScreen.deslizaParaGenerarLinkSlider; // adjust selector as needed
  
  // Get element location and size
  const location = await slider.getLocation();
  const size = await slider.getSize();
  
  // Calculate swipe coordinates
  const startX = location.x + 10; // slight offset to avoid edge
  const startY = location.y + size.height / 2;
  const endX = location.x + size.width - 10;
  const endY = startY;
  
  // Perform swipe gesture
  await driver.touchPerform([
    { action: 'press', options: { x: startX, y: startY }},
    { action: 'wait', options: { ms: 300 }},
    { action: 'moveTo', options: { x: endX, y: endY }},
    { action: 'release' }
  ]);
})

Then('the PL has been generated succesfuly', async () => {
  await PaymentLinkGeneratedScreen.verifyPaymentLinkHasBeenGenerated();
})

Then('the Amount is the expected', async () => {
  let expectedAmount = (global.SCENARIO_CONTEXT["currentPLTrxAmount"] as string);
  let amountInApp = await PaymentLinkGeneratedScreen.trxAmount.getText();
  if (amountInApp != expectedAmount) {
    console.log("The Amount does not match the expected Amount");
    throw new Error(
      `Amount different from expected. \nExpected Amount: ${expectedAmount}, but found: ${amountInApp}`
    );
  }
})

Then('User can copy the PL', async () => {
  await PaymentLinkGeneratedScreen.copyLinkButton.click();

  const clipboardText = await driver.getClipboard();

  if (!clipboardText.includes("https://pagos.azul.com.do/")) {
    throw new Error("The copied link is not valid");
  }
});

Then('User can share the PL', async () => {
  await PaymentLinkGeneratedScreen.shareLinkButton.click();
  await Helpers.verifyElementExist(
    PaymentLinkGeneratedScreen.sharingMenu,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
})

Then('User can go back by pressing X button', async () => {
  await driver.back();
  await PaymentLinkGeneratedScreen.closeButton.click();
  await Helpers.pressAppSiButton();
  await Helpers.verifyElementExist(
    PaymentLinkTrxScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
})

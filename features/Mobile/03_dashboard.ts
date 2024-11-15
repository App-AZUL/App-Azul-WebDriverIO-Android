import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import Helpers from "../../helpers/Helpers.ts";

Given(`User is on Dashboard screen`, async () => {
  await DashboardScreen.navigateToDashboard(
    global.USERNAME as string,
    global.PASSWORD as string
  );
});

Then(`User should see a greeting`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.greeting,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see the Commercial Group Name`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.commercialGroupName,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`user should see the current date`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.currentDateElement,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(`User clicks on burguer menu`, async () => {
  await DashboardScreen.burguerMenu.click();
});

Then(`User should see option Mi perfl`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.miPerfil,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see option Preferencias`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.preferencias,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see option Salir`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.salir,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see the App Version`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.appVersion,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see the text Servicios Digitales Popular, S.A.`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.sdpText,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Given(`User is on Dashboard screen with user miguelcasey`, async () => {
  await DashboardScreen.navigateToDashboard(
    global.USERNAME as string,
    global.PASSWORD as string
  );
});

When(`User selects Affiliated Auto Rental location`, async () => {
  await DashboardScreen.locationFilter.click();
});

Then(`User should not see Avance message`, () => {
  expect(DashboardScreen.avanceOfferMessage).not.toBeDisplayed();
  let theXpath = DashboardScreen.avanceOfferMessage.currentXpath;
});

When(`an User without locations logs in`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`User should be on Dashboard screen`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

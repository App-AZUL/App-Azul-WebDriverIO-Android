import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import PreloggedScreen from "../../screens/mobile/PreloggedScreen.ts";
import Commons from "../../screens/mobile/Commons.ts";
import LoginScreen from "../../screens/mobile/LoginScreen.ts";
import PinConfigurationScreen from "../../screens/mobile/PinConfigurationScreen.ts";
import OnboardingScreen from "../../screens/mobile/OnboardingScreen.ts";
import NewAccessScreen from "../../screens/mobile/NewAccessScreen.ts";

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

When(`User clicks on burger menu`, async () => {
  await DashboardScreen.burgerMenu.click();
});

Then(`User should see option Mi perfl`, async () => {
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.miPerfil,
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

Given(`User navigates to Dashboard screen as admin user`, async () => {
  await DashboardScreen.navigateToDashboard(
    global.USERNAME as string,
    global.PASSWORD as string
  );
});

When(`User selects Affiliated Auto Rental location`, async () => {
  await DashboardScreen.locationFilter.click();
  await DashboardScreen.azulLocationGroupElement.click();
  await DashboardScreen.affiliatedAutoRentalElement.click();
});

When(`User selects Altice location`, async () => {
  await DashboardScreen.locationFilter.click();
  await DashboardScreen.azulLocationGroupElement.click();
  await DashboardScreen.alticeLocationElement.click();
});

Then(`User should not see Avance message`, async () => {
  await expect(DashboardScreen.avanceOfferMessage).not.toBeDisplayed();
});
Then(`User should see Avance message`, async () => {
  await expect(DashboardScreen.avanceOfferMessage).toBeDisplayed();
});
Then(`User should see Avance offer message with amount`, async () => {
  await expect(DashboardScreen.avanceOfferMessageWithAmount).toBeDisplayed();
});
Then(`User should see the correct amount offer`, async () => {
  await expect(DashboardScreen.avanceAmountText).toBeDisplayed();
});
Then(
  `after closing the menu the user should stay in dashboard screen`,
  async () => {
    await driver.back();
    await Helpers.verifyElementIsDisplayed(
      DashboardScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
);

When(`an User without locations logs in`, async () => {
  await DashboardScreen.navigateToDashboard(
    global.USERNAME_WITHOUT_LOCATIONS as string,
    global.PASSWORD as string
  );
});

Then(`User should be on Dashboard screen`, async () => {
  await Helpers.verifyElementExist(
    DashboardScreen.screenTitle,
    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
  );
});

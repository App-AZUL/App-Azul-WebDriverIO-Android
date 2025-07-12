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
  let isUserOnDashboard = await Helpers.verifyElementExist(
    DashboardScreen.screenTitle,
    Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
  );

  if (!isUserOnDashboard) {
    await console.log("user was not in dashboard");
    
    
    let isAppRestarted = await Helpers.verifyElementExist(
    OnboardingScreen.saltarDemostracionButton,
    Helpers.TEN_SECONDS_IN_MILLISECONDS
    );
    if (isAppRestarted) {
      await console.log("emm the app was clean restarted");
      await OnboardingScreen.saltarDemostracionButton.click();
      await NewAccessScreen.yaSoyClienteButton.click();
      await LoginScreen.usernameInput.setValue(global.ADMIN_USERNAME);
      await LoginScreen.passwordInput.setValue(global.PASSWORD);
      await LoginScreen.iniciarSesionButton.click();

      await Helpers.verifyElementExist(
                PinConfigurationScreen.screenTitle,
                Helpers.TWENTY_SECONDS_IN_MILLISECONDS
              );
      await PinConfigurationScreen.setPin(9499);

      await DashboardScreen.dismissDashboardNovelty();
      await Helpers.verifyElementExist(
        DashboardScreen.screenTitle,
        Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
      );
    }
  } else {
    await console.log("yes, user is on dashboard");
  }
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
  /*
  await DashboardScreen.navigateToDashboard(
    global.USERNAME_WITHOUT_LOCATIONS as string,
    global.PASSWORD as string
  );*/

  (await DashboardScreen.logoutButton).click();
  (await DashboardScreen.salirDashboardButton).click();
  await driver.pause(Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS);
  (await PreloggedScreen.burgerMenu).click();
  (await PreloggedScreen.desvincularButton).click();
  (await Commons.siButton).click();
  await driver.pause(Helpers.TEN_SECONDS_IN_MILLISECONDS);

  await LoginScreen.usernameInput.setValue(global.USERNAME_WITHOUT_LOCATIONS);
  await LoginScreen.passwordInput.setValue(global.PASSWORD);
  await LoginScreen.iniciarSesionButton.click();

  if (global.PIN == "" || global.PIN == null) {
    global.PIN = 7799;
  }
  await PinConfigurationScreen.setPin(global.PIN);

  (await Commons.continuarButton).click();
});

Then(`User should be on Dashboard screen`, async () => {
  await Helpers.verifyElementExist(
    DashboardScreen.screenTitle,
    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
  );
});

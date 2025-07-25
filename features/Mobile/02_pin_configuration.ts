import { Given, When, Then } from "@cucumber/cucumber";
import PinConfigurationScreen from "../../screens/mobile/PinConfigurationScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import OnboardingScreen from "../../screens/mobile/OnboardingScreen.ts";
import NewAccessScreen from "../../screens/mobile/NewAccessScreen.ts";
import LoginScreen from "../../screens/mobile/LoginScreen.ts";

//Verify User can't login using Wrong PIN Configuration
Given(`User navitates to PIN Configuration screen as admin user`, async () => {
  await (await OnboardingScreen.saltarDemostracionButton).click();
  await (await NewAccessScreen.yaSoyClienteButton).click();
  await LoginScreen.passwordInput.setValue(global.PASSWORD as string);
  await LoginScreen.usernameInput.setValue(global.USERNAME as string);
  await LoginScreen.iniciarSesionButton.click();
  await Helpers.verifyElementExist(
    PinConfigurationScreen.screenTitle,
    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
  );
  /*await PinConfigurationScreen.navigateToPinConfiguration(
    global.USERNAME as string,
    global.PASSWORD as string
  );*/
});

Given(`User is at PIN Configuration`, async () => {
  /*await PinConfigurationScreen.navigateToPinConfiguration(
    global.USERNAME as string,
    global.PASSWORD as string
  );*/
  await Helpers.verifyElementExist(
    PinConfigurationScreen.screenTitle,
          Helpers.TEN_SECONDS_IN_MILLISECONDS
        );
});

When(`User types PIN {int}`, async (arg0: number) => {
  await PinConfigurationScreen.typePin(arg0);
});

When(`User confirms PIN {int}`, async (arg0: number) => {
  await PinConfigurationScreen.typePin(arg0);
});

When(`User set PIN {int}`, async (arg0: number) => {
  await PinConfigurationScreen.setPin(arg0);
});

Then(`User should see Incorrect PIN Message`, async () => {
  await Helpers.verifyElementIsDisplayed(
    PinConfigurationScreen.incorrectPinConfirmationTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  await Helpers.verifyElementIsDisplayed(
    PinConfigurationScreen.incorrectPinConfirmationMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

//Verify User can't login using repeated PIN Digits Configuration
Then(`User should see repeated PIN digits Message`, async () => {
  await Helpers.verifyElementIsDisplayed(
    PinConfigurationScreen.repeatedPinDigitsConfirmationMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(
  `User should stay in PIN Configuration screen after dismissing the message`,
  async () => {
    await Helpers.dismissPopUp();
    await Helpers.verifyElementIsDisplayed(
      PinConfigurationScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
);

//Verify User can't login using Sequential digits PIN Configuration
Then(`User should see Sequential PIN Message`, async () => {
  await Helpers.verifyElementIsDisplayed(
    PinConfigurationScreen.sequentialPinConfirmationMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

//Verify User can't login using Equal PIN Configuration
When(`User logged in succesfully`, async () => {
  driver.pause(Helpers.FIVE_SECONDS_IN_MILLISECONDS);
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.screenTitle,
    Helpers.THIRTY_FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(`User logged out`, async () => {
  await DashboardScreen.logOutFromDashboard();
});

Then(
  `User should see Equal PIN Configuration message for pin {int}`,
  async (arg0: number) => {
    let pinString = arg0.toString();
    let is24HoursMessageDisplayed = (await Helpers.verifyElementExist(
      PinConfigurationScreen.PinConfiguration24HoursMessage,
      Helpers.TWENTY_SECONDS_IN_MILLISECONDS
    )) as boolean;

    if (is24HoursMessageDisplayed) {
      PinConfigurationScreen.reset24HoursPinValidation(pinString);
    }
    await Helpers.verifyElementIsDisplayed(
      PinConfigurationScreen.equalPinConfirmationMessage,
      Helpers.TWENTY_SECONDS_IN_MILLISECONDS
    );
    await Helpers.dismissPopUp();
  }
);

Then(`User should be logged-in succesfully`, async () => {
  await DashboardScreen.dismissDashboardNovelty();
  await Helpers.verifyElementIsDisplayed(
    DashboardScreen.screenTitle,
    Helpers.TWENTY_FIVE_SECONDS_IN_MILLISECONDS
  );
});

//Verify 24 hours PIN Configuration message
Given(`User navigates to login screen from Onboarding Screen`, async () => {
  await OnboardingScreen.skipOnboardingScreen();
  (await NewAccessScreen.yaSoyClienteButton).click();
  await LoginScreen.verifyLoginScreenElements();
});

When(`User logs in with admin credential`, async () => {
  const adminUser: string = global.USERNAME as string;
  await LoginScreen.passwordInput.setValue("prueba1");
  await LoginScreen.usernameInput.setValue(adminUser);
  await LoginScreen.iniciarSesionButton.click();
});

Then(
  `User should see message PIN Configuration only is allowed every 24 hours`,
  async () => {
    await Helpers.verifyElementIsDisplayed(
      PinConfigurationScreen.PinConfiguration24HoursMessage,
      Helpers.TEN_SECONDS_IN_MILLISECONDS
    );
  }
);

import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import OnboardingScreen from "../../screens/mobile/OnboardingScreen.ts";
import NewAccessScreen from "../../screens/mobile/NewAccessScreen.ts";
import LoginScreen from "../../screens/mobile/LoginScreen.ts";
import AffiliationRequirementsScreen from "../../screens/mobile/AffiliationRequirementsScreen.ts";
import PinConfigurationScreen from "../../screens/mobile/PinConfigurationScreen.ts";
import Helpers from "../../helpers/Helpers.ts";

/*  Verify Onboarding Screen steps  */
Given("User started the app by first time", async () => {
  await Helpers.startAppByFirstTime();
  var isUserAtOnboardingScreen = await Helpers.verifyElementIsDisplayed(
    OnboardingScreen.bienvenidoTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  await expect(isUserAtOnboardingScreen).toBeTruthy;
});

When(
  "User checks the elements in the screen matches with the provided design",
  async () => {
    await Helpers.verifyElementIsDisplayed(
      OnboardingScreen.aprendeComoHacerloButton,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );

    await Helpers.verifyElementIsDisplayed(
      OnboardingScreen.saltarDemostracionButton,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );

    await OnboardingScreen.aprendeComoHacerloButton.click();
    await OnboardingScreen.verifyOnboardingTexts();
  }
);

Then("User can continue to New Access Screen", async () => {
  await OnboardingScreen.comencemosButton.click();
});

//----------------------------------------------------------------------------

/*  Verify New Access screen steps  */
Given(`User is on the New Access Screen`, async () => {
  await NewAccessScreen.navigateToNewAccessScreen();
  await Helpers.verifyElementIsDisplayed(
    NewAccessScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(`User press on Afiliarme`, async () => {
  await NewAccessScreen.AfiliarmeButton.click();
});

Then(`User should be on the Affiliation Requirements Screen`, async () => {
  await Helpers.verifyElementIsDisplayed(
    AffiliationRequirementsScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(`User press back`, async () => {
  await Helpers.pressAppBackButton();
});

When(`User press Ya soy cliente`, async () => {
  await NewAccessScreen.yaSoyClienteButton.click();
});

Then(`User should be on Login Screen`, async () => {
  try {
    await Helpers.acceptNotificationPermission();
    await LoginScreen.verifyLoginScreenElements();
  } catch (error) {
    console.log("user may not be on login screen");
  }
});

//----------------------------------------------------------------------------

/*  Verify Reset Password  */

Given(`User is on Login screen`, async () => {
  LoginScreen.navigateToLoginScreen();
  const userIsOnLoginScreen = await LoginScreen.verifyLoginScreenElements();
  if (!userIsOnLoginScreen) {
    await Helpers.verifyElementIsDisplayed(
      OnboardingScreen.bienvenidoTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await OnboardingScreen.saltarDemostracionButton.click();
  }
});

When(`User clicks Reset password button`, async () => {
  await LoginScreen.resetPasswordButton.click();
});

Then(`User should be redirected to AZUL reset password portal`, async () => {
  driver.back();
  driver.back();
});

Then(`User should be able to go back to login screen`, async () => {
  await LoginScreen.verifyLoginScreenElements();
});

//----------------------------------------------------------------------------

/*  Login only with invalid password  */

When(`User only types an invalid password on password textfield`, async () => {
  const wrongPassword: string = global.INVALID_PASSWORD as string;
  (await LoginScreen.passwordInput).setValue(wrongPassword);
});

When(`User clicks on Iniciar sesión button`, async () => {
  await LoginScreen.iniciarSesionButton.click();
});

Then(
  `after dismissing the message User still being on login screen`,
  async () => {
    await Helpers.dismissPopUp();
    await LoginScreen.verifyLoginScreenElements();
  }
);

Then(`User cleared password textfield`, async () => {
  (await LoginScreen.passwordInput).clearValue();
});
//----------------------------------------------------------------------------

/*  Login only with invalid user  */

When(`User only types an invalid username on username textfield`, async () => {
  (await LoginScreen.usernameInput).setValue(global.INVALID_USERNAME);
});

Then(`User cleared username textfield`, async () => {
  (await LoginScreen.usernameInput).clearValue();
});

//----------------------------------------------------------------------------

/*  Login only with valid password  */

When(`User only types a valid password on password textfield`, async () => {
  (await LoginScreen.passwordInput).setValue("prueba1");
});

Then(`User should see a message asking for typing the username`, async () => {
  await driver.pause(5000);
  await Helpers.verifyElementIsDisplayed(
    LoginScreen.usernameEmptyMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

//----------------------------------------------------------------------------

/*  Login only with valid username  */

When(`User only types a valid username on username textfield`, async () => {
  (await LoginScreen.usernameInput).setValue("miguelcasey");
});

Then(`User should see a message asking for typing the password`, async () => {
  await driver.pause(5000);
  await Helpers.verifyElementIsDisplayed(
    LoginScreen.passwordEmptyMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

//----------------------------------------------------------------------------

/*  Login with invalid user and valid password  */

When(`User types an invalid username on username textfield`, async () => {
  await LoginScreen.usernameInput.setValue(global.INVALID_USERNAME);
});

When(`User types a valid password on password textfield`, async () => {
  await LoginScreen.passwordInput.setValue(global.PASSWORD);
});

Then(`User should see a message saying incorrect credentials`, async () => {
  await driver.pause(5000);
  await Helpers.verifyElementIsDisplayed(
    LoginScreen.incorrectCredentialsPopUpTitle,
    Helpers.TEN_SECONDS_IN_MILLISECONDS
  );
});

//----------------------------------------------------------------------------

/*  Login with valid user and invalid password  */

When(`User types a valid username on username textfield`, async () => {
  await LoginScreen.usernameInput.setValue(global.ADMIN_USERNAME);
});

When(`User types an invalid password on password textfield`, async () => {
  await LoginScreen.passwordInput.setValue(global.INVALID_PASSWORD);
});

//----------------------------------------------------------------------------

/*  Login empty credentials  */
When(`User should see a message asking for credentials`, async () => {
  await driver.pause(5000);
  await Helpers.verifyElementIsDisplayed(
    LoginScreen.usernameEmptyMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

//----------------------------------------------------------------------------

/*  Login with valid credentials  */
Then(`User should be redirected to PIN Configuration screen`, async () => {
  await Helpers.verifyElementIsDisplayed(
    PinConfigurationScreen.screenTitle,
    Helpers.FIFTEEN_SECONDS_IN_MILLISECONDS
  );
});

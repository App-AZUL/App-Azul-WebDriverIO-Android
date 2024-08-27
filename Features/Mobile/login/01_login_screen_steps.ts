import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import OnboardingScreen from "./ScreenObjects/OnboardingScreen.ts";
import NewAccessScreen from "./ScreenObjects/NewAccessScreen.ts";
import LoginScreen from "./ScreenObjects/LoginScreen.ts";
import AffiliationRequirementsScreen from "../azul_affiliation/ScreenObjects/AffiliationRequirementsScreen.ts";
import PinConfigurationScreen from "./ScreenObjects/PinConfigurationScreen.ts";
import Helpers from "../../../Helpers/Helpers.ts";

/*  Verify Onboarding Screen steps  */
Given("User started the app by first time", async () => {
  await Helpers.verifyElement(
    OnboardingScreen.bienvenidoTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(
  "User checks the elements in the screen matches with the provided design",
  async () => {
    await Helpers.verifyElement(
      OnboardingScreen.aprendeComoHacerloButton,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );

    await Helpers.verifyElement(
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
  await Helpers.verifyElement(
    NewAccessScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(`User press on Afiliarme`, async () => {
  await NewAccessScreen.AfiliarmeButton.click();
});

Then(`User should be on the Affiliation Requirements Screen`, async () => {
  await Helpers.verifyElement(
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
  await LoginScreen.verifyLoginScreenElements();
});

//----------------------------------------------------------------------------

/*  Verify Reset Password  */

Given(`User is on Login screen`, async () => {
  const userIsOnLoginScreen = await LoginScreen.verifyLoginScreenElements();
  if (!userIsOnLoginScreen) {
    await Helpers.verifyElement(
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
  await Helpers.verifyElement(
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
  await Helpers.verifyElement(
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
  await Helpers.verifyElement(
    LoginScreen.incorrectCredentialsPopUpTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
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
  await Helpers.verifyElement(
    LoginScreen.usernameEmptyMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

//----------------------------------------------------------------------------

/*  Login with valid credentials  */
Then(`User should be redirected to PIN Configuration screen`, async () => {
  await Helpers.verifyElement(
    PinConfigurationScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

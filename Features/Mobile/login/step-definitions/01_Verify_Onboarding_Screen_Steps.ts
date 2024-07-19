import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import OnboardingScreen from "../ScreenObjects/OnboardingScreen.ts";

//Verify Onboarding Screen steps
Given("User started the app by first time", async () => {
  // Write code here that turns the phrase above into concrete actions
  await OnboardingScreen.bienvenidoTitle.waitForExist({ timeout: 5000 });
  await expect(OnboardingScreen.bienvenidoTitle).toBeExisting();
});

When(
  "User checks the elements in the screen matches with the provided design",
  async () => {
    // Write code here that turns the phrase above into concrete actions
    await OnboardingScreen.aprendeComoHacerloButton.waitForExist({
      timeout: 5000,
    });
    await expect(OnboardingScreen.aprendeComoHacerloButton).toBeExisting();

    await OnboardingScreen.saltarDemostracionButton.waitForExist({
      timeout: 5000,
    });
    await expect(OnboardingScreen.saltarDemostracionButton).toBeExisting();

    await OnboardingScreen.aprendeComoHacerloButton.click();
    await OnboardingScreen.verifyOnboardingTexts();
  }
);

Then("User can continue to New Access Screen", async () => {
  // Write code here that turns the phrase above into concrete actions
  await OnboardingScreen.comencemosButton.click();
});

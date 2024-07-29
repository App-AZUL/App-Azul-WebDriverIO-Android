import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import NewAccessScreen from "../ScreenObjects/NewAccessScreen.ts";
import AffiliationRequirementsScreen from "../../azul_affiliation/ScreenObjects/AffiliationRequirementsScreen.ts";
import Commons from "../../common_screen_objects/CommonObjects.ts";

Given(`User is on the New Access Screen`, async () => {
  await NewAccessScreen.screenTitle.waitForExist({ timeout: 5000 });
  await expect(NewAccessScreen.screenTitle).toBeExisting();
});

When(`User press on Afiliarme`, async () => {
  await NewAccessScreen.AfiliarmeButton.click();
});

Then(`User should be on the Affiliation Requirements Screen`, async () => {
  await AffiliationRequirementsScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(AffiliationRequirementsScreen.screenTitle).toBeExisting();
});

When(`User press back`, async () => {
  await Commons.backButton.click();
});

When(`User press Ya soy cliente`, async () => {
  await NewAccessScreen.yaSoyClienteButton.click();
});

Then(`User should be on Login Screen`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

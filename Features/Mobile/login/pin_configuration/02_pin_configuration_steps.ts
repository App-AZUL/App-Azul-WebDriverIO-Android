import { Given, When, Then } from "@wdio/cucumber-framework";
import PinConfigurationScreen from "../ScreenObjects/PinConfigurationScreen.ts";
import Helpers from "../../../../Helpers/Helpers.ts";
import DashboardScreen from "../../../Mobile/dashboard/ScreenObjects/DashboardScreen.ts";

Given(`User is at PIN Configuration`, async () => {
  await Helpers.verifyElement(
    PinConfigurationScreen.screenTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(`User types PIN {int}`, async (arg0: number) => {
  await PinConfigurationScreen.typePin(arg0);
});

When(`User confirms PIN {int}`, async (arg0: number) => {
  await PinConfigurationScreen.typePin(arg0);
});

Then(`User should see Incorrect PIN Message`, async () => {
  await Helpers.verifyElement(
    PinConfigurationScreen.incorrectPinConfirmationTitle,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  await Helpers.verifyElement(
    PinConfigurationScreen.incorrectPinConfirmationMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(
  `User should stay in PIN Configuration screen after dismissing the message`,
  async () => {
    await Helpers.dismissPopUp();
    await Helpers.verifyElement(
      PinConfigurationScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
);

Then(`User should see Sequential PIN Message`, async () => {
  await Helpers.verifyElement(
    PinConfigurationScreen.sequentialPinConfirmationMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

When(`User logged in succesfully`, async () => {
  await Helpers.verifyElement(
    DashboardScreen.screenTitle,
    Helpers.TWENTY_SECONDS_IN_MILLISECONDS
  );
});

When(`User logged out`, async () => {
  await DashboardScreen.logOutFromDashboard();
});

Then(`User should see Equal PIN Configuration mesage`, async () => {
  await Helpers.verifyElement(
    PinConfigurationScreen.equalPinConfirmationMessage,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  await Helpers.dismissPopUp();
});

Then(`User should be logged-in succesfully`, async () => {
  await Helpers.verifyElement(
    DashboardScreen.screenTitle,
    Helpers.TEN_SECONDS_IN_MILLISECONDS
  );
});

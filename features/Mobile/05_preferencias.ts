import { Given, When, Then } from "@cucumber/cucumber";
import Helpers from "../../helpers/Helpers.ts";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import PreferenciasScreen from "../../screens/mobile/PreferenciasScreen.ts";

Given(`User is on Preferencias screen`, async () => {
  try {
    let userNameElement = $("//*[contains(@text,'JuanPerez')]");
    let isUserActive = await Helpers.verifyElementIsDisplayed(
      userNameElement,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    if (!isUserActive) {
      await DashboardScreen.navigateToDashboard(
        global.USERNAME_WITHOUT_LOCATIONS as string,
        global.PASSWORD as string
      );
    } else {
      await DashboardScreen.burgerMenu.click();
      await DashboardScreen.miPerfil.click();
    }
  } catch (error) {
    await DashboardScreen.navigateToDashboard(
      global.USERNAME_WITHOUT_LOCATIONS as string,
      global.PASSWORD as string
    );
    await DashboardScreen.burgerMenu.click();
    await DashboardScreen.preferencias.click();
  }
});

When(`User clicks on Permitir Notificaciones switch`, async () => {
  await PreferenciasScreen.permitirNotificacionesButton.click();
});

Then(`all notifications should be disabled`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(
  `all notifications should be enabled if User clicks again on Permitir Notificaciones switch`,
  () => {
    // [Then] Describes the expected outcome or result of the scenario.
  }
);

When(`User clicks on Notificaciones Link de Pagos switch`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`payment link notifications should be disabled`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(
  `PL notifications should be enabled if User clicks again on PL switch`,
  () => {
    // [Then] Describes the expected outcome or result of the scenario.
  }
);

When(`User clicks on Notificaciones Codigo QR switch`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`Codigo QR notifications should be disabled`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(
  `Codigo QR notifications should be enabled if User clicks again on QR switch`,
  () => {
    // [Then] Describes the expected outcome or result of the scenario.
  }
);

Then(`Codigo Tap notifications should be disabled`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(
  `Codigo Tap notifications should be enabled if User clicks again on Tap switch`,
  () => {
    // [Then] Describes the expected outcome or result of the scenario.
  }
);

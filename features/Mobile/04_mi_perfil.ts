import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import MiPerfilScreen from "../../screens/mobile/MiPerfilScreen.ts";
import MisInformacionesScreen from "../../screens/mobile/MisInformacionesScreen.ts";
import DatosDeAccesoScreen from "../../screens/mobile/DatosDeAccesoScreen.ts";
import MiNegocioScreen from "../../screens/mobile/MiNegocioScreen.ts";
import Helpers from "../../helpers/Helpers.ts";

Given(`User is on MiPerfil screen with admin user`, async () => {
    await DashboardScreen.goToDashboardAfterReinstall(
        global.ADMIN_USERNAME as string,
        global.PASSWORD as string
      );
      
});

When(`User clicks on proffile circle`, async () => {
    (await DashboardScreen.proffileCircleButton).click();
});

Then(`User should see his first name & client name`, async () => {
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.adminNameText,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );

    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.clientNameText,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Datos personales`, async () => {
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.datosPersonalesOption,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Datos del negocio`, async () => {
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.datosDelNegocioOption,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Localidades`, async () => {
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.localidadesOption,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Preferencias`, async () => {
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.preferenciasOption,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Given(`admin user is on Mi perfil screen`, async () => {
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

When(`User clicks on Datos personales option`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`User should see his username`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his identification number`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his date of birth`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his occupation`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his telephone number`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his celphone number`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his email`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his role`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should stay on Mi perfil screen after pressing back button`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`User clicks on Datos del negocio option`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`User should see his client name`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his RNC`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see his Industry Sector`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`User clicks on Localidades option`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`User should see Affiliated Auto rental location inside Servicios Digitales unit`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see ACADEMIA DIGITAL DE ED location inside Servicios Digitales unit`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`User clicks on Preferencias option`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`User should see option Permitir notificaciones`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see option Transacciones Link de Pagos`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see option Transacciones Codigo QR`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see option Nueva afiliacion Link de Pagos`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see option Nueva afiliacion Tap`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see option Solicitudes cerradas`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should be on MiPerfil screen after pressing back button`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});
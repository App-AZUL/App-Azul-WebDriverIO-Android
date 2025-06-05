import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import MiPerfilScreen from "../../screens/mobile/MiPerfilScreen.ts";
import DatosPersonalesScreen from "../../screens/mobile/DatosPersonalesScreen.ts";
import DatosDeAccesoScreen from "../../screens/mobile/DatosDeAccesoScreen.ts";
import MiNegocioScreen from "../../screens/mobile/DatosDelNegocioScreen.ts";
import Helpers from "../../helpers/Helpers.ts";
import DatosDelNegocioScreen from "../../screens/mobile/DatosDelNegocioScreen.ts";
import LocalidadesScreen from "../../screens/mobile/LocalidadesScreen.ts";
import PreferenciasScreen from "../../screens/mobile/PreferenciasScreen.ts";

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

When(`User clicks on Datos personales option`, async () => {
    (await MiPerfilScreen.datosPersonalesOption).click();
});

Then(`User should see his username`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.usernameElement,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his identification number`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.userRnc,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his date of birth`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.userDob,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his occupation`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.userOccupation,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his telephone number`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.userPhone,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his celphone number`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.userCelphone,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his email`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.userEmail,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his role`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosPersonalesScreen.userRole,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should stay on Mi perfil screen after pressing back button`, async () => {
    await Helpers.pressAppBackButton();
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

When(`User clicks on Datos del negocio option`, async () => {
    (await MiPerfilScreen.datosDelNegocioOption).click();
});

Then(`User should see his client name`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosDelNegocioScreen.nombreOption,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his RNC`, async () => {
    await Helpers.verifyElementIsDisplayed(
          DatosDelNegocioScreen.rncOption,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see his Industry Sector`, async () => {
        await Helpers.verifyElementIsDisplayed(
          DatosDelNegocioScreen.sectorIndustrial,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

When(`User clicks on Localidades option`, async () => {
    (await MiPerfilScreen.localidadesOption).click();
});

Then(`User should see Affiliated Auto rental location inside Servicios Digitales unit`, async () => {
    (await LocalidadesScreen.serviciosDigitalesUnit).click();
    await Helpers.verifyElementIsDisplayed(
          LocalidadesScreen.affiliatedLocation,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
    (await LocalidadesScreen.serviciosDigitalesUnit).click();
});

Then(`User should see ACADEMIA DIGITAL DE ED location inside Servicios Digitales unit`, async () => {
    (await LocalidadesScreen.bancoPopularUnit).click();
    await Helpers.verifyElementIsDisplayed(
          LocalidadesScreen.academiaLocation,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
    (await LocalidadesScreen.bancoPopularUnit).click();
});

When(`User clicks on Preferencias option`, async () => {
    (await MiPerfilScreen.preferenciasOption).click();
});

Then(`User should see option Permitir notificaciones`, async () => {
    await Helpers.verifyElementIsDisplayed(
          PreferenciasScreen.permitirNotificacionesText,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Transacciones Link de Pagos`, async () => {
    await Helpers.verifyElementIsDisplayed(
          PreferenciasScreen.transaccionesLinkDePagosText,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Transacciones Codigo QR`, async () => {
    await Helpers.verifyElementIsDisplayed(
          PreferenciasScreen.transaccionesCodigoQr  ,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Nueva afiliacion Link de Pagos`, async () => {
    await Helpers.verifyElementIsDisplayed(
          PreferenciasScreen.nuevaAfiliacionLinkDePagosText,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Nueva afiliacion Tap`, async () => {
    await Helpers.verifyElementIsDisplayed(
          PreferenciasScreen.nuevaAfiliacionTapText,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should see option Solicitudes cerradas`, async () => {
    await Helpers.verifyElementIsDisplayed(
          PreferenciasScreen.solicitudesCerradasText,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        );
});

Then(`User should be on MiPerfil screen after pressing back button`, async () => {
    await Helpers.pressAppBackButton();
    await Helpers.verifyElementIsDisplayed(
          MiPerfilScreen.screenTitle,
          Helpers.TWENTY_SECONDS_IN_MILLISECONDS
        ); 
});
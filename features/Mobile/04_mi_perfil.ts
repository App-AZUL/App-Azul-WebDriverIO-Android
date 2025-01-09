import { Given, When, Then } from "@cucumber/cucumber";
import DashboardScreen from "../../screens/mobile/DashboardScreen.ts";
import MiPerfilScreen from "../../screens/mobile/MiPerfilScreen.ts";
import MisInformacionesScreen from "../../screens/mobile/MisInformacionesScreen.ts";
import DatosDeAccesoScreen from "../../screens/mobile/DatosDeAccesoScreen.ts";
import MiNegocioScreen from "../../screens/mobile/MiNegocioScreen.ts";
import Helpers from "../../helpers/Helpers.ts";

Given(`User without locations is on Dashboard screen`, async () => {
  try {
    let userNameElement = $("//*[contains(@text,'"+global.NO_LOCATIONS_NAME+"')]");
    let isUserActive = !!(await Helpers.verifyElementIsDisplayed(
      userNameElement,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
  ).catch(() => false));
  
    if (!isUserActive) {
      await DashboardScreen.navigateToDashboard(
        global.USERNAME_WITHOUT_LOCATIONS as string,
        global.PASSWORD as string, false
      );
    } else {
      //await DashboardScreen.burgerMenu.click();
      //await DashboardScreen.miPerfil.click();
    }
  } catch (error) {
    await DashboardScreen.navigateToDashboard(
      global.USERNAME_WITHOUT_LOCATIONS as string,
      global.PASSWORD as string
    );
    //await DashboardScreen.burgerMenu.click();
    //await DashboardScreen.miPerfil.click();
  }
});

Given(`User without locations is on Mi perfil screen`, async () => {
  try {
    let isUserOnMiPerfil = await Helpers.verifyElementIsDisplayed(
      MiPerfilScreen.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    if (!Boolean(isUserOnMiPerfil)) {
      await DashboardScreen.navigateToDashboard(
        global.USERNAME_WITHOUT_LOCATIONS as string,
        global.PASSWORD as string
      );
      await DashboardScreen.burgerMenu.click();
      await DashboardScreen.miPerfil.click();
    }
  } catch (error) {
    await DashboardScreen.navigateToDashboard(
      global.USERNAME_WITHOUT_LOCATIONS as string,
      global.PASSWORD as string
    );
    await DashboardScreen.burgerMenu.click();
    await DashboardScreen.miPerfil.click();
  }
});

When(`User clicks on Mis Informaciones`, async () => {
  await DashboardScreen.burgerMenu.click();
  await DashboardScreen.miPerfil.click();
  await MiPerfilScreen.misInformacionesOption.click();
});

Then(`User should see his username`, async () => {
  await Helpers.verifyElementIsDisplayed(
    MisInformacionesScreen.noLocationsUsernameElement,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his name`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MisInformacionesScreen.noLocationsUsernameElement,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his ident. number`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MisInformacionesScreen.noLocationsUserCedula,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his DOB`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MisInformacionesScreen.noLocationsUserDob,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his occupation`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MisInformacionesScreen.noLocationsUserOccupation,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his phone number`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MisInformacionesScreen.noLocationsUserOccupation,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his email`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MisInformacionesScreen.noLocationsUserEmail,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his role`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MisInformacionesScreen.noLocationsUserRole,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  await driver.back();
});

When(`User clicks on Datos de acceso`, async () => {
  await MiPerfilScreen.datosDeAccesoOption.click();
});

Then(`User should see the current date on Ultimo Acceso field`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await DatosDeAccesoScreen.ultimoAccesoOption,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see asterisks in the password field`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await DatosDeAccesoScreen.contrasenaOption,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  await driver.back();
});

When(`User clicks on Mi negocio`, async () => {
  await MiPerfilScreen.miNegocioOption.click();
});

Then(`User should see his Commercial Group name`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MiNegocioScreen.nombreOption,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
});

Then(`User should see his RNC`, async () => {
  await Helpers.verifyElementIsDisplayed(
    await MiNegocioScreen.rncOption,
    Helpers.FIVE_SECONDS_IN_MILLISECONDS
  );
  await driver.back();
  await driver.back();
  await driver.back();
});

When(`User clicks on Localidades`, () => {
  // [When] Describes the action or event that triggers the scenario.
});

Then(`User should see all location groups assigned`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`User should see all locations assigned according the group`, () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

import { $ } from "@wdio/globals";
import AffiliationRequirementsScreen from "./AffiliationRequirementsScreen.ts";
import NewAccessScreen from "./NewAccessScreen.ts";
import Helpers from "../../helpers/Helpers.ts";

class LoginScreen {
  /* Screen Elements */
  get usernameInput() {
    return $(
      '//android.widget.EditText[@resource-id="com.sdp.appazul:id/editUsername"]'
    );
  }
  get passwordInput() {
    return $(
      '//android.widget.EditText[@resource-id="com.sdp.appazul:id/edit_password"]'
    );
  }
  get iniciarSesionButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvFinalAmount"]'
    );
  }
  get resetPasswordButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/forgotPasswordLabel"]'
    );
  }
  get afiliateAquiButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/register"]'
    );
  }
  get appVersionLabel() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/versionText"]'
    );
  }
  get informativeText() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/textView3"]'
    );
  }
  get resetPasswordWebTitle() {
    return $(
      '//android.widget.TextView[@text="¡Hola! Para poder recuperar tu contraseña, por favor, responde la información que a continuación te solicitamos:"]'
    );
  }

  /* Pop up messages */
  get usernameEmptyMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Por favor introduce tu usuario para continuar.' or . = 'Por favor introduce tu usuario para continuar.') and @resource-id = 'android:id/message']"
    );
  }
  get usernameNuevoMessage() {
    return $(
      "//*[contains(@text,'Debes configurar tu usuario y contraseña para poder acceder a la App AZUL')]"
    );
  }
  get usernameNuevoExpiradoMessage() {
    return $("//*[contains(@text,'¿Deseas generar nuevas credenciales?')]");
  }
  get usernameBloqueadoMessage() {
    return $("//*[contains(@text,'Tu perfil se encuentra bloqueado')]");
  }
  get usernameDeshabilitadoMessage() {
    return $("//*[contains(@text,'Tu perfil está deshabilitado')]");
  }
  get usernameEnInvestigacionMessage() {
    return $("//*[contains(@text,'Tu perfil se encuentra bloqueado')]");
  }
  get passwordEmptyMessage() {
    return $(
      "//*[contains(@text,'Por favor introduce tu contraseña para continuar.')]"
    );
  }
  get incorrectCredentialsPopUpTitle() {
    return $(
      "//*[contains(@text,'Las credenciales suministradas son incorrectas')]"
    );
  }
  get incorrectCredentialsPopUpText() {
    return $("//*[contains(@text,'Por favor, inténtalo de nuevo')]");
  }

  /* Functions */
  async verifyLoginScreenElements() {
    const timeout = 15000;
    let allElementsPresent = true;

    // Verify user input
    if (!(await Helpers.verifyElementIsDisplayed(this.usernameInput, timeout)))
      allElementsPresent = false;

    // Verify password input
    if (!(await Helpers.verifyElementIsDisplayed(this.passwordInput, timeout)))
      allElementsPresent = false;

    // Verify reset password button
    if (
      !(await Helpers.verifyElementIsDisplayed(
        this.resetPasswordButton,
        timeout
      ))
    )
      allElementsPresent = false;

    // Verify affiliate aqui button
    if (
      !(await Helpers.verifyElementIsDisplayed(
        this.afiliateAquiButton,
        timeout
      ))
    )
      allElementsPresent = false;

    // Verify version label
    if (
      !(await Helpers.verifyElementIsDisplayed(this.appVersionLabel, timeout))
    )
      allElementsPresent = false;

    return allElementsPresent;
  }

  async verifyResetPassword() {
    await this.resetPasswordButton.click();
    driver.back();
  }

  async verifyAfiliateAquiButton() {
    await this.afiliateAquiButton.click();
    await AffiliationRequirementsScreen.screenTitle.waitForExist({
      timeout: 15000,
    });
    await expect(AffiliationRequirementsScreen.screenTitle).toBeExisting();
  }
  async navigateToLoginScreen() {
    if (
      !(await Helpers.verifyElementExist(
        this.usernameInput,
        Helpers.TEN_SECONDS_IN_MILLISECONDS
      ))
    ) {
      await NewAccessScreen.navigateToNewAccessScreen();
      await NewAccessScreen.yaSoyClienteButton.click();
    }
  }
}

export default new LoginScreen();

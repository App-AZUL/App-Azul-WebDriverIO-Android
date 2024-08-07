import { $ } from "@wdio/globals";
import AffiliationRequirementsScreen from "../../azul_affiliation/ScreenObjects/AffiliationRequirementsScreen.ts";

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
    //Verify user input
    await this.usernameInput.waitForExist({
      timeout: 5000,
    });
    await expect(this.usernameInput).toBeExisting();

    //Verify password input
    await this.passwordInput.waitForExist({
      timeout: 5000,
    });
    await expect(this.passwordInput).toBeExisting();

    //verify reset passwordd button
    await this.resetPasswordButton.waitForExist({
      timeout: 5000,
    });
    await expect(this.resetPasswordButton).toBeExisting();

    //verify afiliate aqui button
    await this.afiliateAquiButton.waitForExist({
      timeout: 5000,
    });
    await expect(this.afiliateAquiButton).toBeExisting();

    //verify version label
    await this.appVersionLabel.waitForExist({
      timeout: 5000,
    });
    await expect(this.appVersionLabel).toBeExisting();
  }

  async verifyResetPassword() {
    await this.resetPasswordButton.click();
    driver.back();
  }

  async verifyAfiliateAquiButton() {
    await this.afiliateAquiButton.click();
    await AffiliationRequirementsScreen.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(AffiliationRequirementsScreen.screenTitle).toBeExisting();
  }
}

export default new LoginScreen();

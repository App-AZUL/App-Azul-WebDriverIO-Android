import { $ } from "@wdio/globals";
import AffiliationRequirementsScreen from "../../azul_affiliation/ScreenObjects/AffiliationRequirementsScreen.ts";

class LoginScreen {
  /* Screen Elements */
  get screenTitle() {
    return $(
      "//*[contains(@text,'Vende desde tu móvil\nde forma fácil y segura')]"
    );
  }
  get usernameInput() {
    return $("//*[contains(@text,'Ya soy cliente')]");
  }
  get passwordInput() {
    return $(
      "//*[@class = 'android.widget.EditText' and @resource-id = 'com.sdp.appazul:id/edit_password']"
    );
  }
  get iniciarSesionButton() {
    return $("//*[(@text = 'Iniciar sesión' or . = 'Iniciar sesión')]");
  }
  get resetPasswordButton() {
    return $("");
  }
  get afiliateAquiButton() {
    return $("");
  }
  get appVersionLabel() {
    return $("");
  }
  get informativeText() {
    return $("");
  }
  get resetPasswordWebTitle() {
    return $("");
  }

  /* Pop up messages */
  get usernameEmptyMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Por favor introduce tu usuario para continuar.' or . = 'Por favor introduce tu usuario para continuar.') and @resource-id = 'android:id/message']"
    );
  }
  get passwordEmptyMessage() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Por favor introduce tu contraseña para continuar.' or . = 'Por favor introduce tu contraseña para continuar.') and @resource-id = 'android:id/message']"
    );
  }
  get incorrectCredentialsPopUpTitle() {
    return $("");
  }
  get incorrectCredentialsPopUpText() {
    return $("");
  }

  /* Functions */
  async verifyLoginScreenElements() {
    //Verify screen title
    await this.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(this.screenTitle).toBeExisting();

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

    //verify informative
    await this.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(this.screenTitle).toBeExisting();
  }

  async verifyResetPassword() {
    await this.resetPasswordButton.click();
    driver.back();

    await this.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(this.screenTitle).toBeExisting();
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

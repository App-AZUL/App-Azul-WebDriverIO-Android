import { expect, $ } from "@wdio/globals";

class OnboardingScreen {
  get bienvenidoTitle() {
    return $("//*[contains(@text,'¡Bienvenido a tu\nApp AZUL!')]");
  }
  get aprendeComoHacerloButton() {
    return $("//*[contains(@text,'Aprende cómo hacerlo')]");
  }
  get saltarDemostracionButton() {
    return $("//*[contains(@text,'Saltar demostración')]");
  }
  get chevronButton() {
    return $(
      "//android.widget.RelativeLayout[@resource-id='com.sdp.appazul:id/nextButton']"
    );
  }
  get comencemosButton() {
    return $("//*[contains(@text,'¡Comencemos!')]");
  }
  infoTitles: string[] = [
    "Acepta pagos con\ntarjetas en tu negocio",
    "¡Vende en redes sociales\ncon Link de Pagos!",
    "¡Recibe pagos al instante\ncon Código QR AZUL!",
    "¡Tapea y cobra con\ntarjetas desde tu móvil!",
    "¡Tapea y cobra con\ntarjetas desde tu móvil!",
    "¡Tus consultas en\ntodo momento!",
  ];
  infoTexts: string[] = [
    "Afíliate a AZUL y comienza a\naceptar pagos en línea. Si ya eres\ncliente, solicita nuevos productos\npara potenciar tus ventas.",
    "Envíalos a tus clientes a través de las\naplicaciones de tu móvil y consulta\nsu estado. Puedes cancelarlos,\nanularlos o regenerarlos.",
    "Puedes consultar el QR de tu\ncomercio, mostrarlo a tus clientes,\ndescargarlo o compartirlo a través\nde tus redes sociales para recibir\npagos vía transferencia.",
    "Con Tap, puedes aceptar pagos con\ntarjetas NFC o billeteras móviles y\nconsultar los pagos recibidos donde\nquiera que te encuentres.",
    "Si no lo tienes, solicítalo desde esa misma opción.",
    "Puedes verificar cuando quieras las\ntransacciones de tus productos al\ninstante y generar estados de ventas\nsegún tu fecha de preferencia.",
  ];

  async verifyOnboardingTexts() {
    for (let i = 0; i < this.infoTexts.length; i++) {
      const elementTitle = $(
        "//*[contains(@text,'" + this.infoTitles[i] + "')]"
      );
      await elementTitle.waitForExist({ timeout: 10000 });
      await expect(elementTitle).toBeExisting();

      const elementText = $("//*[contains(@text,'" + this.infoTexts[i] + "')]");
      await elementText.waitForExist({ timeout: 10000 });
      await expect(elementText).toBeExisting();

      if (i != 3 && i != 5) {
        await this.chevronButton.click();
      }
    }
  }

  async skipOnboardingScreen() {
    await this.saltarDemostracionButton.click();
  }
}

export default new OnboardingScreen();

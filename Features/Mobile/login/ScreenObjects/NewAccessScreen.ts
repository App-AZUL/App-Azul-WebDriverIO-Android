import { expect, $ } from "@wdio/globals";

class NewAccessScreen {
  get screenTitle() {
    return $("//*[contains(@text,'¡Bienvenido a tu\nApp AZUL!')]");
  }
  get yaSoyClienteButton() {
    return $("//*[contains(@text,'¡Bienvenido a tu\nApp AZUL!')]");
  }
  get AfiliarmeButton() {
    return $("//*[contains(@text,'¡Bienvenido a tu\nApp AZUL!')]");
  }
  get PressBackButton() {
    return $("");
  }
}

export default new NewAccessScreen();

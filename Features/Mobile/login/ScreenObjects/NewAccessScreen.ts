import { $ } from "@wdio/globals";

class NewAccessScreen {
  get screenTitle() {
    return $(
      "//*[contains(@text,'Vende desde tu móvil\nde forma fácil y segura')]"
    );
  }
  get yaSoyClienteButton() {
    return $("//*[contains(@text,'Ya soy cliente')]");
  }
  get AfiliarmeButton() {
    return $("//*[contains(@resource-id,'Afiliarme')]");
  }
  get PressBackButton() {
    return $("");
  }
}

export default new NewAccessScreen();

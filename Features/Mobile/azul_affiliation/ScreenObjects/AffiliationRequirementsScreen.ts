import { expect, $ } from "@wdio/globals";

class AffiliationRequirementsScreen {
  get screenTitle() {
    return $("//*[contains(@text,'¡Bienvenido a tu\nApp AZUL!')]");
  }
}

export default new AffiliationRequirementsScreen();

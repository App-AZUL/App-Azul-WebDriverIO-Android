import { expect, $ } from "@wdio/globals";
import Common from "../Features/Mobile/common_screen_objects/Commons.ts";

class Helpers {
  async pressAppBackButton() {
    Common.backButton.click();
  }
  async dismissPopUp() {
    Common.okButton.click();
  }
}

export default new Helpers();

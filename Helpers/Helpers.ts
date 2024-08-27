import { expect, $ } from "@wdio/globals";
import Common from "../Features/Mobile/common_screen_objects/Commons.ts";

class Helpers {
  get FIVE_SECONDS_IN_MILLISECONDS() {
    return 5000;
  }
  get TEN_SECONDS_IN_MILLISECONDS() {
    return 10000;
  }
  get FIFTEEN_SECONDS_IN_MILLISECONDS() {
    return 15000;
  }
  get TWENTY_SECONDS_IN_MILLISECONDS() {
    return 20000;
  }
  async pressAppBackButton() {
    await Common.backButton.click();
  }
  async dismissPopUp() {
    await Common.okButton.click();
  }
  async verifyElement(element, timeout) {
    const isExisting = await element.waitForExist({ timeout });
    return isExisting && (await element.isExisting());
  }
}

export default new Helpers();

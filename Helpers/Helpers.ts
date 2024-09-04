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
    try {
      var isExisting = await driver.waitUntil(
        async () => await element.isDisplayed(),
        {
          timeout: timeout, // custom timeout in milliseconds
          timeoutMsg: `Element ${element.selector.toString()} not displayed after ${timeout} ms`,
          interval: 500, // polling interval in milliseconds
        }
      );
    } catch (error) {
      isExisting = false;
      //await driver.deleteSession();
      //process.exit(1);
      (global as any).IS_PREVIOUS_TEST_SUCCESS = false;
      throw new Error("Element not found");
    }
    return isExisting;
  }
}

export default new Helpers();

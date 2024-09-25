import { expect, $ } from "@wdio/globals";
import Common from "../Features/Mobile/common_screen_objects/Commons.ts";
import OnboardingScreen from "../Features/Mobile/login/ScreenObjects/OnboardingScreen.ts";

class Helpers {
  get AllowNotificationButton() {
    return $(
      "//*[@resource-id='com.android.permissioncontroller:id/permission_allow_button']"
    );
  }
  get allowCameraPermissionButton() {
    return $(
      '//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'
    );
  }
  get allowLocationPermissionButton() {
    return $(
      '//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'
    );
  }
  get allowCallPermissionButton() {
    return $(
      '//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]'
    );
  }
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
  get THIRTY_SECONDS_IN_MILLISECONDS() {
    return 30000;
  }
  get THIRTY_FIVE_SECONDS_IN_MILLISECONDS() {
    return 30000;
  }
  async pressAppBackButton() {
    await Common.backButton.click();
  }
  async dismissPopUp() {
    await driver.pause(1000);
    await Common.okButton.click();
  }
  async verifyElementIsDisplayed(element, timeout) {
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
  async verifyElementExist(element, timeout) {
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
      // throw new Error("Element not found");
    }
    return isExisting;
  }
  /*async verifyElementExist(element, timeout) {
    const isExisting = await element.waitForExist({ timeout });
    return isExisting && (await element.isExisting());
  }*/
  async startAppByFirstTime() {
    if (
      !(await this.verifyElementExist(
        OnboardingScreen.bienvenidoTitle,
        this.TWENTY_SECONDS_IN_MILLISECONDS
      ))
    ) {
      try {
        await driver.removeApp(global.APP_AZUL_BUNDLE);
      } catch (error) {
        console.log("Error removing the app: " + (error as Error).message);
      }
      //await driver.pause(this.TWENTY_SECONDS_IN_MILLISECONDS);
      await driver.installApp("./APP/azul-dev.apk");
      //await driver.pause(this.TWENTY_SECONDS_IN_MILLISECONDS);
      //await driver.pause(this.TWENTY_SECONDS_IN_MILLISECONDS);
      /*await driver.waitUntil(
        async () =>
          await {
            timeout: 50000, // custom timeout in milliseconds
            timeoutMsg: `sss`,
            interval: 500, // polling interval in milliseconds
          }
      );*/
      await driver.activateApp(global.APP_AZUL_BUNDLE);
      await driver.pause(this.TWENTY_SECONDS_IN_MILLISECONDS);
      /*await driver.waitUntil(
        async () =>
          await {
            timeout: 25000, // custom timeout in milliseconds
            timeoutMsg: `sss`,
            interval: 500, // polling interval in milliseconds
          }
      );*/
      await this.verifyElementIsDisplayed(
        OnboardingScreen.bienvenidoTitle,
        120000
      );
      await this.verifyElementIsDisplayed(
        OnboardingScreen.bienvenidoTitle,
        120000
      );
    }
  }
  async acceptNotificationPermission() {
    try {
      console.log("terms and coindition should be accepted and wait 5 minutes");
      await this.AllowNotificationButton.click();

      var wait = await driver.waitUntil(
        async () =>
          await {
            timeout: 10000, // custom timeout in milliseconds
            timeoutMsg: `sss`,
            interval: 500, // polling interval in milliseconds
          }
      );
    } catch (error) {
      console.log("couldn't accept login permissions");
    }
  }
  async acceptDashboardPermissions() {
    try {
      console.log(
        "terms and coindition should be accepted and wait 10 seconds"
      );
      (await this.allowCameraPermissionButton).click();
      (await this.allowLocationPermissionButton).click();
      (await this.allowCallPermissionButton).click();

      var wait = await driver.waitUntil(
        async () =>
          await {
            timeout: 10000, // custom timeout in milliseconds
            timeoutMsg: `sss`,
            interval: 500, // polling interval in milliseconds
          }
      );
    } catch (error) {
      console.log("couldn't accept dashboard permissions");
    }
  }
}

export default new Helpers();

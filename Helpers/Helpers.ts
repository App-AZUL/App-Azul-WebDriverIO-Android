import { $ } from "@wdio/globals";
import Commons from "../screens/mobile/Commons.ts";
import OnboardingScreen from "../screens/mobile/OnboardingScreen.ts";
import SettledTransactionsScreen from "../screens/mobile/SettledTransactionsScreen.ts";

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
  get AppOldVersion() {
    return "5.0.0";
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
    await Commons.backButton.click();
  }
  async dismissPopUp() {
    await driver.pause(1000);
    await Commons.okButton.click();
  }
  async verifyElementIsDisplayed(element, timeout) {
    //try {
      let isExisting;
try {
    isExisting = await driver.waitUntil(
        async () => await element.isDisplayed(),
        {
            timeout: timeout, // custom timeout in milliseconds
            timeoutMsg: `Element ${element.selector.toString()} not displayed after ${timeout} ms`,
            interval: 500, // polling interval in milliseconds
        }
    );
    isExisting = !!isExisting; // Ensures the value is explicitly boolean
} catch (error) {
    isExisting = false; // If waitUntil times out, set isExisting to false
    throw new Error("Element not found: " + JSON.stringify(element));
}

    /*} catch (error) {
      isExisting = false;
      //await driver.deleteSession();
      //process.exit(1);
      (global as any).IS_PREVIOUS_TEST_SUCCESS = false;
      throw new Error("Element not found: " + JSON.stringify(element));
    }/*/
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
      (global as any).IS_PREVIOUS_TEST_SUCCESS = false;
    }
    return isExisting;
  }
  async startAppByFirstTime() {
    try {
        const appPackage = global.APP_AZUL_BUNDLE;

        // Step 1: Close the app
        await driver.terminateApp(appPackage);

        // Step 2: Restart the WebdriverIO session to clear data
        if (driver.sessionId) { // Check if the session exists
          await driver.deleteSession();
      }

        // Step 3: Start a new session
        await driver.reloadSession(); // WebdriverIO will apply capabilities from the config file

        // Step 4: Verify the app’s initial state
        await this.verifyElementIsDisplayed(
            OnboardingScreen.bienvenidoTitle,
            120000
        );
    } catch (error) {
        console.error(
            "An error occurred while resetting and restarting the app:",
            error.message
        );
    }
}



  async acceptNotificationPermission() {
    /*try {
      console.log("terms and coindition should be accepted and wait 5 minutes");
      await this.verifyElementIsDisplayed(
        this.AllowNotificationButton,
        this.FIFTEEN_SECONDS_IN_MILLISECONDS
    );
      await this.AllowNotificationButton.click();

      
    } catch (error) {
      console.log("couldn't accept login permissions");
    }*/
  }
  async acceptDashboardPermissions() {/*
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
    }*/
  }
  async isVersionGreater(version, comparison) {
    const versionParts = await version.split(".").map(Number);
    const comparisonParts = await comparison.split(".").map(Number);

    for (let i = 0; i < 3; i++) {
      if (versionParts[i] > comparisonParts[i]) {
        return true;
      } else if (versionParts[i] < comparisonParts[i]) {
        return false;
      }
    }

    return false; // They are equal
  }
  async scrollUntilElementVisible(
    element,
    maxScrolls = 10,
    startPercentageY = 80,
    endPercentageY = 20
  ) {
    let isVisible = await element.isDisplayed();
    let scrollAttempts = 0;

    while (!isVisible && scrollAttempts < maxScrolls) {
      const { width, height } = await driver.getWindowSize(); // Get screen dimensions
      const startX = width / 2; // Scroll from the middle of the screen
      const startY = (height * startPercentageY) / 100;
      const endY = (height * endPercentageY) / 100;

      // Perform swipe action using touchPerform
      await driver.touchPerform([
        { action: "press", options: { x: startX, y: startY } },
        { action: "wait", options: { ms: 200 } }, // Pause for gesture stabilization
        { action: "moveTo", options: { x: startX, y: endY } },
        { action: "release" },
      ]);

      await browser.pause(500); // Allow UI to stabilize
      isVisible = await element.isDisplayed();
      scrollAttempts++;
    }

    if (!isVisible) {
      throw new Error(
        `Element not visible after ${scrollAttempts} scroll attempts.`
      );
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  async setDateJanuary2022onDesdeCalendar() {
    await SettledTransactionsScreen.desdeDatePicker.click();
    for (let i = 0; i < 34; i++) {
      await Commons.calendarMonthBackArrow.click();
      await driver.pause(300);
    }
    await this.verifyElementIsDisplayed(
      Commons.january2022DateText,
      this.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Commons.calendarDay13.click();
  }
}

export default new Helpers();

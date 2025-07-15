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
  get THREE_SECONDS_IN_MILLISECONDS() {
    return 5000;
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
  get TWENTY_FIVE_SECONDS_IN_MILLISECONDS() {
    return 25000;
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
            interval: 900, // polling interval in milliseconds
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
  async verifyElementNotExist(element: any, timeout: number, strict = true): Promise<boolean> {
  let isNotExisting = false;

  try {
    await driver.waitUntil(
      async () => {
        try {
          // Return true when the element is not displayed (invisible or gone)
          return !(await element.isDisplayed());
        } catch {
          // If element doesn't exist, consider it not existing
          return true;
        }
      },
      {
        timeout,
        timeoutMsg: `Element ${JSON.stringify(element.selector?.toString())} \n ${JSON.stringify(element)}\n is still displayed after ${timeout} ms`,
        interval: 1000,
      }
    );
    isNotExisting = true;
  } catch (error) {
    isNotExisting = false;
  }

  if (!isNotExisting && strict === true) {
    throw new Error(
      `The element was still found/displayed \nElement: ${JSON.stringify(element)}\nTimeout: ${timeout}`
    );
  }

  return isNotExisting;
}
  async verifyElementExist(element, timeout) {
    try {
      var isExisting:boolean = await driver.waitUntil(
        async () => await element.isDisplayed(),
        {
          timeout: timeout, // custom timeout in milliseconds
          timeoutMsg: `Element ${element.selector.toString()} not displayed after ${timeout} ms`,
          interval: 900, // polling interval in milliseconds
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

async scrollUntilElementVisible({
  element,
  maxScrolls = 10,
  scrollPercent = 2.5
}: {
  element: ChainablePromiseElement,
  maxScrolls?: number,
  scrollPercent?: number
}): Promise<void> {
  const { height, width } = await driver.getWindowRect();
  let attempts = 0;

  // Recommended Y positions: avoid very top/bottom edges
  const startY = Math.floor(height * 0.7); // scroll starts higher
  const endY = Math.floor(height * 0.3);   // scroll ends lower

  while (attempts < maxScrolls) {
    try {
      if (await element.isDisplayed()) return;
    } catch {
      // ignore lookup errors until it appears
    }

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: width / 2, y: startY },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 100 },
          { type: 'pointerMove', duration: 500, x: width / 2, y: endY },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);

    await driver.releaseActions();
    await browser.pause(500);
    attempts++;
  }

  throw new Error(`Element not visible after ${maxScrolls} scrolls.`);
}

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  async setTrxDateOnDesdeCalendar(isQrTrx = false) {
    await SettledTransactionsScreen.desdeDatePicker.click();
    let backArrowClickCount = isQrTrx ? 66 : 42; // When coming from QR Transactions screen, we need to go back more months to reach January 2020, for Settled Transactions screen, we need to go back less months (2022 is enough).
    for (let i = 0; i < backArrowClickCount; i++) {
      await Commons.calendarMonthBackArrow.click();
      await driver.pause(300);
    }
    if (isQrTrx) {
      await this.verifyElementIsDisplayed(
        Commons.january2020DateText,
        this.FIVE_SECONDS_IN_MILLISECONDS
      );
    } else {
      await this.verifyElementIsDisplayed(
      Commons.january2022DateText,
      this.FIVE_SECONDS_IN_MILLISECONDS
    );
    }
    
    await Commons.calendarDay13.click();
  }
}

export default new Helpers();

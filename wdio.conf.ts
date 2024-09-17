import type { Options } from "@wdio/types";
import allure from "@wdio/allure-reporter";
import {
  APP_PATH,
  INVALID_USERNAME,
  INVALID_PASSWORD,
  USERNAME,
  ADMIN_USERNAME,
  NOT_AFFILIATED_USERNAME,
  NOT_PERMISSION_USERNAME,
  PASSWORD,
  APP_AZUL_BUNDLE,
  IS_PREVIOUS_TEST_SUCCESS,
} from "./Helpers/ConstantsDev.ts";

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  port: 4723,

  specs: ["./features/**/*.feature"],

  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "Google Pixel 7 Pro (Android 14)",
      "appium:platformVersion": "14.0",
      "appium:noReset": true,
      "appium:enableMultiWindows": true,
      "appium:automationName": "UIAutomator2",
      "appium:appPackage": "com.sdp.appazul",
      "appium:appActivity":
        "com.sdp.appazul.activities.dashboard.SplashScreenActivity",
    },
  ],

  logLevel: "info",

  bail: 1,

  waitforTimeout: 99000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 0,

  services: ["appium", "visual"],

  framework: "cucumber",

  afterStep: async function (step) {
    const screenshot = await driver.takeScreenshot();
    /*allure.addAttachment(
      `Failed Step: ${step.text}`,
      Buffer.from(screenshot, "base64"),
      "image/png"
    );*/
  },

  /*afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    // Take a screenshot after every test, whether it passed or failed
    const screenshot = await driver.takeScreenshot();

    // Attach the screenshot to the Allure report
    // Add a descriptive screenshot name
    const testStatus = passed ? "PASSED" : "FAILED";
    const screenshotName = `${
      test.title
    } - ${testStatus} - ${new Date().toISOString()}`;

    // Attach the screenshot to the Allure report
    allure.addAttachment(
      screenshotName,
      Buffer.from(screenshot, "base64"),
      "image/png"
    );
  },*/

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true, // Disable WebDriver steps reporting
        useCucumberStepReporter: true, // Use Cucumber step reporter to minimize reports
      },
    ],
  ],

  cucumberOpts: {
    require: ["./features/**/*.ts"], // Update if needed
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 90000,
    ignoreUndefinedDefinitions: false,
  },

  before: function (capabilities, specs) {
    // Attach constants to global object
    (global as any).APP_PATH = APP_PATH;
    (global as any).INVALID_USERNAME = INVALID_USERNAME;
    (global as any).INVALID_PASSWORD = INVALID_PASSWORD;
    (global as any).PASSWORD = PASSWORD;
    (global as any).USERNAME = USERNAME;
    (global as any).ADMIN_USERNAME = ADMIN_USERNAME;
    (global as any).NOT_AFFILIATED_USERNAME = NOT_AFFILIATED_USERNAME;
    (global as any).NOT_PERMISSION_USERNAME = NOT_PERMISSION_USERNAME;
    (global as any).APP_AZUL_BUNDLE = APP_AZUL_BUNDLE;
    (global as any).IS_PREVIOUS_TEST_SUCCESS = IS_PREVIOUS_TEST_SUCCESS;
  },
};

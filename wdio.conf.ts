import type { Options } from "@wdio/types";
import { execSync } from "child_process";
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
import { PERMISSIONS } from "./Helpers/Permissions.ts";

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  port: 4724,

  specs: ["./features/**/*.feature"],

  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "Google Pixel 7 Pro (Android 14)",
      "appium:platformVersion": "14.0",
      "appium:autoGrantPermissions": true,
      "appium:enableMultiWindows": true,
      "appium:noReset": true,
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

  connectionRetryCount: 1,

  services: ["appium", "visual"],

  framework: "cucumber",

  beforeScenario: async function (test, context) {
    if (!(global as any).IS_PREVIOUS_TEST_SUCCESS) {
      await driver.deleteSession();
      process.exit(1);
    }
  },

  beforeTest: async function (test, context) {
    console.log("Starting the app before the test...");
    if (!(global as any).IS_PREVIOUS_TEST_SUCCESS) {
      await driver.activateApp((global as any).APP_AZUL_BUNDLE);
    }
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      //Close app & delete data when test fail
      console.log(`Test failed: ${test.title}. Closing the app...`);
      (global as any).IS_PREVIOUS_TEST_SUCCESS = false;
      await driver.terminateApp((global as any).APP_AZUL_BUNDLE);
      await driver.execute("mobile: shell", {
        command: "pm clear " + (global as any).APP_AZUL_BUNDLE,
      });
    } else {
      (global as any).IS_PREVIOUS_TEST_SUCCESS = true;
    }
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
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
    timeout: 60000,
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

    try {
      PERMISSIONS.forEach((permission) => {
        const cmd = `adb shell pm grant ${APP_AZUL_BUNDLE} ${permission}`;
        console.log(`Executing: ${cmd}`);
        try {
          execSync(cmd);
        } catch (error) {
          if (
            (error as Error).message.includes("java.lang.SecurityException")
          ) {
            console.log(
              `Skipping ${permission}: Permission not requested by the app.`
            );
          } else {
            console.log(
              `Failed to grant ${permission}:`,
              (error as Error).message
            );
          }
        }
      });

      console.log(
        `Attempted to grant all possible permissions to ${APP_AZUL_BUNDLE}`
      );
    } catch (error) {
      console.error("Failed to grant permissions:", (error as Error).message);
    }
  },
};

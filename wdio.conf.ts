import type { Options } from "@wdio/types";
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
} from "./Helpers/ConstantsDev.ts";

let driver: WebdriverIO.Browser;

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
      "appium:autoAcceptAlerts": true,
      "appium:enableMultiWindows": true,
      //np"appium:noReset": true,
      "appium:automationName": "UIAutomator2",
      "appium:appPackage": "com.sdp.appazul", // Replace with your app's package name
      "appium:appActivity":
        "com.sdp.appazul.activities.dashboard.SplashScreenActivity", // Replace with your app's main activity
    },
  ],

  logLevel: "error",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 1,

  services: ["appium", "visual"],

  framework: "cucumber",

  reporters: ["spec"],

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
  },
};

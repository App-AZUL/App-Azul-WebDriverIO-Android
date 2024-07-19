import type { Options } from "@wdio/types";

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
      "appium:noReset": false,
      "appium:automationName": "UIAutomator2",
      "appium:appPackage": "com.sdp.appazul", // Replace with your app's package name
      "appium:appActivity":
        "com.sdp.appazul.activities.dashboard.SplashScreenActivity", // Replace with your app's main activity
    },
  ],

  logLevel: "info",

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

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      // Screenshot directory
      const screenshotPath = "./errorShots/";

      // Create directory if it does not exist
      const fs = require("fs");
      if (!fs.existsSync(screenshotPath)) {
        fs.mkdirSync(screenshotPath);
      }

      // Get the test name and sanitize it for a filename
      const testName = test.title.replace(/[^a-z0-9]/gi, "_").toLowerCase();
      const screenshotFile = `${screenshotPath}${testName}.png`;

      // Take the screenshot
      await driver.saveScreenshot(screenshotFile);
    }
  },

  /**
   * Uncomment and implement hooks if needed
   */
  // onPrepare: function (config, capabilities) {},
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {},
  // onWorkerEnd: function (cid, exitCode, specs, retries) {},
  // beforeSession: function (config, capabilities, specs, cid) {},
  // before: function (capabilities, specs) {},
  // beforeCommand: function (commandName, args) {},
  // beforeFeature: function (uri, feature) {},
  // beforeScenario: function (world, context) {},
  // beforeStep: function (step, scenario, context) {},
  // afterStep: function (step, scenario, result, context) {},
  // afterScenario: function (world, result, context) {},
  // afterFeature: function (uri, feature) {},
  // afterCommand: function (commandName, args, result, error) {},
  // after: function (result, capabilities, specs) {},
  // afterSession: function (config, capabilities, specs) {},
  // onComplete: function(exitCode, config, capabilities, results) {},
  // onReload: function(oldSessionId, newSessionId) {},
  // beforeAssertion: function(params) {},
  // afterAssertion: function(params) {},
};

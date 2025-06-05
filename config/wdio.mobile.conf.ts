import {
  APP_PATH,
  INVALID_USERNAME,
  INVALID_PASSWORD,
  USERNAME,
  ADMIN_USERNAME,
  ADMIN_USERFULLNAME,
  ADMIN_RNC,
  ADMIN_DOB,
  ADMIN_PHONE,
  ADMIN_EMAIL,
  ADMIN_ROLE,
  ADMIN_NAME,
  ADMIN_CLIENT_NAME,
  ADMIN_BUSINESS_NAME,
  NOT_AFFILIATED_USERNAME,
  NOT_AFFILIATED_NAME,
  NOT_PERMISSION_USERNAME,
  NOT_PERMISSION_NAME,
  NUEVO_USERNAME,
  NUEVO_EXPIRADO_USERNAME,
  BLOQUEADO_USERNAME,
  DESHABILITADO_USERNAME,
  EN_INVESTIGACION_USERNAME,
  USERNAME_WITHOUT_LOCATIONS,
  NO_LOCATIONS_NAME,
  NO_LOCATIONS_CEDULA,
  NO_LOCATIONS_DOB,
  NO_LOCATIONS_MAIL,
  PASSWORD,
  APP_AZUL_BUNDLE,
  IS_PREVIOUS_TEST_SUCCESS,
  PIN,
  IS_PIN_REVERSED,
} from "../Helpers/ConstantsQA.ts";

export const config = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  port: 4723,

  specs: ["../features/mobile/*.feature"],

  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "Google Pixel 7 Pro (Android 14)",
      "appium:platformVersion": "15.0",
      "appium:noReset": false,
      "appium:enableMultiWindows": true,
      "appium:automationName": "UIAutomator2",
      "appium:appPackage": "com.sdp.appazul",
      "appium:appActivity":
        "com.sdp.appazul.activities.dashboard.SplashScreenActivity",
        "appium:autoGrantPermissions": true,
    },
  ],

  logLevel: "debug",

  bail: 0,

  waitforTimeout: 30000,

  connectionRetryTimeout: 35000,

  connectionRetryCount: 0,

  services: ["appium", "visual"],

  framework: "cucumber",

  afterStep: async function () {
    if (driver.sessionId) {
      // If session is active, take a screenshot
      console.log("session id es: "+driver.sessionId);
      
      await driver.takeScreenshot();
    }
  },

  beforeFeature: async function ({ uri, feature, name }) {
    if (driver) {
        //await driver.deleteSession();
    }
    // WebdriverIO will automatically create a new session
    // for the next test if you have autoCreateSession enabled
},

afterFeature: async function ({ uri, feature, name }) {
    // Optional cleanup
    //await driver.closeApp();
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

  autoCreateSession: true,

  cucumberOpts: {
    require: ["./features/mobile/*.ts"], // Update if needed
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tags: "",
    timeout: 130000,
    ignoreUndefinedDefinitions: false,
  },

  before: function () {
    // Attach constants to global object
    (global as any).APP_PATH = APP_PATH;
    (global as any).INVALID_USERNAME = INVALID_USERNAME;
    (global as any).INVALID_PASSWORD = INVALID_PASSWORD;
    (global as any).PASSWORD = PASSWORD;
    (global as any).USERNAME = USERNAME;
    (global as any).ADMIN_USERNAME = ADMIN_USERNAME;
    (global as any).ADMIN_USERFULLNAME = ADMIN_USERFULLNAME ;
    (global as any).ADMIN_RNC = ADMIN_RNC ;
    (global as any).ADMIN_DOB = ADMIN_DOB ;
    (global as any).ADMIN_PHONE = ADMIN_PHONE ;
    (global as any).ADMIN_EMAIL = ADMIN_EMAIL ;
    (global as any).ADMIN_ROLE = ADMIN_ROLE ;
    (global as any).ADMIN_NAME = ADMIN_NAME;
    (global as any).ADMIN_BUSINESS_NAME = ADMIN_BUSINESS_NAME;
    (global as any).ADMIN_CLIENT_NAME = ADMIN_CLIENT_NAME;
    (global as any).NOT_AFFILIATED_USERNAME = NOT_AFFILIATED_USERNAME;
    (global as any).NOT_AFFILIATED_NAME = NOT_AFFILIATED_NAME;
    (global as any).NOT_PERMISSION_USERNAME = NOT_PERMISSION_USERNAME;
    (global as any).NOT_PERMISSION_NAME = NOT_PERMISSION_NAME;
    (global as any).NUEVO_USERNAME = NUEVO_USERNAME;
    (global as any).NUEVO_EXPIRADO_USERNAME = NUEVO_EXPIRADO_USERNAME;
    (global as any).BLOQUEADO_USERNAME = BLOQUEADO_USERNAME;
    (global as any).DESHABILITADO_USERNAME = DESHABILITADO_USERNAME;
    (global as any).EN_INVESTIGACION_USERNAME = EN_INVESTIGACION_USERNAME;
    (global as any).USERNAME_WITHOUT_LOCATIONS = USERNAME_WITHOUT_LOCATIONS;
    (global as any).APP_AZUL_BUNDLE = APP_AZUL_BUNDLE;
    (global as any).IS_PREVIOUS_TEST_SUCCESS = IS_PREVIOUS_TEST_SUCCESS;
    (global as any).PIN = PIN;
    (global as any).IS_PIN_REVERSED = IS_PIN_REVERSED;
    (global as any).NO_LOCATIONS_NAME = NO_LOCATIONS_NAME;
    (global as any).NO_LOCATIONS_CEDULA = NO_LOCATIONS_CEDULA;
    (global as any).NO_LOCATIONS_DOB = NO_LOCATIONS_DOB;
    (global as any).NO_LOCATIONS_MAIL = NO_LOCATIONS_MAIL;
  },
};

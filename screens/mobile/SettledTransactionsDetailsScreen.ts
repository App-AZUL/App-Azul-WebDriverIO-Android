import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";

class SettledTransactionsDetailsScreen {
  get screenTitle() {
    return $(
      "//*[contains(@text,'Vende desde tu móvil\nde forma fácil y segura')]"
    );
  }
  get noLote() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLotNo"]'
    );
  }
  get approvalNumber() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvApproval"]'
    );
  }
  get terminalId() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTerminalId"]'
    );
  }
  get trxCardNumber() {
    return $(
      "//*[contains(@text,'*')]"
    );
  }
}

export default new SettledTransactionsDetailsScreen();

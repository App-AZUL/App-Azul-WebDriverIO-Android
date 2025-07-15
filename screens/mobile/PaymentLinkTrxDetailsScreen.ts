import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";

class PaymentLinkTrxScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/toolbarTextTitle"]'
    );
  }
  get trxLinkID() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLinkId"]'
    );
  }
  get trxType() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTransactionsType"]'
    );
  }
  get trxStatus() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvStatus"]'
    );
  }
  get trxDate() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvDateAndTime"]'
    );
  }
  get trxAmount() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvAmount"]'
    );
  }
  get trxLocalityName() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLocationNameValue"]'
    );
  }
}

export default new PaymentLinkTrxScreen();

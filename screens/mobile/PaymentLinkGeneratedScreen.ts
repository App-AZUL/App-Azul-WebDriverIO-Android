import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";

class PaymentLinkGeneratedScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLinkTitleQuickSale"]'
    );
  }
  get trxType() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTransactionTypeName"]'
    );
  }
  get trxAmount() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvFinalAmount"]'
    );
  }
  get trxLink() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLink"]'
    );
  }
  get copyLinkButton() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/copyLayout"]'
    );
  }
  get shareLinkButton() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/shareingLayout"]'
    );
  }
  get proximaVentaButton() {
    return $(
      '//android.widget.Button[@resource-id="com.sdp.appazul:id/btnNextSale"]'
    );
  }
  get closeButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/btnClose"]'
    );
  }
  get sharingMenu() {
    return $(
      '//*[contains(@text,"Hola, accede a este enlace para pagar tu compra.")]'
    );
  }
  async verifyPaymentLinkHasBeenGenerated() {
    await Helpers.verifyElementExist(
      this.screenTitle,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementExist(
      this.trxType,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementExist(
      this.trxAmount,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementExist(
      this.trxLink,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementExist(
      this.copyLinkButton,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementExist(
      this.shareLinkButton,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementExist(
      this.proximaVentaButton,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
    await Helpers.verifyElementExist(
      this.closeButton,
      Helpers.FIVE_SECONDS_IN_MILLISECONDS
    );
  }
}

export default new PaymentLinkGeneratedScreen();

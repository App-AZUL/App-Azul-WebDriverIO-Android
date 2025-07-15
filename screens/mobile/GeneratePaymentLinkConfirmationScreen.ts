import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";

class GeneratePaymentLinkConfirmationScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@text="Generar link de pago"]'
    );
  }
  get explanationText() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvconfirmInfo"]'
    );
  }
  get screenSubTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTitlePaymentdetails"]'
    );
  }
  get commercePlaceholder() {
    return $(
      '//android.widget.TextView[@text="Comercio:"]'
    );
  }
  get commerceTextfield() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvValidaComercio"]'
    );
  }
  get locationPlaceholder() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLocationTitle"]'
    );
  }
  get locationTextfield() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvValidLocation"]'
    );
  }
  get trxTypePlaceholder() {
    return $(
      '//android.widget.TextView[@text="Tipo de transacción:"]'
    );
  }
  get trxTypeTextfield() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvValidTrnType"]'
    );
  }
  get noOrdenPlaceholder() {
    return $(
      '//android.widget.TextView[@text="No. orden/venta:"]'
    );
  }
  get noOrdenTextfield() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvValidOrderNo"]'
    );
  }
  get nombreClientePlaceholder() {
    return $(
      '//android.widget.TextView[@text="Nombre cliente:"]'
    );
  }
  get nombreClienteTextfield() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvCustomerName"]'
    );
  }
  get emailPlaceholder() {
    return $(
      '//android.widget.TextView[@text="Correo electrónico:"]'
    );
  }
  get emailTextfield() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvEmail"]'
    );
  }
  get totalAmountPlaceholder() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvAmountTitle"]'
    );
  }
  get totalAmountTextfield() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvValidAmount"]'
    );
  }
  get deslizaParaGenerarLinkSlider() {
    return $(
      '//android.view.View[@resource-id="com.sdp.appazul:id/btnConfirmPayment"]'
    );
  }
  get cancelarButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/cancelPayment"]'
    );
  }
  async verifyGeneratePaymentLinkConfirmationElements() {
      await Helpers.verifyElementExist(
        this.screenTitle,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.explanationText,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.screenSubTitle,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.commercePlaceholder,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.commerceTextfield,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.locationPlaceholder,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.locationTextfield,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.trxTypePlaceholder,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.trxTypeTextfield,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.noOrdenPlaceholder,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.noOrdenTextfield,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.nombreClientePlaceholder,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.nombreClienteTextfield,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.emailPlaceholder,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.emailTextfield,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.totalAmountPlaceholder,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.totalAmountTextfield,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      global.SCENARIO_CONTEXT["currentPLTrxAmount"] = await this.totalAmountTextfield.getText();
      await Helpers.verifyElementExist(
        this.deslizaParaGenerarLinkSlider,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
      await Helpers.verifyElementExist(
        this.cancelarButton,
        Helpers.FIVE_SECONDS_IN_MILLISECONDS
      );
    }
}

export default new GeneratePaymentLinkConfirmationScreen();

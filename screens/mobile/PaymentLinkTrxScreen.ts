import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";
import DashboardScreen from "./DashboardScreen.ts";

class PaymentLinkTrxScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/toolbarTextTitle" and @text="Transacciones Link de Pagos"]'
    );
  }
  get comenzarAUsarButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvFinalAmount"]'
    );
  }
  get firstPLTransaction() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvPaymentAmount"])[1]'
    );
  }
  get label2022() {
    return $(
      '//*[contains(@text,"/2022")]'
    );
  }
  get firstPLTransactionAmount() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvPaymentAmount"])[1]'
    );
  }
  get searchBarTextfield() {
    return $(
      '//android.widget.EditText[@resource-id="com.sdp.appazul:id/etSearchBy"]'
    );
  }
  get clearSearchBarButton() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/btnClearSearchText"]/android.widget.ImageView'
    );
  }
  get firstPLTransactionLinkID() {
    return $(
      '(//*[@resource-id="com.sdp.appazul:id/tvLinkId"])[1]'
    );
  }
  get firstPLTransactionType() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTransactionType"])[1]'
    );
  }
  get firstPLTransactionStatus() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvStatus"])[1]'
    );
  }
  get firstPLTransactionDate() {
    return $(
      '(//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvPaymentDate"])[1]'
    );
  }
  get firstPLTransactionLocality() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLocationName"]'
    );
  }
  get trxTypeFilter() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvSpinnerItem"]'
    );
  }
  get linkIdOption() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvSpinnerItem" and @text="Link ID"]'
    );
  }
  get firstTrxThreeDots() {
    return $(
      '(//android.widget.ImageView[@resource-id="com.sdp.appazul:id/imgMoreButton"])[1]'
    );
  }
  get trxDetailsChevronButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="com.sdp.appazul:id/mainCardLayout"]'
    );
  }
  get crearShortcutButton() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/btnPaymentCreateShortcut"]'
    );
  }
  get locationNameOnFilter() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvLocationName"]'
    );
  }
  async navigateToPaymentLinkTrxScreen() {
      let isUserAtPaymentLinkTrxScreen:Boolean = await Helpers.verifyElementExist(
            this.screenTitle,
            Helpers.FIVE_SECONDS_IN_MILLISECONDS
          );
          if (!isUserAtPaymentLinkTrxScreen) {
            await DashboardScreen.navigateToDashboard(
              global.USERNAME as string,
              global.PASSWORD as string
            );
            await DashboardScreen.paymentLinkButton.click();
            try {
                this.comenzarAUsarButton.click();
            } catch (error) {
                let isUserAtPaymentLinkTrxScreen:Boolean = await Helpers.verifyElementExist(
                    this.screenTitle,
                    Helpers.FIVE_SECONDS_IN_MILLISECONDS
                );
                if (!isUserAtPaymentLinkTrxScreen) {
                    throw new Error("User is not at Payment Link Transactions screen");
                } else {
                    await console.log("User already has PL transactions, no need to click on Comenzar a Usar button");
                }
            }
          }
    }
}

export default new PaymentLinkTrxScreen();

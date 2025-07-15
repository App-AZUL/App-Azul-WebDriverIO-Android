import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";
import DashboardScreen from "./DashboardScreen.ts";
import PaymentLinkTrxScreen from "./PaymentLinkTrxScreen.ts";

class PaymentLinkCalculatorScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvTotalAmountSdkTitle"]'
    );
  }
  get numberOneButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvFirstNo"]'
    );
  }
  get numberTwoButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvSecondNo"]'
    );
  }
  get numberThreeButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvThirdNo"]'
    );
  }
  get numberFourButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvFourthNo"]'
    );
  }
  get numberFiveButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvFifthNo"]'
    );
  }
  get numberSixButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvSixthNo"]'
    );
  }
  get numberSevenButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvSeventhNo"]'
    );
  }
  get numberEightButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvEightNo"]'
    );
  }
  get numberNineButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvNine"]'
    );
  }
  get numberZeroButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvZero"]'
    );
  }
  get amountExceededSnackbar() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/snackbar_text"]'
    );
  }
  get continuarButton() {
    return $(
      '//android.widget.Button[@resource-id="com.sdp.appazul:id/btnConfirmAmount"]'
    );
  }
  async setTenRandomNumbers() {
    //Typing numbers in the calculator
    let randomNumbersStr = '';
    for (let i = 0; i < 10; i++) {
      randomNumbersStr += Math.floor(Math.random() * 10); // Random digit from 0 to 9
    }

    for (let i = 0; i < randomNumbersStr.length; i++) {
      const currentChar = randomNumbersStr[i];

      switch (currentChar) {
        case '0':
          await this.numberZeroButton.click();
          break;
        case '1':
          await this.numberOneButton.click();
          break;
        case '2':
          await this.numberTwoButton.click();
          break;
        case '3':
          await this.numberThreeButton.click();
          break;
        case '4':
          await this.numberFourButton.click();
          break;
        case '5':
          await this.numberFiveButton.click();
          break;
        case '6':
          await this.numberSixButton.click();
          break;
        case '7':
          await this.numberSevenButton.click();
          break;
        case '8':
          await this.numberEightButton.click();
          break;
        case '9':
          await this.numberNineButton.click();
          break;
        default:
          throw new Error("Invalid character in pinString: " + currentChar);
      }
    }
    }
    async setPaymentLinkAmount(stringAmount: string) {
    //Typing the amount in the calculator
    for (let i = 0; i < stringAmount.length; i++) {
      const currentChar = stringAmount[i];

      switch (currentChar) {
        case '0':
          await this.numberZeroButton.click();
          break;
        case '1':
          await this.numberOneButton.click();
          break;
        case '2':
          await this.numberTwoButton.click();
          break;
        case '3':
          await this.numberThreeButton.click();
          break;
        case '4':
          await this.numberFourButton.click();
          break;
        case '5':
          await this.numberFiveButton.click();
          break;
        case '6':
          await this.numberSixButton.click();
          break;
        case '7':
          await this.numberSevenButton.click();
          break;
        case '8':
          await this.numberEightButton.click();
          break;
        case '9':
          await this.numberNineButton.click();
          break;
        default:
          throw new Error("Invalid character in pinString: " + currentChar);
      }
    }
    }
    async navigateToPaymentLinkCalculatorScreen() {
          let isUserAtPaymentLinkCalculatorScreen:Boolean = await Helpers.verifyElementExist(
                this.screenTitle,
                Helpers.FIVE_SECONDS_IN_MILLISECONDS
              );
              if (!isUserAtPaymentLinkCalculatorScreen) {
                await DashboardScreen.navigateToDashboard(
                  global.USERNAME as string,
                  global.PASSWORD as string
                );
                await DashboardScreen.paymentLinkButton.click();
                try {
                    PaymentLinkTrxScreen.comenzarAUsarButton.click();
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
                await PaymentLinkTrxScreen.crearShortcutButton.click();
              }
        }
}

export default new PaymentLinkCalculatorScreen();

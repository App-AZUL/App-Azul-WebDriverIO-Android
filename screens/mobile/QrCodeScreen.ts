import { $ } from "@wdio/globals";
import Helpers from "../../helpers/Helpers.ts";
import OnboardingScreen from "./OnboardingScreen.ts";
import DashboardScreen from "./DashboardScreen.ts";

class QrCodeScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/toolbarTextTitleTwo"]'
    );
  }
  get qrCodeImage() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/imgViewQrCodeHidden"]'
    );
  }
  get descargarButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/imgDownloadQrCodeHidden"]'
    );
  }
  get qrDownloadedSnackbar() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/snackbar_text"]'
    );
  }
  get compartirButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/imgShareQrCodeHidden"]'
    );
  }
  get qrSharingMenu() {
    return $(
      "//*[contains(@text,'Paga seleccionando este Código QR AZUL desde tu App Popular o App tPago')]"
    );
  }
  get slideLeftButton() {
    return $(
      '//android.widget.HorizontalScrollView[@resource-id="com.sdp.appazul:id/circleIndicatorTwo"]'
    );
  }
  get currentDayText() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvDateFilter"]'
    );
  }
  async navigateToQrCodeScreen() {
    let isUserAtQRCodeScreen:Boolean = await Helpers.verifyElementExist(
          this.screenTitle,
          Helpers.FIVE_SECONDS_IN_MILLISECONDS
        );
        if (!isUserAtQRCodeScreen) {
          await DashboardScreen.navigateToDashboard(
            global.USERNAME as string,
            global.PASSWORD as string
          );
          await DashboardScreen.qrButton.click();
        }
  }
}

export default new QrCodeScreen();

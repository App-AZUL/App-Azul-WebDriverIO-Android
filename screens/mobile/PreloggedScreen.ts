import { $ } from "@wdio/globals";

class PreloggedScreen {
  get screenTitle() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/dashBoardTopBar"]'
    );
  }
  get burgerMenu() {
    return $("//*[@resource-id = 'com.sdp.appazul:id/burgerMenuLoginBtn']");
  }
  get desvincularButton() {
    return $("//*[@resource-id = 'com.sdp.appazul:id/deregisterUser']");
  }
  get desvincularTitle() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = 'Desvincular' or . = 'Desvincular') and @resource-id = 'android:id/alertTitle']"
    );
  }
  get desvincularBody() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = '¿Estás seguro que deseas desvincular esta cuenta de este dispositivo?' or . = '¿Estás seguro que deseas desvincular esta cuenta de este dispositivo?') and @resource-id = 'android:id/message']"
    );
  }
  get siButton() {
    return $(
      "//hierarchy/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.Button[2]"
    );
  }
  get enteradoButton() {
    return $("//*[(@text = '¡Enterado!' or . = '¡Enterado!')]");
  }
  get secondPageTitle() {
    return $(
      "//*[@class = 'android.widget.TextView' and (@text = '¡Crea Links de Pagos para Sólo Autorización!' or . = '¡Crea Links de Pagos para Sólo Autorización!') and @resource-id = 'com.sdp.appazul:id/v1']"
    );
  }
  get nextButtonTips() {
    return $(
      "//*[@class = 'android.widget.RelativeLayout' and @resource-id = 'com.sdp.appazul:id/goToNext' and (@text = '' or . = '')]"
    );
  }
}

export default new PreloggedScreen();

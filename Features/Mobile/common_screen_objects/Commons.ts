import { expect, $ } from "@wdio/globals";

class Commons {
  get backButton() {
    return $("//*[contains(@resource-id,'com.sdp.appazul:id/btnBackScreen')]");
  }
  get okButton() {
    return $(
      "//*[@class = 'android.widget.Button' and (@text = 'OK ' or . = 'OK ') and @resource-id = 'android:id/button1'] | //*[contains(@text,'Continuar')] | //*[contains(@text,'Aceptar')]"
    );
  }
  get siButton() {
    return $("//*[contains(@text,'SÍ')] | //*[contains(@text,'YES')]");
  }
  get noButton() {
    return $("//*[contains(@text,'NO')]");
  }
}

export default new Commons();

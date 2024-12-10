import { $ } from "@wdio/globals";

class Commons {
  get backButton() {
    return $("//*[contains(@resource-id,'com.sdp.appazul:id/btnBackScreen')]");
  }
  get okButton() {
    return $(
      "//*[contains(@text,'No')] | //*[contains(@text,'Cancelar')] | //*[@class = 'android.widget.Button' and (@text = 'OK ' or . = 'OK ') and @resource-id = 'android:id/button1'] | //*[contains(@text,'Continuar')] | //*[contains(@text,'Aceptar')] | //*[contains(@text,'ACEPTAR')]"
    );
  }
  get siButton() {
    return $("//*[contains(@text,'SÍ')] | //*[contains(@text,'YES')]");
  }
  get noButton() {
    return $("//*[contains(@text,'NO')]");
  }
  get continuarButton() {
    return $("//*[contains(@text,'Continuar')]");
  }
}

export default new Commons();

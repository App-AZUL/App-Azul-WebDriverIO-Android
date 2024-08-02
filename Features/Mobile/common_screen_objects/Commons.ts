import { expect, $ } from "@wdio/globals";

class Commons {
  get backButton() {
    return $("//*[contains(@resource-id,'com.sdp.appazul:id/btnBackScreen')]");
  }
  get okButton() {
    return $(
      "//*[@class = 'android.widget.Button' and (@text = 'OK ' or . = 'OK ') and @resource-id = 'android:id/button1']"
    );
  }
}

export default new Commons();

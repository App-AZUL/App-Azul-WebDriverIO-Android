import { expect, $ } from "@wdio/globals";

class Commons {
  get backButton() {
    return $("//*[contains(@resource-id,'com.sdp.appazul:id/btnBackScreen')]");
  }
}

export default new Commons();

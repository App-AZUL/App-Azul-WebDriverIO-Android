import { expect, $ } from "@wdio/globals";

class AffiliationRequirementsScreen {
  get screenTitle() {
    return $(
      '//android.widget.TextView[@resource-id="com.sdp.appazul:id/tvRequestAffiliation"]'
    );
  }
}

export default new AffiliationRequirementsScreen();

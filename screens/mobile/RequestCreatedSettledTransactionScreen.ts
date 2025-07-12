import { $ } from "@wdio/globals";

class RequestCreatedSettledTransactionScreen {

    get screenTitle() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/tvAffiliationTitle']");
    }
    get slaText() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/tvServiceOrderNoTitle']");
    }
    get locationName(){
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/txtSelectedLocation']");
    }
    get locationMid(){
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/txtSelectedLocation'");
    }
    get closeButton(){
        return $('//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/btnClose"]/android.widget.ImageView');
    }
    get requestNumberText(){
        return $('//android.widget.TextView[@resource-id="com.sdp.appazul:id/textSap"]');
    }
}
export default new RequestCreatedSettledTransactionScreen();
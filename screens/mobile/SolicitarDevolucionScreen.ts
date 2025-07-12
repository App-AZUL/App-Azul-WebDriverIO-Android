import { $ } from "@wdio/globals";

class SolicitarDevolucionScreen {

    get screenTitle() {
        return $("//android.widget.TextView[@text='Solicitar devolución']");
    }
    get trxDate(){
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/tvDateTime']");
    }
    get trxAmount() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/tvAmount']");
    }
    get trxCardNumber() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/tvCardNumber']");
    }
    get trxApprovalNumber() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/tvApproval']");
    }
    get montoADevolverTextfield() {
        return $("//android.widget.EditText[@resource-id='com.sdp.appazul:id/amtEditText']");
    }
    get ingreseElMontoText() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/tvAmtError']");
    }
    get motivoDeDevolucionTextfield() {
        return $("//android.widget.RelativeLayout[@resource-id='com.sdp.appazul:id/tid_selection']");
    }
    get transaccionFraudulentaOption() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/textView' and @text='Transacción fraudulenta']");
    }
    get montoIncorrectoOption() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/textView' and @text='Monto incorrecto']");
    }
    get transaccionDuplicadaOption() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/textView' and @text='Transacción duplicada']");
    }
    get pagadoPorOtroMedioOption() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/textView' and @text='Pagado por otro medio']");
    }
    get servicioNoRecibidoOption() {
        return $("//android.widget.TextView[@resource-id='com.sdp.appazul:id/textView' and @text='Servicio no recibido']");
    }
    get comentarioTextField() {
        return $("//android.widget.EditText[@resource-id='com.sdp.appazul:id/editTextComments']");
    }
    get solicitarAzulButton() {
        return $("//android.widget.RelativeLayout[@resource-id='com.sdp.appazul:id/solicitarButton']");
    }
}



export default new SolicitarDevolucionScreen();
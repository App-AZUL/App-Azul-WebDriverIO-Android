import { $ } from "@wdio/globals";
import SettledTransactionsScreen from "./SettledTransactionsScreen.ts";
import Helpers from "../../helpers/Helpers.ts";

class Commons {
  get sesionExpiradaTitle() {
    return $("//*[contains(@text,'Sesión expirada')]");
  }
  get sesionExpiradaAceptarButton() {
    return $("//*[contains(@text,'ACEPTAR')]");
  }
  get backButton() {
    return $("//*[contains(@resource-id,'com.sdp.appazul:id/btnBackScreen')] | //android.widget.ImageView[@resource-id=\"com.sdp.appazul:id/infoBackButton\"] | //android.widget.RelativeLayout[@resource-id=\"com.sdp.appazul:id/relBackBtnLayout\"] | //android.widget.ImageView[@resource-id=\"com.sdp.appazul:id/myBusinessButton\"] | //android.widget.ImageView[@resource-id=\"com.sdp.appazul:id/unitsLocationBackButton\"]");
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
  get proffileWithoutAccessModalTitle() {
    return $(
      "//*[contains(@text,'acceso')]"
    );
  }
  get proffileWithoutQrCodeProductModalMessage() {
    return $(
      "//*[contains(@text,'Obtén tu Código QR AZUL aquí')]"
    );
  }
  get proffileWithoutAccessModalBody() {
    return $(
      "//*[contains(@text,'Por favor, comunícate con el administrador de tu empresa para establecer los mismos.')]"
    );
  }
  get calendarMonthBackArrow() {
    return $(
      '//android.widget.ImageView[@resource-id="com.sdp.appazul:id/left"]'
    );
  }
  get calendarDay13() {
    return $("//*[contains(@text,'13')]");
  }
  get january2022DateText() {
    return $("//*[contains(@text,'Enero 2022')]");
  }
}

export default new Commons();

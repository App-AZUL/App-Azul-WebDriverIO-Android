class PreferenciasScreen {
  get screenTitle() {
    return $("//*[contains(@text,'Preferencias')]");
  }
  get permitirNotificacionesButton() {
    return $(
      '//*[contains(@resource-id,"com.sdp.appazul:id/btnAllNotificationSwitch")]'
    );
  }
  get permitirNotificacionesText() {
    return $("//*[contains(@text,'Permitir notificaciones')]");
  }
  get transaccionesLinkDePagosText() {
    return $("//*[contains(@text,'Transacciones Link de Pagos')]");
  }
  get transaccionesCodigoQr() {
    return $("//*[contains(@text,'Transacciones Código QR')]");
  }
  get nuevaAfiliacionLinkDePagosText() {
    return $("//*[contains(@text,'Nueva afiliación Link de Pagos')]");
  }
  get nuevaAfiliacionTapText() {
    return $("//*[contains(@text,'Nueva afiliación Tap')]");
  }
  get solicitudesCerradasText() {
    return $("//*[contains(@text,'Solicitudes cerradas')]");
  }
}
export default new PreferenciasScreen();

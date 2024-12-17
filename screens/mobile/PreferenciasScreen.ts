class PreferenciasScreen {
  get screenTitle() {
    return $(
      '//android.widget.RelativeLayout[@resource-id="com.sdp.appazul:id/dashBoardTopBar"]'
    );
  }
  get permitirNotificacionesButton() {
    return $(
      '//*[contains(@resource-id,"com.sdp.appazul:id/btnAllNotificationSwitch")]'
    );
  }
}
export default new PreferenciasScreen();

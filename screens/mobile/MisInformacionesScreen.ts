class MisInformacionesScreen {
  get juanPerezUsernameElement() {
    return $("//*[contains(@text,'JuanPerez')]");
  }
  get juanPerezUserCedula() {
    return $("//*[contains(@text,'12345678901')]");
  }
  get juanPerezUserDob() {
    return $("//*[contains(@text,'04/01/1900')]");
  }
  get juanPerezUserOccupation() {
    return $("//*[contains(@text,'-')]");
  }
  get juanPerezUserEmail() {
    return $("//*[contains(@text,'cbacosta@bpd.com.do')]");
  }
  get juanPerezUserRole() {
    return $("//*[contains(@text,'SecondaryUser')]");
  }
}
export default new MisInformacionesScreen();

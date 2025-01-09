class MisInformacionesScreen {
  get noLocationsUsernameElement() {
    return $("//*[contains(@text,'"+global.NO_LOCATIONS_NAME+"')]");
  }
  get noLocationsUserCedula() {
    return $("//*[contains(@text,'"+global.NO_LOCATIONS_CEDULA+"')]");
  }
  get noLocationsUserDob() {
    return $("//*[contains(@text,'"+global.NO_LOCATIONS_DOB+"')]");
  }
  get noLocationsUserOccupation() {
    return $("//*[contains(@text,'-')]");
  }
  get noLocationsUserEmail() {
    return $("//*[contains(@text,'"+global.NO_LOCATIONS_MAIL+"')]");
  }
  get noLocationsUserRole() {
    return $("//*[contains(@text,'SecondaryUser')]");
  }
}
export default new MisInformacionesScreen();

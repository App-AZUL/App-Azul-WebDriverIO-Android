class DatosPersonalesScreen {
  get screenTitle() {
    return $("//*[contains(@text,'Mis informaciones')]");
  }
  get usernameElement() {
    return $("//*[contains(@text,'"+global.ADMIN_USERNAME+"')]");
  }
  get userFullNameElement() {
    return $("//*[contains(@text,'"+global.ADMIN_USERFULLNAME+"')]");
  }
  get userRnc() {
    return $("//*[contains(@text,'"+global.ADMIN_RNC+"')]");
  }
  get userDob() {
    return $("//*[contains(@text,'"+global.ADMIN_DOB+"')]");
  }
  get userOccupation() {
    return $("//*[contains(@text,'-')]");
  }
  get userPhone() {
    return $("//*[contains(@text,'"+global.ADMIN_PHONE+"')]");
  }
  get userCelphone() {
    return $("//*[contains(@text,'-')]");
  }
  get userEmail() {
    return $("//*[contains(@text,'"+global.ADMIN_EMAIL+"')]");
  }
  get userRole() {
    return $("//*[contains(@text,'"+global.ADMIN_ROLE+"')]");
  }
}
export default new DatosPersonalesScreen();

class MiNegocioScreen {
  get nombreOption() {
    return $("//*[contains(@text,'"+global.ADMIN_BUSINESS_NAME+"')]");
  }
  get rncOption() {
    return $("//*[contains(@text,'"+global.NO_LOCATIONS_CEDULA+"')]");
  }
  get sectorIndustrial() {
    return $("//*[contains(@text,'-')]");
  }
}
export default new MiNegocioScreen();

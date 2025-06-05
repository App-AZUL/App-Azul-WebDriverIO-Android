class MiNegocioScreen {
  get nombreOption() {
    return $("//*[contains(@text,'"+global.ADMIN_CLIENT_NAME+"')]");
  }
  get rncOption() {
    return $("//*[contains(@text,'"+global.ADMIN_RNC+"')]");
  }
  get sectorIndustrial() {
    return $("//*[contains(@text,'-')]");
  }
}
export default new MiNegocioScreen();

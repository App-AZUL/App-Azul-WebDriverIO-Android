class MiNegocioScreen {
  get nombreOption() {
    return $("//*[contains(@text,'Grupo Popular Dominicano')]");
  }
  get rncOption() {
    return $("//*[contains(@text,'12345678901')]");
  }
  get sectorIndustrial() {
    return $("//*[contains(@text,'-')]");
  }
}
export default new MiNegocioScreen();

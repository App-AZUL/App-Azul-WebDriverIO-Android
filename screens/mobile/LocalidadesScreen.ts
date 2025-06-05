class LocalidadesScreen {
  get serviciosDigitalesUnit() {
    return $("//*[contains(@text,'Servicios Digitales')]");
  }
  get affiliatedLocation() {
    return $("//*[contains(@text,'AFFILIATED AUTO RENTAL')]");
  }
  get bancoPopularUnit() {
    return $("//*[contains(@text,'BANCO POPULAR DOMINICANO, S A')]");
  }
  get academiaLocation() {
    return $("//*[contains(@text,'ACADEMIA DIGITAL DE ED')]");
  }
}
export default new LocalidadesScreen();
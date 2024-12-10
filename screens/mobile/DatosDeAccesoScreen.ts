class DatosDeAccesoScreen {
  get ultimoAccesoOption() {
    return $("//*[contains(@text,'SecondaryUser')]");
  }
  get contrasenaOption() {
    return $("//*[contains(@text,'***')]");
  }
}
export default new DatosDeAccesoScreen();

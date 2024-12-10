class MiPerfilScreen {
  get screenTitle() {
    return $("//*[contains(@text,'Mi perfil')]");
  }
  get misInformacionesOption() {
    return $("//*[contains(@text,'Mis informaciones')]");
  }
  get datosDeAccesoOption() {
    return $("//*[contains(@text,'Datos de acceso')]");
  }
  get miNegocioOption() {
    return $("//*[contains(@text,'Mi negocio')]");
  }
  get localidadesOption() {
    return $("//*[contains(@text,'Localidades')]");
  }
}

export default new MiPerfilScreen();

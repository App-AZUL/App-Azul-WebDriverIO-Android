class MiPerfilScreen {
  get screenTitle() {
    return $("//*[contains(@text,'Mi perfil')]");
  }
  get clientNameText() {
    return $("//*[contains(@text,'Grupo Popular Dominicano')]");
  }
  get adminNameText() {
    return $("//*[contains(@text,'"+global.ADMIN_NAME+"')]");
  }
  get datosPersonalesOption() {
    return $("//*[contains(@text,'Datos personales')]");
  }
  get datosDelNegocioOption() {
    return $("//*[contains(@text,'Datos del negocio')]");
  }
  get localidadesOption() {
    return $("//*[contains(@text,'Localidades')]");
  }
  get preferenciasOption() {
    return $("//*[contains(@text,'Preferencias')]");
  }
}

export default new MiPerfilScreen();

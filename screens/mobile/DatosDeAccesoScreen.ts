class DatosDeAccesoScreen {
  get ultimoAccesoOption() {
    return $("//*[contains(@text,'SecondaryUser')]");
  }
  get contrasenaOption() {
    return $("//*[contains(@text,'***')]");
  }
  getDayAndMonthDate() {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let dateConverted = `${day} de ${month} del ${year}`;
    console.log(dateConverted);

    return dateConverted;
  }
}
export default new DatosDeAccesoScreen();

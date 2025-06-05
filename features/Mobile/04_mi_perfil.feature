@run @mobile @MiPerfil @Regression

Feature: Mi perfil

@MiPerfil @Regression @HappyPath
Scenario Outline: Verify proffile menu options

  Given User is on MiPerfil screen with admin user
  When User clicks on proffile circle
  Then User should see his first name & client name
  And User should see option Datos personales
  And User should see option Datos del negocio
  And User should see option Localidades
  And User should see option Preferencias

  @MiPerfil @Regression @HappyPath
  Scenario Outline: Verify Datos personales information

  Given admin user is on Mi perfil screen
  When User clicks on Datos personales option
  Then User should see his username
  And User should see his identification number
  And User should see his date of birth
  And User should see his occupation
  And User should see his telephone number
  And User should see his celphone number
  And User should see his email
  And User should see his role
  And User should stay on Mi perfil screen after pressing back button

  @MiPerfil @Regression @HappyPath
  Scenario Outline: Verify Datos del negocio information

  Given admin user is on Mi perfil screen
  When User clicks on Datos del negocio option
  Then User should see his client name
  And User should see his RNC
  And User should see his Industry Sector
  And User should stay on Mi perfil screen after pressing back button

  @MiPerfil @Regression @HappyPath
  Scenario Outline: Verify Localidades information

  Given admin user is on Mi perfil screen
  When User clicks on Localidades option
  Then User should see Affiliated Auto rental location inside Servicios Digitales unit
  And User should see ACADEMIA DIGITAL DE ED location inside Servicios Digitales unit
  And User should stay on Mi perfil screen after pressing back button

  @MiPerfil @Regression @HappyPath
  Scenario Outline: Verify Preferencias options

  Given admin user is on Mi perfil screen
  When User clicks on Preferencias option
  Then User should see option Permitir notificaciones
  And User should see option Transacciones Link de Pagos
  And User should see option Transacciones Codigo QR
  And User should see option Nueva afiliacion Link de Pagos
  And User should see option Nueva afiliacion Tap
  And User should see option Solicitudes cerradas
  And User should be on MiPerfil screen after pressing back button
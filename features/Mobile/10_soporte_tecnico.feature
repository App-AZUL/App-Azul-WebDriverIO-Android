#@run @mobile @Login @Regression
#
#Feature: Soporte tecnico
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify available request to submit
#
#Given User is on Dashboard screen with admin user
#When User clicks on Solicitudes button
#Then User should see Historial de solicitudes button
#And User should see Soporte tecnico button
#And User should see Obtener AVANCE button
#And User should see Rollos de voucher button
#And User should see Ajustes y devoluciones button
#And User should see Actualizar datos button
#And User should see Reclamaciones button
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Falla de energia
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Falla de energia option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Cierre incorrecto
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Cierre incorrecto option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Error de lote
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Error de lote option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Equipo tamper
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Equipo tamper option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Error iniciando tarea programada
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Error iniciando tarea programada option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Error de conexion
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Error de conexion option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Error de impresion
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Error de impresion option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Touch no funciona
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Touch no funciona option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Bateria en equipo
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Bateria en equipo option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Teclado no funciona
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Teclado no funciona option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#@Login @Regression @HappyPath
#Scenario Outline: Verify user can submit Soporte tecnico with type Tapa de impresion rota
#
#Given User is in Solicitudes screen
#When User clicks on Solicitudes button
#And User clicks on Soporte tecnico button
#And User clicks on Tapa de impresion rota option
#And User verifies the tooltip text is correct
#And User selects the TID if needed
#And User selects an schedule with all days
#And User takes a picture of the error
#And User fills the Contact person
#And User fills the Contact phone number
#And User fills the Comment
#And User presses Reportar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
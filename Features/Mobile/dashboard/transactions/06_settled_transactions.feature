@run @mobile @Login @Regression

Feature: Settled Transactions

@Login @Regression @HappyPath
Scenario Outline: Verify Settled Transactions are not visible

  Given User is on Dashboard screen
  When User clicks on Historial de Transacciones button
  And User clicks on Transacciones Liquidadas
  Then User should not see any transaction

@Login @Regression @HappyPath
Scenario Outline: Verify user can query Settled Transactions

  Given User is on Settled Transaction screen
  When User selects Affiliated Auto Rental location
  And User sets date to january 2022
  Then User should see at least one transaction

  @Login @Regression @HappyPath
Scenario Outline: Verify Settled Transactions Details

  Given User can see at least one transaction
  When User clicks three dots button of a transaction
  Then the transaction info should match
  When User clicks on chevron details button
  Then the transaction details should match

@Login @Regression @HappyPath
Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion fraudulenta

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
Then the transaction details should match
  And User clicks on Motivo de la devolucion field
  And User selects Transaccion fraudulenta option
  Then the Solicitar a AZUL button should be enabled
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@Login @Regression @HappyPath
Scenario Outline: Verify User can submit a Settled Transaction refund for Monto Incorrecto

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
Then the transaction details should match
  And User clicks on Motivo de la devolucion field
  And User selects Monto Incorrecto option
  Then the Solicitar a AZUL button should be enabled
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@Login @Regression @HappyPath
Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion Duplicada

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
Then the transaction details should match
  And User clicks on Motivo de la devolucion field
  And User selects Transaccion Duplicada option
  Then the Solicitar a AZUL button should be enabled
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@Login @Regression @HappyPath
Scenario Outline: Verify User can submit a Settled Transaction refund for Pagado por otro medio

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
Then the transaction details should match
  And User clicks on Motivo de la devolucion field
  And User selects Pagado por otro medio option
  Then the Solicitar a AZUL button should be enabled
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@Login @Regression @HappyPath
Scenario Outline: Verify User can submit a Settled Transaction refund for Servicio no recibido

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
Then the transaction details should match
  And User clicks on Motivo de la devolucion field
  And User selects Servicio no recibido option
  Then the Solicitar a AZUL button should be enabled
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen
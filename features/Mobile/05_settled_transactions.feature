@run @mobile @SettledTransactions @Regression

Feature: Settled Transactions

@SettledTransactions @Regression
Scenario Outline: Verify Settled Transactions are not visible

  Given User navigates to Dashboard screen as admin user
  When User clicks on Historial de Transacciones button
  And User clicks on Transacciones Liquidadas
  Then User should not see any transaction

@SettledTransactions @Regression @HappyPath
Scenario Outline: Verify admin user can query Settled Transactions

  Given User navigates to Settle Transaction screen as admin user
  When User selects Affiliated Auto Rental location on settled trx screen
  And User filters trx by date on year two thousand twenty two
  Then User should see at least one transaction

  @SettledTransactions @Regression @HappyPath
Scenario Outline: Verify Settled Transactions Details

  Given User can see at least one transaction
  When User clicks three dots button of a transaction
  Then the transaction info should match
  When User clicks on chevron details button
  Then the transaction details should match

  @SettledTransactions @Regression @HappyPath
Scenario Outline: Verify Settled Transactions No lote search filter

Given User can see at least one transaction
When User clicks three dots button of a transaction
And User clicks on chevron details button
And User search the No.Lote
When User clicks three dots button of a transaction
Then the transaction info should match
And User still in screen after pressing in the middle

  @SettledTransactions @Regression @HappyPath
Scenario Outline: Verify Settled Transactions No aprobacion search filter

Given User can see at least one transaction
When User clicks three dots button of a transaction
And User clicks on chevron details button
And User search the No. de aprobacion
When User clicks three dots button of a transaction
Then the transaction info should match
And User still in screen after pressing in the middle

  @SettledTransactions @Regression @HappyPath
Scenario Outline: Verify Settled Transactions No terminal search filter

Given User can see at least one transaction
When User clicks three dots button of a transaction
And User clicks on chevron details button
And User search the No. de terminal
When User clicks three dots button of a transaction
Then the transaction info should match
And User still in screen after pressing in the middle

  @SettledTransactions @Regression @HappyPath
Scenario Outline: Verify Settled Transactions No Tarjeta search filter

Given User can see at least one transaction
When User clicks three dots button of a transaction
And User clicks on chevron details button
And User search the No. de tarjeta
When User clicks three dots button of a transaction
Then the transaction info should match
And User still in screen after pressing in the middle

@SettledTransactions
Scenario Outline: Verify Amount textfield only allows numbers

  Given User can see at least one transaction
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
  And User tries to set a character that is not a number
  Then User sould see a message asking for the Amount
  And the Amount should be 0
  And User should be in Solicitar devolucion screen

@SettledTransactions
Scenario Outline: Verify can't submit a Settled Transaction refund when Amount is 0

  Given User is on Solicitar devolucion form
  And User types 0 Amount
  Then User sould see a message asking for the Amount
  And the Amount should be 0
  And User should be in Solicitar devolucion screen

@SettledTransactions
Scenario Outline: Verify can submit a Settled Transaction refund when Amount is 0.01

  Given User is on Solicitar devolucion form
  And User types 0.01 Amount
  And User clicks on Motivo de la devolucion field
  And User selects Transaccion fraudulenta option
  And User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@SettledTransactions
Scenario Outline: Verify can't submit a Settled Transaction refund when fields are empty

 Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
  And User clicks Solicitar a AZUL button
  Then User should stay in Solicitar devolucion form

@SettledTransactions
Scenario Outline: Verify can't submit a Settled Transaction refund without filling Motivo textfield

 Given User is on Solicitar devolucion form
  When User types a comment
  And User clicks Solicitar a AZUL button
  Then User should stay in Solicitar devolucion form

@SettledTransactions
Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion fraudulenta

  Given User is on Solicitar devolucion form
  When User clicks on Motivo de la devolucion field
  And User selects Transaccion fraudulenta option
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@SettledTransactions 
Scenario Outline: Verify User can submit a Settled Transaction refund for Monto Incorrecto

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
  And User clicks on Motivo de la devolucion field
  And User selects Monto Incorrecto option
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@SettledTransactions 
Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion Duplicada

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
  And User clicks on Motivo de la devolucion field
  And User selects Transaccion Duplicada option
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@SettledTransactions
Scenario Outline: Verify User can submit a Settled Transaction refund for Pagado por otro medio

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
  And User clicks on Motivo de la devolucion field
  And User selects Pagado por otro medio option
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen

@SettledTransactions
Scenario Outline: Verify User can submit a Settled Transaction refund for Servicio no recibido

  Given User can see at least one transaction after switching the location
  When User clicks three dots button of a transaction
  And User clicks Solicitar devolucion button
  And User clicks on Motivo de la devolucion field
  And User selects Servicio no recibido option
  When User clicks Solicitar a AZUL button
  Then User should be on Request Received screen
  And User should see the correct SLA message
  And User should see the request number
  And User should see the correct MID
  And User should see the correct Location Name
  When User press X button
  Then User should be on Settled Transaction query screen
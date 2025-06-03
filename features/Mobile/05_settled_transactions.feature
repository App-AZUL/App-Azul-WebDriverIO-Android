#@run @mobile @SettledTransactions @Regression
#
#Feature: Settled Transactions
#
#@SettledTransactions @Regression
#Scenario Outline: Verify Settled Transactions are not visible
#
#  Given User is on Dashboard screen with admin user
#  When User clicks on Historial de Transacciones button
#  And User clicks on Transacciones Liquidadas
#  Then User should not see any transaction
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify admin user can query Settled Transactions
#
#  Given User is on Settled Transaction screen
#  When User selects Affiliated Auto Rental location on settled trx screen
#  And User sets date to january 2022
#  Then User should see at least one transaction
#
#  @SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify Settled Transactions Details
#
#  Given User can see at least one transaction
#  When User clicks three dots button of a transaction
#  Then the transaction info should match
#  When User clicks on chevron details button
#  Then the transaction details should match
#
#  @SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify Settled Transactions No lote search filter
#
#Given User can see at least one transaction
#When User clicks three dots button of a transaction
#Then the transaction info should match
#When User clicks on chevron details button
#Then the transaction details should match
#When User search the No.Lote
#And User checks the details
#Then the transaction details should match
#
#  @SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify Settled Transactions No aprobacion search filter
#
#Given User can see at least one transaction
#When User clicks three dots button of a transaction
#Then the transaction info should match
#When User clicks on chevron details button
#Then the transaction details should match
#When User search the No.aprobacion
#And User checks the details
#Then the transaction details should match
#
#  @SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify Settled Transactions No terminal search filter
#
#Given User can see at least one transaction
#When User clicks three dots button of a transaction
#Then the transaction info should match
#When User clicks on chevron details button
#Then the transaction details should match
#When User search the No.terminal
#And User checks the details
#Then the transaction details should match
#
#  @SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify Settled Transactions No Tarjeta search filter
#
#Given User can see at least one transaction
#When User clicks three dots button of a transaction
#Then the transaction info should match
#When User clicks on chevron details button
#Then the transaction details should match
#When User search the No.Tarjeta
#And User checks the details
#Then the transaction details should match
#
#@SettledTransactions @Regression
#Scenario Outline: Verify Amount textfield only allows numbers
#
#  Given User can see at least one transaction
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#  And User tries to set a character that is not a number
#  Then User sould see a message asking for the Amount
#  And the Amount should be 0
#  And User should be in Solicitar devolucion screen
#
#@SettledTransactions @Regression
#Scenario Outline: Verify can't submit a Settled Transaction refund when Amount is 0
#
#  Given User can see at least one transaction
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#  And User types 0 Amount
#  Then User sould see a message asking for the Amount
#  And the Amount should be 0
#  And User should be in Solicitar devolucion screen
#
#@SettledTransactions @Regression
#Scenario Outline: Verify can submit a Settled Transaction refund when Amount is 0.01
#
#  Given User can see at least one transaction
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#  And User types 0.01 Amount
#  And User clicks on Motivo de la devolucion field
#  And User selects Transaccion fraudulenta option
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression
#Scenario Outline: Verify can't submit a Settled Transaction refund when fields are empty
#
# Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#  And User clicks Solicitar a AZUL button
#  Then User should stay in Solicitar devolucion form
#
#@SettledTransactions @Regression
#Scenario Outline: Verify can't submit a Settled Transaction refund without filling Motivo textfield
#
# Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User types a comment
#  And User clicks Solicitar devolucion button
#  And User clicks Solicitar a AZUL button
#  Then User should stay in Solicitar devolucion form
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion fraudulenta
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Transaccion fraudulenta option
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Monto Incorrecto
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Monto Incorrecto option
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion Duplicada
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Transaccion Duplicada option
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Pagado por otro medio
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Pagado por otro medio option
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Servicio no recibido
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Servicio no recibido option
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion fraudulenta with comment
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Transaccion fraudulenta option
#  And User types a comment
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Monto Incorrecto with comment
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Monto Incorrecto option
#  And User types a comment
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Transaccion Duplicada with comment
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Transaccion Duplicada option
#  And User types a comment
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Pagado por otro medio with comment
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Pagado por otro medio option
#  And User types a comment
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression @HappyPath
#Scenario Outline: Verify User can submit a Settled Transaction refund for Servicio no recibido with comment
#
#  Given User can see at least one transaction after switching the location
#  When User clicks three dots button of a transaction
#  And User clicks Solicitar devolucion button
#Then the transaction details should match
#  And User clicks on Motivo de la devolucion field
#  And User selects Servicio no recibido option
#  And User types a comment
#  Then the Solicitar a AZUL button should be enabled
#  When User clicks Solicitar a AZUL button
#  Then User should be on Request Received screen
#  And User should see the correct SLA message
#  And User should see the request number
#  And User should see the correct MID
#  And User should see the correct Location Name
#  When User press X button
#  Then User should be on Settled Transaction query screen
#
#@SettledTransactions @Regression
#Scenario Outline: Verify user without location can't consult any transaction
#
#  Given User without locations is on Dashboard screen
#  When User clicks on Historial de Transacciones button
#  Then User should see a message saying that the proffile doesnt have access
#And User should stay in Dashboard screen after dismissing the message
#
#@SettledTransactions @Regression
#Scenario Outline: Verify User without permission cant go to Settled Transaction Query screen
#
#  Given User without permissions is on Dashboard screen
#  When User clicks on Historial de Transacciones button
#  And User clicks on Transacciones Liquidadas
#  Then User should see a message saying that the proffile doesnt have access
#And User should stay in Dashboard screen after dismissing the message
#
#@SettledTransactions @Regression
#Scenario Outline: Verify User without permission cant go to QR Transaction Query screen
#
#  Given User without permissions is on Dashboard screen
#  When User clicks on Historial de Transacciones button
#  And User clicks on Transacciones QR
#  Then User should see a message saying that the proffile doesnt have QR Product
#And User should stay in Dashboard screen after dismissing the QR message
@run @mobile @Login @Regression

Feature: QR Transactions

@Login @Regression @HappyPath
Scenario Outline: Verify Settled Transactions are not visible

  Given User is on Dashboard screen
  When User clicks on Historial de Transacciones button
  And User clicks on Transacciones QR
  Then User should not see any transaction

@Login @Regression @HappyPath
Scenario Outline: Verify QR Transactions Monto search filter

Given User can see at least one qr transaction
When User search the ammount
Then the transactions should match the ammount

@Login @Regression @HappyPath
Scenario Outline: Verify QR Transactions No referencia search filter

Given User can see at least one qr transaction
When User search the No. referencia
Then the transactions should match the No referencia
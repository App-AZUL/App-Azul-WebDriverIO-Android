@mobile @@QrTransactions @Regression

Feature: QR Transactions

@mobile @@QrTransactions @Regression @HappyPath
Scenario Outline: Verify Settled Transactions are not visible

  Given User navigates to Dashboard screen as admin user
  When User clicks on Historial de Transacciones button
  And User clicks on Transacciones QR
  Then User should not see any QR transaction

@mobile @@QrTransactions @Regression @HappyPath
Scenario Outline: Verify admin user can query QR Transactions

  Given User navigates to QR Transactions screen as admin user
  And User sets date to year twenty twenty
  Then User should see at least one QR transaction

@mobile @@QrTransactions @Regression @HappyPath 
Scenario Outline: Verify QR Transactions Monto search filter

Given User can see at least one qr transaction
When User search the Amount
Then the transactions should match the Amount
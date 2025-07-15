@run @mobile @PaymentLink @Regression

Feature: Payment Link
        #AKA PL

@PaymentLink @Regression @HappyPath
Scenario Outline: Verify PL Transactions Monto search filter

Given User is on PL Transaction Query screen
When And User filters PL trx by date on year two thousand twenty two
And User search the PL trx Amount
Then the PL transactions should match the Amount

@PaymentLink @Regression @HappyPath
Scenario Outline: Verify PL Transactions Link ID search filter

Given User can see at least one PL transaction
When User search the Link ID
Then the PL transaction should match the Link ID

@PaymentLink @Regression @HappyPath
Scenario Outline: Verify PL Transactions details

Given User can see at least one PL transaction
And User captured all the first trx details
When clicks on a transaction three dots
And User clicks the details
Then the transaction Amount should match
And the transaction Type should match
And the transaction Status should match
And the transaction Link ID should match
And the transaction Date should match
And the transaction Locality should match
And if user goes back to the PL transactions screen
Then User should be on the PL transactions screen

@PaymentLink @Regression @HappyPath
Scenario Outline: Verify PL calculator Amount limit

Given User is on PL Transaction Query screen
When User clicks the Crear shortcut
And User presses ten times a random number
Then the app should show a message saying Limit Amount exceed

@PaymentLink @Regression @HappyPath
Scenario Outline: Verify user can create a Payment Link

Given User is on PL calculator screen
When User sets an Amount bitween 0.01 and 9999999.99
And User clicks on Continuar button
Then User should see a form with the PL details
When User clicks on Confirmar
Then User should see a confirmation screen with all the details
And all the information match
When User slide to generate the PL
Then the PL has been generated succesfuly
And the Amount is the expected
And User can copy the PL
And User can share the PL
And User can go back by pressing X button

@run @mobile @Login @Regression

Feature: Payment Link

@Login @Regression @HappyPath
Scenario Outline: Verify PL Transactions Monto search filter

Given User can see at least one PL transaction
When User search the ammount
Then the transactions should match the ammount

@Login @Regression @HappyPath
Scenario Outline: Verify PL Transactions Link ID search filter

Given User can see at least one qr transaction
When User search the Link ID
Then the transactions should match the No referencia

@Login @Regression @HappyPath
Scenario Outline: Verify PL Transactions details

Given User can see at least one qr transaction
When clicks on a transaction three dots
And User clicks the details
Then the transaction Ammount should match
And the transaction Type should match
And the transaction Status should match
And the transaction Link ID should match
And the transaction Date should match
And the transaction Locality should match

@Login @Regression @HappyPath
Scenario Outline: Verify PL calculator ammount limit

Given User is on PL Transaction Query screen
When User clicks the Crear shortcut
And User presses 10 times a random number
Then the app should show a message saying Limit ammount exceed

@Login @Regression @HappyPath
Scenario Outline: Verify PL calculator ammount limit

Given User is on PL Transaction Query screen
When User clicks the Crear shortcut
And User presses 10 times a random number
Then the app should show a message saying Limit ammount exceed

@Login @Regression @HappyPath
Scenario Outline: Verify PL location filter

Given User is on PL calculator screen
When User clicks on location filter
Then User should see the allowed Call Center locations

@Login @Regression @HappyPath
Scenario Outline: Verify user can create a Payment Link

Given User is on PL calculator screen
When User sets an ammount bitween 0.01 and 9999999.99
Then User should see a form with the PL details
When User clicks on Confirmar
Then User should see a confitmation screen with all the details
And all the information match
When User slide to generate the PL
Then the PL ahs been generated succesfuly
And the ammount is the expected
And User can copy the PL
And User can share the PL
And User can go back by pressing X button

Feature: Login

Scenario Outline: Verify Onboarding screen

Given User started the app by first time
When User checks the elements in the screen matches with the provided design
Then User can continue to New Access Screen



Scenario Outline: Verify New Access screen

Given User is on the New Access Screen
When User press on Afiliarme
Then User should be on the Affiliation Requirements Screen
When User press back
  And User press Ya soy cliente
Then User should be on Login Screen
    And User should see all required elements



Scenario Outline: Verify Reset Password

Given User is on Login screen
When User clicks Rest password button
Then User should be redirected to AZUL reset password portal



Scenario Outline: Login only with invalid password

Given Went back to Login screen
When User types an invalid password on password textfield
  And User leaves username textfield empty
  And User clicks on Iniciar sesión button
Then User should see a message asking for typing the username
  And User can't login



Scenario Outline: Login only with invalid user

Given Went back to Login screen
When User types an invalid username on username textfield
  And User leaves password textfield empty
  And User clicks on Iniciar sesión button
Then User should see a message asking for typing the password
  And User can't login



Scenario Outline: Login only with valid password

Given Went back to Login screen
When User types a valid password on password textfield
  And User leaves username textfield empty
  And User clicks on Iniciar sesión button
Then User should see a message asking for typing the username
  And User can't login



Scenario Outline: Login only with valid user

Given Went back to Login screen
When User types a valid username on username textfield
  And User leaves password textfield empty
  And User clicks on Iniciar sesión button
Then User should see a message asking for typing the password
  And User can't login



Scenario Outline: Login with invalid user and valid password

Given Went back to Login screen
When User types an invalid username on username textfield
  And User types a valid password on password textfield
  And User clicks on Iniciar sesión button
Then User should see a message saying incorrect credentials
  And User can't login



Scenario Outline: Login with valid user and invalid password

Given Went back to Login screen
When User types a valid username on username textfield
  And User types an invalid password on password textfield
  And User clicks on Iniciar sesión button
Then User should see a message saying incorrect credentials
  And User can't login



Scenario Outline: Login empty credentials

Given User is on Login screen
When User clicks on Iniciar sesión button
Then User should see a message asking for credentials



Scenario Outline: Login invalid credentials

Given Went back to Login screen
When User types an invalid username on username textfield
  And User types an invalid password on password textfield
  And User clicks on Iniciar sesión button
Then User should see a message saying incorrect credentials
  And User can't login



Scenario Outline: Login with valid credentials

Given Went back to Login screen
When User types a valid username on username textfield
  And User types a valid password on password textfield
  And User clicks on Iniciar sesión button
Then User should see a message saying incorrect credentials
  And User should be redirected to PIN Configuration screen
@run @mobile @Login @Regression
Feature: Login 

@Login @Regression @HappyPath
Scenario Outline: Verify Onboarding screen

  Given User started the app by first time
  When User checks the elements in the screen matches with the provided design
  Then User can continue to New Access Screen


@Login @Regression @HappyPath
Scenario Outline: Verify New Access screen

  Given User is on the New Access Screen
  When User press on Afiliarme
  Then User should be on the Affiliation Requirements Screen
  When User press back
    And User press Ya soy cliente
  Then User should be on Login Screen


@Login @Regression @HappyPath
Scenario Outline: Verify Reset Password

  Given User is on Login screen
  When User clicks Reset password button
  Then User should be redirected to AZUL reset password portal
    And User should be able to go back to login screen


@Login @Regression
Scenario Outline: Login only with invalid password

  Given User is on Login screen
  When User only types an invalid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message asking for typing the username
    And after dismissing the message User still being on login screen
    And User cleared password textfield


@Login @Regression
Scenario Outline: Login only with invalid user

  Given User is on Login screen
  When User only types an invalid username on username textfield
    And User clicks on Iniciar sesión button
  Then User should see a message asking for typing the password
    And after dismissing the message User still being on login screen
    And User cleared username textfield


@Login @Regression
Scenario Outline: Login only with valid password

  Given User is on Login screen
  When User only types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message asking for typing the username
    And after dismissing the message User still being on login screen
    And User cleared password textfield


@Login @Regression
Scenario Outline: Login only with valid username

  Given User is on Login screen
  When User only types a valid username on username textfield
     And User clicks on Iniciar sesión button
  Then User should see a message asking for typing the password
    And after dismissing the message User still being on login screen
    And User cleared username textfield

@Login @Regression
Scenario Outline: Login with invalid user and valid password

  Given User is on Login screen
  When User types an invalid username on username textfield
    And User types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying incorrect credentials
    And after dismissing the message User still being on login screen

@Login @Regression
Scenario Outline: Login with valid user and invalid password

  Given User is on Login screen
  When User types a valid username on username textfield
    And User types an invalid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying incorrect credentials
    And after dismissing the message User still being on login screen


@Login @Regression
Scenario Outline: Login empty credentials

  Given User is on Login screen
  When User clicks on Iniciar sesión button
  Then User should see a message asking for credentials
  And after dismissing the message User still being on login screen


@Login @Regression
Scenario Outline: Login invalid credentials

  Given User is on Login screen
  When User types an invalid username on username textfield
    And User types an invalid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying incorrect credentials
    And after dismissing the message User still being on login screen

@Login @Regression
Scenario Outline: Login credentials with status Nuevo

  Given User is on Login screen
  When User types an username with status nuevo on username textfield
    And User types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying to setup credentials
    And after dismissing the message User still being on login screen

@Login @Regression
Scenario Outline: Login credentials with status Nuevo Expirado

  Given User is on Login screen
  When User types an username with status nuevo expirado on username textfield
    And User types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying temporal access expired
    And after dismissing the message User still being on login screen

@Login @Regression
Scenario Outline: Login credentials with status Bloqueado

  Given User is on Login screen
  When User types an username with status Bloqueado on username textfield
    And User types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying temporal access expired
    And after dismissing the message User still being on login screen

@Login @Regression
Scenario Outline: Login credentials with status Deshabilitado

  Given User is on Login screen
  When User types an username with status Deshabilitado on username textfield
    And User types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying temporal access expired
    And after dismissing the message User still being on login screen

@Login @Regression
Scenario Outline: Login credentials with status En Investigacion

  Given User is on Login screen
  When User types an username with status En Investigacion on username textfield
    And User types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should see a message saying temporal access expired
    And after dismissing the message User still being on login screen


@Login @Regression @HappyPath
Scenario Outline: Login with valid credentials

  Given User is on Login screen
  When User types a valid username on username textfield
    And User types a valid password on password textfield
    And User clicks on Iniciar sesión button
  Then User should be redirected to PIN Configuration screen
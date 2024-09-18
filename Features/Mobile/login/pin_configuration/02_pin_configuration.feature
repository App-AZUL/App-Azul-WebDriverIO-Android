Feature: PIN Configuration 

Scenario Outline: Verify User can't login using Wrong PIN Configuration

Given User is at PIN Configuration
When User types PIN 9835
And User confirms PIN 7841
Then User should see Incorrect PIN Message
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify User can't login using repeated PIN Digits Configuration

Given User is at PIN Configuration
When User types PIN 1111
And User confirms PIN 1111
Then User should see repeated PIN digits Message
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify User can't login using Sequential digits PIN Configuration

Given User is at PIN Configuration
When User types PIN 1234
And User confirms PIN 1234
Then User should see Sequential PIN Message
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify User can't login using Equal PIN Configuration

Given User is at PIN Configuration
When User set PIN 2497
  And User logged in succesfully
  And User logged out
  And User types a valid username on username textfield
  And User types a valid password on password textfield
  And User clicks on Iniciar sesión button
  And User types PIN 2497
  And User confirms PIN 2497
Then User should see Equal PIN Configuration message for pin 1496


Scenario Outline: Verify 24 hours PIN Configuration message
Given User started the app by first time
  And User navigates to login screen from Onboarding Screen
When User logs in with admin credential
  And User set PIN 1498
  And User logged in succesfully
  And User logged out
When User logs in with admin credential
  And User types PIN 1498
  And User confirms PIN 1498
Then User should see message PIN Configuration only is allowed every 24 hours
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify user can login using valid PIN Configuration
Given User is at PIN Configuration
When User set PIN 1496
Then User should be logged-in succesfully
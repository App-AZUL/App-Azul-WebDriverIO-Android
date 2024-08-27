Feature: PIN Configuration 

Scenario Outline: Verify User can't login using Wrong PIN Configuration

Given User is at PIN Configuration
When User types PIN 9835
And User confirms PIN 7841
Then User should see Incorrect PIN Message
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify User can't login using sequential PIN Configuration

Given User is at PIN Configuration
When User types PIN 1234
And User confirms PIN 1234
Then User should see Sequential PIN Message
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify User can't login using repeated digits PIN Configuration

Given User is at PIN Configuration
When User types PIN 1111
And User confirms PIN 1111
Then User should see Sequential PIN Message
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify User can't login using Reverse PIN Configuration

Given User is at PIN Configuration
When User types PIN 9966
And User confirms PIN 6699
Then User should see Incorrect PIN Message
  And User should stay in PIN Configuration screen after dismissing the message


Scenario Outline: Verify User can't login using Equal PIN Configuration

Given User is at PIN Configuration
When User types PIN 1496
  And User confirms PIN 1496
  And User logged in succesfully
  And User logged out
  And User types PIN 1496
  And User confirms PIN 1496
Then User should see Equal PIN Configuration mesage


Scenario Outline: Verify 24 hours PIN Configuration message
Given User is at PIN Configuration
When User types PIN 1496
  And User confirms PIN 1496
  And User logged in succesfully
  And User logged out
  And User types PIN 1496
  And User confirms PIN 1496
Then User should see Equal PIN Configuration mesage


Scenario Outline: Verify user can login using valid PIN Configuration
Given User is at PIN Configuration
When User types PIN 1496
  And User confirms PIN 1496
Then User should be logged-in succesfully
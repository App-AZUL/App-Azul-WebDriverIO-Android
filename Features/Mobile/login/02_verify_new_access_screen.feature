Feature: New Access Screen

Scenario: Verify New Access Screen

Given User is on the New Access Screen
When User press on Afiliarme
Then User should be on the Affiliation Requirements Screen
When User press back
    And User press Ya soy cliente
Then User should be on Login Screen
@run @mobile @Login @Regression

Feature: Ajustes y devoluciones

@Login @Regression @HappyPath
Scenario Outline: Verify User is redirected from Solicitudes to Transacciones Liquidadas

Given User is on Solicitudes screen
When User clicks on Ajustes y devoluciones button
And User press on Ir a Transacciones liquidadas button
Then User should be in Transacciones liquidadas
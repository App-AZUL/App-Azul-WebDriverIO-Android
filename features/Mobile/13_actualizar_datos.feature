#@run @mobile @Login @Regression
#
#Feature: Actualizar datos
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can't submit a data update
#
#Given User is on Solicitudes screen
#When User clicks on Actualizar datos button
#And User press on Actualizar datos button
#Then User should stay in Actualizar datos screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can submit a data update by changing nombre comercial
#
#Given User is on Solicitudes screen
#When User clicks on Actualizar datos button
#And User deletes a letter from Nombre comercial textfield value
#And User press on Actualizar datos button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can submit a data update by changing correo electronico comercio
#
#Given User is on Solicitudes screen
#When User clicks on Actualizar datos button
#And User deletes a letter from correo electronico comercio textfield value
#And User press on Actualizar datos button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can submit a data update by changing correo electronico personal
#
#Given User is on Solicitudes screen
#When User clicks on Actualizar datos button
#And User deletes a letter from correo electronico personal textfield value
#And User press on Actualizar datos button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can submit a data update by changing telefono del comercio
#
#Given User is on Solicitudes screen
#When User clicks on Actualizar datos button
#And User deletes a letter from telefono del comercio textfield value
#And User press on Actualizar datos button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
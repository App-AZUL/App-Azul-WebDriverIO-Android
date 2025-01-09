#@run @mobile @Login @Regression
#
#Feature: Solicitud de rollos de papel
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can submit paper rolls requests with one locality
#
#Given User is on Solicitudes screen
#When User clicks on Rollos de voucher button
#And User fills an schedule with all days
#And User fills the Contact person name
#And User fills the Contact phone number
#And User fills the Comment
#And User scrolls down to Solicitar button
#And User preses Solicitar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can submit paper rolls requests with two localities
#
#Given User is on Solicitudes screen
#When User clicks on Rollos de voucher button
#And User selects two locations
#And User fills an schedule with all days
#And User fills the Contact person name
#And User fills the Contact phone number
#And User fills the Comment
#And User scrolls down to Solicitar button
#And User preses Solicitar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify User can submit paper rolls requests with three localities
#
#Given User is on Solicitudes screen
#When User clicks on Rollos de voucher button
#And User selects three locations
#And User fills an schedule with all days
#And User fills the Contact person name
#And User fills the Contact phone number
#And User fills the Comment
#And User scrolls down to Solicitar button
#And User preses Solicitar a AZUL button
#Then User should be on Request Received screen
#And User should see the correct SLA message
#And User should see the request number
#And User should see the correct MID
#And User should see the correct Location Name
#When User press X button
#Then User should be on Solicitudes screen
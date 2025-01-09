#@run @mobile @Login @Regression
#
#Feature: QR Code
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify QR code is visible
#
#  Given User is on QR Code screen
#  Then User should see the QR code
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify QR code can be downloaded
#
#  Given User is on QR Code screen
#  When User clicks on Descargar button
#  Then a download message should be visible
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify QR code can be shared
#
#  Given User is on QR Code screen
#  When User clicks on Descargar button
#  Then the share menu should be visible
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify QR code sales of the day can be shared
#
#  Given User is on QR Code screen
#  When User slides to left
#  Then the current day and month should be visible
#  And a text saying No existen transacciones should be visible
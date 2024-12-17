@run @mobile @Dashboard @Regression

Feature: Dashboard

@Dashboard @Regression @HappyPath
Scenario Outline: Verify Identity Banner shows correct information

  Given User is on Dashboard screen with user miguelcasey
  Then User should see a greeting
  And User should see the Commercial Group Name
  And user should see the current date

@Dashboard @Regression @HappyPath
Scenario Outline: Verify burger menu options

  Given User is on Dashboard screen with user miguelcasey
  When User clicks on burger menu
  Then User should see option Mi perfl
  And User should see option Preferencias
  And User should see option Salir
  And User should see the App Version
  And User should see the text Servicios Digitales Popular, S.A.
  And after closing the menu the user should stay in dashboard screen

@Dashboard @Regression
Scenario Outline: Verify Avance Offer is not visible when is declined

  Given User is on Dashboard screen with user miguelcasey with user miguelcasey
  When User selects Affiliated Auto Rental location
  Then User should not see Avance message

@Dashboard @Regression @HappyPath
Scenario Outline: Verify Avance Offer is visible when user has offer without Amount

  Given User is on Dashboard screen with user miguelcasey with user miguelcasey
  When User selects Altice location
  Then User should see Avance message
##@Dashboard @Regression @HappyPath
##Scenario Outline: Verify Avance Offer is visible when user has offer with Amount
##
##  Given User is on Dashboard screen with user miguelcasey with user miguelcasey
##  When User selects Affiliated Auto Rental location
##  Then User should not see Avance message
@Dashboard @Regression @HappyPath
Scenario Outline: Verify user without location can access dashboard

  Given User started the app by first time
  When an User without locations logs in
  Then User should be on Dashboard screen
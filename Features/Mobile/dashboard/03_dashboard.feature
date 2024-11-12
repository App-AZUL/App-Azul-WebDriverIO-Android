@run @mobile @Login @Regression

Feature: Dashboard

@Login @Regression @HappyPath
Scenario Outline: Verify Identity Banner shows correct information

  Given User is on Dashboard screen
  Then User should see a greeting
  And User should see the Commercial Group Name
  And user should see the current date

@Login @Regression @HappyPath
Scenario Outline: Verify burguer menu options

  Given User is on Dashboard screen
  When User clicks on burguer menu
  Then User should see option Mi perfl
  And User should see option Preferencias
  And User should see option Salir
  And User should see the App Version
  And User should see the text Servicios Digitales Popular, S.A.

@Login @Regression @HappyPath
Scenario Outline: Verify Avance Offer is not visible when is declined

  Given User is on Dashboard screen with user miguelcasey
  When User selects Affiliated Auto Rental location
  Then User should not see Avance message

@Login @Regression @HappyPath
Scenario Outline: Verify Avance Offer is visible when user has offer without ammount

  Given User is on Dashboard screen with user miguelcasey
  When User selects Affiliated Auto Rental location
  Then User should not see Avance message

  @Login @Regression @HappyPath
Scenario Outline: Verify Avance Offer is visible when user has offer with ammount

  Given User is on Dashboard screen with user miguelcasey
  When User selects Affiliated Auto Rental location
  Then User should not see Avance message



@Login @Regression @HappyPath
Scenario Outline: Verify user without location can access dashboard

  Given User started the app by first time
  When an User without locations logs in
  Then User should be on Dashboard screen
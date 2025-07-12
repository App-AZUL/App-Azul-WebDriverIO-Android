@run @mobile @Dashboard @Regression

Feature: Dashboard

@Dashboard @Regression @HappyPath @compai
Scenario Outline: Verify Identity Banner shows correct information

  Given User navigates to Dashboard screen as admin user
  Then User should see a greeting
  And User should see the Commercial Group Name
  And user should see the current date

Scenario Outline: Verify Avance Offer is visible when user has offer with Amount

  Given User navigates to Dashboard screen as admin user
  When User selects Affiliated Auto Rental location
  Then User should see Avance offer message with amount
  And User should see the correct amount offer

#@Dashboard @Regression
#Scenario Outline: Verify Avance Offer is not visible when is declined
#
#  Given User navigates to Dashboard screen as admin user
#  When User selects Bravo-lab location
#  Then User should not see any Avance message

#@Dashboard @Regression @HappyPath
#Scenario Outline: Verify Avance Offer is visible when user has offer without Amount
#
#  Given User navigates to Dashboard screen as admin user
#  When User selects CASAAZUL location
#  Then User should see Request Avance offer message

#@Dashboard @Regression @HappyPath
#Scenario Outline: Verify Avance Offer message is visible when user doesn't have any offer
#
#  Given User navigates to Dashboard screen as admin user
#  When User selects Banco Popular Dominicano location
#  Then User should see Request Avance offer message

@Dashboard @Regression @HappyPath
Scenario Outline: Verify user without location can access dashboard

  When an User without locations logs in
  Then User should be on Dashboard screen
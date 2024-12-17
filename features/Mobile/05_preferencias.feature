#@run @mobile @Login @Regression
#
#Feature: Mi perfil
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify all notifications are turned off
#
#Given User is on Preferencias screen
#When User clicks on Permitir Notificaciones switch
#Then all notifications should be disabled
#And all notifications should be enabled if User clicks again on Permitir Notificaciones switch
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify payment link notifications are turned off
#
#Given User is on Preferencias screen
#When User clicks on Notificaciones Link de Pagos switch
#Then payment link notifications should be disabled
#And PL notifications should be enabled if User clicks again on PL switch
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify QR notifications are turned off
#
#Given User is on Preferencias screen
#When User clicks on Notificaciones Codigo QR switch
#Then Codigo QR notifications should be disabled
#And Codigo QR notifications should be enabled if User clicks again on QR switch
#
#@Login @Regression @HappyPath
#Scenario Outline: Verify Tap notifications are turned off
#
#Given User is on Preferencias screen
#When User clicks on Notificaciones Codigo QR switch
#Then Codigo Tap notifications should be disabled
#And Codigo Tap notifications should be enabled if User clicks again on Tap switch
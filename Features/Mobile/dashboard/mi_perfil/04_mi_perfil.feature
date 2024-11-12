@run @mobile @Login @Regression

Feature: Mi perfil

@Login @Regression @HappyPath
Scenario Outline: Verify information on Mis Informaciones

Given User is on Mi perfil screen
When User clicks on Mis Informaciones
Then User should see his username
And User should see his name
And User should see his ident. number
And User should see his DOB
And User should see his occupation
And User should see his phone number
And User should see his email
And User should see his role

@Login @Regression @HappyPath
Scenario Outline: Verify information on Datos de acceso

Given User is on Mi perfil screen
When User clicks on Datos de acceso
Then User should see the current date on Ultimo Acceso field
And User should see asterisks in the password field

@Login @Regression @HappyPath
Scenario Outline: Verify information on Mi negocio

Given User is on Mi perfil screen
When User clicks on Mi negocio
Then User should see his Commercial Group name
And User should see his RNC

@Login @Regression @HappyPath
Scenario Outline: Verify information on Localidades

Given User is on Mi perfil screen
When User clicks on Localidades
Then User should see all location groups assigned
And User should see all locations assigned according the group
Feature: Reinvite Inactive Account

    Administrator should be able to reinvite an inactive account using the given reinvite option
    
    Scenario: Should reinvite an inactive account
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the user management tab
         Given Reinvite option should be provided
         When  Click on Reinvite option reinviting the inactive account
Feature: Edit Account

    Administrator should be able to edit their account using the given edit option

    Scenario: Should edit the account before updating them.
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the user management tab
         Given Edit option should be provided
         When  User clicks on Edit option to open the edit mode
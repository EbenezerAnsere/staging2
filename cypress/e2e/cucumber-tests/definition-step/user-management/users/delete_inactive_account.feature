Feature: Delete Inactive Account

     Administrator should delete an Inactive Account using the given delete option.

   Scenario: Should delete an inactive account
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the user management tab
        #  Then  Open User Management
         Given Delete option should be provided
         When  User clicks on delete option removing an inactive account
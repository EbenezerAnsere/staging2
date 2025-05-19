Feature: Invite User

    Administrators should be able to create and invite user through their email.

    Scenario: Should create and invite user using invite user form
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the user management tab
         Then  Open User Management
         Given Invite User Button should be present
         When  Click on Invite User Button to open the invite user form and fill out all fields
        #  Then  The successful message should display
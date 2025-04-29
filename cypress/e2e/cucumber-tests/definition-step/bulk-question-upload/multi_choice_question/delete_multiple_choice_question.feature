Feature: Delete Icon

    Administrators can delete True or False Question format CSV files from both the entire applications.

    Scenario: Should delete multi-choice question format csv file
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Question Management Service should be accessible
         When  The radio button of a multiple choice question should be selected.
           

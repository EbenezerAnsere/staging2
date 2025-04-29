Feature: Delete True Or False Question format CSV file, checking a emply section.

    Administrators can delete True or False Question format CSV files from both the entire applications.

    Scenario: Should delete true or false question format csv file
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Questions should be provided
         When  Click on the delete icon removing the true or false question format csv file from the application.
           

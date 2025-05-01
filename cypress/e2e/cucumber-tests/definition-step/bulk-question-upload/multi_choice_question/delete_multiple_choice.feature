Feature: Show Delete Button - Multiple Choice Question

    Administrator should use the delet button removing one question from the list shown in the table

    Scenario: Should delete the question from the list shown in the table.
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Question Management Service should be accessible
         When  User click the delete icon removing the question from the list shown in the table.
           
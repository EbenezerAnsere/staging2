Feature: Delete a single question from the list shown in the table

    Administrators can deletena single  question from the list

    Scenario: Should delete a sinlge question from the list
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Questions should be provided
         When  Click on the delete button places at the right side
         Then  A single question should be deleted from the list shown in the table.
           
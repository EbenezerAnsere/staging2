Feature:    Edit true or false questions in the table

    Administrators can delete true or false question from the list

    Scenario: Should true or false questions in the table
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Questions should be provided
         When  Click on the delete button places at the right side
         Then  A true or false question should be edit
        
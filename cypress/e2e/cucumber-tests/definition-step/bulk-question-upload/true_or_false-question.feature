Feature: True or False Question

     Administrator can upload true or false question in bulk

     Scenario: Should upload true or false questions in bulk
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Questions should be provided
         When  Select True or False Question
        #  When  Click on the bulk question upload button
        #  Then  The bulk question upload page should be opened
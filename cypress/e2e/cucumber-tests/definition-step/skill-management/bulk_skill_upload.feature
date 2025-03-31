Feature: Upload Bulk Skills

     organization administrator should upload bulk skills

     Scenario: Should create a skill.
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Open the skill management page
         When  Click on the bulk skill upload button

        
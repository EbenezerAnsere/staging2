Feature: Skill Creation

     organization administrator should perform this action.

     Scenario: Should create a skill.
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Open the skill management page
         When  Open the menu
         And   Fill the skill creation form
         Then   Select the assessment type from the list
        
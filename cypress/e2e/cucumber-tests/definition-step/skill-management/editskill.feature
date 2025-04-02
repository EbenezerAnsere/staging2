Feature: Edit Skill

     organization administrator should perform this action.

     Scenario: Should edit skill.
         Given Navigate to the login page
         When  Fill the login form and click on the login button
         Then  The user should be logged in successfully
         When  Click on the test management tab
         Given Open the skill management page
         When  Click menu icon to open the dropdown menu
         And   Replace some information in the skill form

        
        
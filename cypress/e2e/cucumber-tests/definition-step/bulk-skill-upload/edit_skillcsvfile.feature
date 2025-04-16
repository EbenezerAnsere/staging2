Feature: Edit skill csv file

    In order to edit a skill csv file, it should provide a skill csv file with the following columns

    Scenario: Should edit skill csv file
        Given Navigate to the login page
        When  Enter valid credentials
        Then  Open a dashboard
        When  Open test management page using the test management
        Given Open the skill management page using skill management
        When  Edit single skill line

    
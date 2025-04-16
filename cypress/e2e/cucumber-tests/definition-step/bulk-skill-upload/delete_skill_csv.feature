Feature: Delete skill csv file

    administrator should delete skill csv file from the organization

    Scenario: Should delete skill when uploading csv file
        Given Navigate to the login page
        When  Enter valid credentials
        Then  Open a dashboard
        When  Open test management page using the test management
        Given Open the skill management page using skill management
        When  Open the bulk skill upload page using the bulk skill upload button
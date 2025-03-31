Feature: Developer Setting

     Organization administrator should generate API Keys

     Scenario: should generate API Keys
       Given Navigate to the login page
       When  Enter valid credentials
       Then  Open a dashboard
       Given Profile Icon is present
       When  Select Developer Settings
       Then  Verify API Documentation


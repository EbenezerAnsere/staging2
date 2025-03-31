Feature: Organization Settings

    Organization administrator should be able to configure existing Organization before updating them.

    Scenario: Should update existing organization
       Given Navigate to the login page
       When  Enter valid credentials
       Then  Open a dashboard
       Given  Profile Icon is present
       When  Modify existing organization with new information
       Given Select system quesion
       And  Update existing organization
      
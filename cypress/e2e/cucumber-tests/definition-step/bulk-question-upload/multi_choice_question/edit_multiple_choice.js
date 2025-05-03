///<reference types='cypress'/>


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginData from "../../../../../fixtures/example.json";
import Dashboard from "../../../../../PageObject/Dashboard";
import LandingPage from "../../../../../PageObject/LandingPage";
import TestManagementTab from "../../../../../PageObject/testmanagement";
import MultipleChoicePage from "../../../../../PageObject/bulk_question_upload";
import EditMultipleChoice from "../../../../../PageObject/edit_multiple_choice";


const landingpage = new LandingPage();
const dashboard = new Dashboard();
const testmanagement = new TestManagementTab();
const multiplechoicepage = new MultipleChoicePage();
const editmultiplechoice = new EditMultipleChoice();




Given("Navigate to the login page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

When("Fill the login form and click on the login button", () => {
  landingpage.login(loginData.email, loginData.password);
});

Then("The user should be logged in successfully", () => {
  dashboard.dashboard().should("be.visible");
  cy.wait(2000)
});

When("Click on the test management tab", ()=>{
  testmanagement.openTestManagementTab()
})

Given("Question Management Service should be accessible", ()=>{
    multiplechoicepage.AccessQuestionsPage()
})

When("User edits each of questions in the table.", ()=>{
      editmultiplechoice.selectEditMultiChoiceQuestion()
})



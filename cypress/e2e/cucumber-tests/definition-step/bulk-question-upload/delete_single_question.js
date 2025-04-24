///<reference types='cypress'/>


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginData from "../../../../fixtures/example.json";
import Dashboard from "../../../../PageObject/Dashboard";
import LandingPage from "../../../../PageObject/LandingPage";
import TestManagementTab from "../../../../PageObject/testmanagement";
import MultipleChoicePage from "../../../../PageObject/bulk_question_upload";
import DeleteSingleQuestion from "../../../../PageObject/delete_single_question";
import DeleteButtonBulkQuestionUpload from "../../../../PageObject/delete_button_bulk_question";

const landingpage = new LandingPage();
const dashboard = new Dashboard();
const testmanagement = new TestManagementTab();
const multiplechoicepage = new MultipleChoicePage();
const deletesinglequestion = new DeleteSingleQuestion();
const deletebuttonbulkquestionupload = new DeleteButtonBulkQuestionUpload()



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

Given("Questions should be provided", ()=>{
    multiplechoicepage.openQuestionsPage()
})

When("Click on the delete button places at the right side", ()=>{
    deletesinglequestion.deletesingletrueorfalse()
})

Then("A single question should be deleted from the list shown in the table.", ()=>{
    deletebuttonbulkquestionupload.deleteButtonSingleQuestion();
})



///<reference types='cypress'/>


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import loginData from "../../../../fixtures/example.json";
import Dashboard from "../../../../PageObject/Dashboard";
import LandingPage from "../../../../PageObject/LandingPage";
import TestManagementTab from "../../../../PageObject/testmanagement";
import SkillManagement from "../../../../PageObject/skill";
import EditSkill from "../../../../PageObject/edit_skill";
import EditModeSkill from "../../../../PageObject/edimodeskill";
import ReplaceAssessmentAssignment from "../../../../PageObject/Replace_Assessment_Assignment";

import { faker } from "@faker-js/faker"


const landingpage = new LandingPage();
const dashboard = new Dashboard();
const testmanagement = new TestManagementTab();
const skillmanagement = new SkillManagement();
const editskill = new EditSkill();
const edimodeskill = new EditModeSkill();
const replaceassessmentassessment = new ReplaceAssessmentAssignment();





Given("Navigate to the login page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

When("Fill the login form and click on the login button", () => {
  landingpage.login(loginData.email, loginData.password);
});

Then("The user should be logged in successfully", () => {
  // dashboard.dashboard().should("be.visible");
});

When("Click on the test management tab", ()=>{
  testmanagement.openTestManagementTab()
})

Given("Open the skill management page", () => {
  skillmanagement.openSkillManagementPage();
});

When("Click menu icon to open the dropdown menu", ()=>{
  editskill.clickEditSkillButton()
})

And("Replace some information in the skill form", ()=>{
  const title = faker.person.jobTitle();
  const description = faker.person.jobDescriptor()
   edimodeskill.clickEditModeSkillButton(title, description)
})

When("Deselect the assessment", ()=>{
  // replaceassessmentassessment.replaceAssessment()
  // replaceassessmentassessment.confirmationMessage()
})




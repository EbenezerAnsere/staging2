///<reference types='cypress'/>


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import loginData from "../../../../fixtures/example.json";
import Dashboard from "../../../../PageObject/Dashboard";
import LandingPage from "../../../../PageObject/LandingPage";
import TestManagementTab from "../../../../PageObject/testmanagement";
import SkillManagement from "../../../../PageObject/skill";
import DeleteLevel from "../../../../PageObject/Delete_Level";


const landingpage = new LandingPage();
const dashboard = new Dashboard();
const testmanagement = new TestManagementTab();
const skillmanagement = new SkillManagement();
const deletelevel = new DeleteLevel();



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

When("Open the menu and select level", ()=>{
  deletelevel.openDeleteLevel()
})





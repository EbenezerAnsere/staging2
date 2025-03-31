/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../../../../PageObject/LandingPage"
import Dashboard from "../../../../PageObject/Dashboard";
import ProfileIcon from "../../../../PageObject/ProfileIcon";
import Setting from "../../../../PageObject/Setting";
import loginData from "../../../../fixtures/example.json";
import Developer_Setting from "../../../../PageObject/Developer_Setting";
// import settingData from "../../../../fixtures/setting.json";
const landingpage = new LandingPage();
const dashboard = new Dashboard();
const profileicon = new ProfileIcon();
const developerSetting = new Developer_Setting()
// const setting = new Setting();

Given("Navigate to the login page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

When("Enter valid credentials", () => {
  landingpage.login(loginData.email, loginData.password);
});

Then("Open a dashboard", () => {
  dashboard.dashboard().should("be.visible");
});

Given("Profile Icon is present", () => {
  profileicon.openStaticDynamic().click({ force: true });
  profileicon
    .selectSettings()
    .should("be.visible")
    .and("have.text", "Settings");
  profileicon.selectSettings().click({ force: true });
});

When("Select Developer Settings", () => {
  developerSetting.openDeveloperSettings()
});

Then("Verify API Documentation", ()=>{
    developerSetting.confirmationMessage()
})



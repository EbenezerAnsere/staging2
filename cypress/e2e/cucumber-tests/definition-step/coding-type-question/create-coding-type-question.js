/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LandingPage from '../../../../page_object_model/landingpage'
import Dashboard from '../../../../page_object_model/open-dashboard'
import TestManagement from '../../../../page_object_model/test_management_side'
import loginData from '../../../../fixtures/example.json'

const landingpage = new LandingPage();
const dashboard = new Dashboard();
const testmanagementside = new TestManagement()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Enter valid credentials', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then("User is redirected to the Dashboard", ()=>{
    dashboard.myDashboard()
})

When("Open test management", ()=>{
     testmanagementside.openTestManagementTab()
})




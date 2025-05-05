///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginData from '../../../../fixtures/example.json'
import Dashboard from '../../../../page_object_model/Dashboard'
import LandingPage from '../../../../page_object_model/landingpage'
import TestManagementTab from '../../../../page_object_model/testmanagement'
import SkillManagement from '../../../../page_object_model/Skill'
import DeleteSkill from '../../../../page_object_model/delete_skill'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const skillmanagement = new SkillManagement()
const deleteskill = new DeleteSkill()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Fill the login form and click on the login button', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('The user should be logged in successfully', () => {
	dashboard.dashboard().should('be.visible').and('have.text', 'Dashboard')
})

When('Click on the test management tab', () => {
	testmanagement.openTestManagementTab()
})

Given('Open the skill management page', () => {
	skillmanagement.openSkillManagementPage()
})

When('Click on the three dots to open the dropdown menu', () => {
	deleteskill.clickDeleteSkillButton()
	deleteskill.confirmationMessage()
})

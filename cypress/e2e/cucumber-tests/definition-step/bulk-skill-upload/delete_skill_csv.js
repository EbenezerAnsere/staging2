///<reference types='cypress'/>

const Excel = require('exceljs')

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import Dashboard from '../../../../PageObject/Dashboard'
import LandingPage from '../../../../PageObject/landingpage'
import TestManagementTab from '../../../../PageObject/testmanagement'
import SkillManagement from '../../../../PageObject/Skill'
import DeleteSkillCSVFile from '../../../../PageObject/delete_skill_csvfile'
import loginData from '../../../../fixtures/example.json'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const skillmanagement = new SkillManagement()
const deleteskillfilecsv = new DeleteSkillCSVFile()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Enter valid credentials', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('Open a dashboard', () => {
	dashboard.dashboard().should("be.visible");
})

When('Open test management page using the test management', () => {
	testmanagement.openTestManagementTab()
})

Given('Open the skill management page using skill management', () => {
	skillmanagement.openSkillManagementPage()
})

When(
	'Open the bulk skill upload page using the bulk skill upload button',
	() => {
		deleteskillfilecsv.deleteskillicon()
	},
)

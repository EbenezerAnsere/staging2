///<reference types='cypress'/>

const Excel = require('exceljs')

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import Dashboard from '../../../../page_object_model/Dashboard'
import LandingPage from '../../../../page_object_model/landingpage'
import TestManagementTab from '../../../../page_object_model/testmanagement'
import SkillManagement from '../../../../page_object_model/Skill'
import DeleteSingleSkillCSVFile from '../../../../page_object_model/delete_single_skill'
import loginData from '../../../../fixtures/example.json'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const skillmanagement = new SkillManagement()
const deletesingleskillfilecsv = new DeleteSingleSkillCSVFile()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Enter valid credentials', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('Open a dashboard', () => {
	dashboard.dashboard().should('be.visible')
})

When('Open test management page using the test management', () => {
	testmanagement.openTestManagementTab()
})

Given('Open the skill management page using skill management', () => {
	skillmanagement.openSkillManagementPage()
})

When('Delete single skill line', () => {
	deletesingleskillfilecsv.mydeleteskill()
})

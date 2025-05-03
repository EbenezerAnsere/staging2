///<reference types='cypress'/>

const Excel = require('exceljs')

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import Dashboard from '../../../../PageObject/Dashboard'
import LandingPage from '../../../../PageObject/landingpage'
import TestManagementTab from '../../../../PageObject/testmanagement'
import SkillManagement from '../../../../PageObject/Skill'
import UploadBulkSkill from '../../../../PageObject/Upload_Bulk_Skill'
import loginData from '../../../../fixtures/example.json'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const skillmanagement = new SkillManagement()
const uploadbulkskill = new UploadBulkSkill()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Enter valid credentials', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('Open a dashboard', () => {
	dashboard.dashboard().should('be.visible')
})

When('Click on the test management tab', () => {
	testmanagement.openTestManagementTab()
})

Given('Open the skill management page', () => {
	skillmanagement.openSkillManagementPage()
})

When('Click on the bulk skill upload button', () => {
	uploadbulkskill.uploadBulkSkill()
})

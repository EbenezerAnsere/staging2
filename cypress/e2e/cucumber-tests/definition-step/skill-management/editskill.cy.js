///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import loginData from '../../../../fixtures/example.json'
import Dashboard from '../../../../page_object_model/Dashboard'
import LandingPage from '../../../../page_object_model/landingpage'
import TestManagementTab from '../../../../page_object_model/testmanagement'
import SkillManagement from '../../../../page_object_model/Skill'
import EditSkill from '../../../../page_object_model/edit_skill'
import EditModeSkill from '../../../../page_object_model/edimodeskill'
import ReplaceAssessmentAssignment from '../../../../../PageObject/replace_assessment_assignment'

import { faker } from '@faker-js/faker'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const skillmanagement = new SkillManagement()
const editskill = new EditSkill()
const edimodeskill = new EditModeSkill()
const replaceassessmentassessment = new ReplaceAssessmentAssignment()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Fill the login form and click on the login button', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('The user should be logged in successfully', () => {
	dashboard.dashboard().should('be.visible')
})

When('Click on the test management tab', () => {
	testmanagement.openTestManagementTab()
})

Given('Open the skill management page', () => {
	skillmanagement.openSkillManagementPage()
})

When('Click menu icon to open the dropdown menu', () => {
	editskill.clickEditSkillButton()
})

And('Replace some information in the skill form', () => {
	const title = faker.person.jobTitle()
	const description = faker.person.jobDescriptor()
	edimodeskill.clickEditModeSkillButton(title, description)
})

When('Deselect the assessment', () => {
	replaceassessmentassessment.replaceAssessment()
	replaceassessmentassessment.confirmationMessage()
})

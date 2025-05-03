///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginData from '../../../../fixtures/example.json'
import Dashboard from '@PageObject/dashboard'
import LandingPage from '@PageObject/landingpage'
import TestManagementTab from '@PageObject/testmanagement'
import SkillManagement from '@PageObject/skill'
import SkillCreation from '@PageObject/skill_creation'
import SkillCreationFormPage from '@PageObject/skill_creation_form'
import Assessment_Assignment from '@PageObject/assessment_assignment'
import { faker } from '@faker-js/faker'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const skillmanagement = new SkillManagement()
const SkillcreationPage = new SkillCreation()
const skillcreationformpage = new SkillCreationFormPage()
const assessmentAssignment = new Assessment_Assignment()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Fill the login form and click on the login button', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('The user should be logged in successfully', () => {
	dashboard.dashboard().should("be.visible");
})

When('Click on the test management tab', () => {
	testmanagement.openTestManagementTab()
})

Given('Open the skill management page', () => {
	skillmanagement.openSkillManagementPage()
})

When('Open the menu', () => {
	SkillcreationPage.OpenSkillCreationForm()
})

And('Fill the skill creation form', () => {
	const randomTitle = faker.person.jobTitle()
	const randomDescription = faker.person.jobDescriptor()
	skillcreationformpage.fillSkillForm(randomTitle, randomDescription)
})

Then('Select the assessment type from the list', () => {
	assessmentAssignment.saveAssessmentAssignment()
})

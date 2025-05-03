///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginData from '../../../../fixtures/example.json'
import Dashboard from '../../../../page_object_model/Dashboard'
import LandingPage from '../../../../page_object_model/landingpage'
import TestManagementTab from '../../../../page_object_model/testmanagement'
import SkillManagement from '../../../../page_object_model/Skill'
import LevelCreation from '../../../../page_object_model/skill_Level'
import CreateLevel from '../../../../page_object_model/create_level'
import { faker } from '@faker-js/faker'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const skillmanagement = new SkillManagement()
const levelcreation = new LevelCreation()
const createlevel = new CreateLevel()

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

When('click on Create New Button', () => {
	levelcreation.OpenLevelCreationForm()
})

And('Create a new level', () => {
	const randomLevel = faker.person.jobType()
	createlevel.saveLevel(randomLevel)
})

///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginData from '../../../../fixtures/example.json'
import Dashboard from '@PageObject/dashboard'
import LandingPage from '@PageObject/landingpage'
import TestManagementTab from '@PageObject/testmanagement'
import SkillManagement from '@PageObject/skill'
import LevelCreation from '@PageObject/skill_Level'
import CreateLevel from '@PageObject/create_level'
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
	dashboard.dashboard().should("be.visible");
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

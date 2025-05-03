///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginData from '../../../../../fixtures/example.json'
import Dashboard from '../../../../../page_object_model/Dashboard'
import LandingPage from '../../../../../page_object_model/landingpage'
import TestManagementTab from '../../../../../page_object_model/testmanagement'
import MultipleChoicePage from '../../../../../page_object_model/bulk_question_upload'
import TrueOrFalseQuestion from '../../../../../page_object_model/true_or_false_question'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const multiplechoicepage = new MultipleChoicePage()
const trueorfalsequestion = new TrueOrFalseQuestion()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Fill the login form and click on the login button', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('The user should be logged in successfully', () => {
	dashboard.dashboard().should('be.visible')
	cy.wait(2000)
})

When('Click on the test management tab', () => {
	testmanagement.openTestManagementTab()
})

Given('Questions should be provided', () => {
	multiplechoicepage.AccessQuestionsPage()
})

When('Select True or False Question', () => {
	trueorfalsequestion.trueorfalse()
})

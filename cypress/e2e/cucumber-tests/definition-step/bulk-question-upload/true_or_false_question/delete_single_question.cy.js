///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginData from '../../../../../fixtures/example.json'
import Dashboard from '../../../../../page_object_model/Dashboard'
import LandingPage from '../../../../../page_object_model/landingpage'
import TestManagementTab from '../../../../../page_object_model/testmanagement'
import MultipleChoicePage from '../../../../../page_object_model/bulk_question_upload'
import DeleteSingleQuestion from '../../../../../page_object_model/delete_single_question'
import DeleteButtonBulkQuestionUpload from '../../../../../page_object_model/delete_button_bulk_question'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const multiplechoicepage = new MultipleChoicePage()
const deletesinglequestion = new DeleteSingleQuestion()
const deletebuttonbulkquestionupload = new DeleteButtonBulkQuestionUpload()

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

When('Click on the delete button places at the right side', () => {
	deletesinglequestion.deletesingletrueorfalse()
})

Then(
	'A single question should be deleted from the list shown in the table.',
	() => {
		deletebuttonbulkquestionupload.deleteButtonSingleQuestion()
	},
)

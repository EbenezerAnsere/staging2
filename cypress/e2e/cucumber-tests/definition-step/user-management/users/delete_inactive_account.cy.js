///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import loginData from '../../../../../fixtures/example.json'

import Dashboard from '../../../../../page_object_model/Dashboard'
import LandingPage from '../../../../../page_object_model/landingpage'
import UserManagement from '../../../../../page_object_model/user_management'
import DeleteInactiveAccount from '../../../../../page_object_model/delete_inactive_account'
import ClickDeleteOption from '../../../../../page_object_model/click_delete_inactive_account'


const landingpage = new LandingPage()
const dashboard = new Dashboard()
const usermanagement = new UserManagement()
const deleteinactiveaccount = new DeleteInactiveAccount();
const clickdeleteoption = new ClickDeleteOption()


Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Fill the login form and click on the login button', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('The user should be logged in successfully', () => {
	dashboard.dashboard().should('be.visible')
})

When('Click on the user management tab', () => {
	usermanagement.openusermanagement()
})

Given("Delete option should be provided", ()=>{
    deleteinactiveaccount.openMenu()
})

When("User clicks on delete option removing an inactive account", ()=>{
    clickdeleteoption.deleteoption()
})
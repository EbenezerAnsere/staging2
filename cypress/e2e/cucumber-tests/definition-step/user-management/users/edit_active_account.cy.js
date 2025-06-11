///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import loginData from '../../../../../fixtures/example.json'

import Dashboard from '../../../../../page_object_model/Dashboard'
import LandingPage from '../../../../../page_object_model/landingpage'
import UserManagement from '../../../../../page_object_model/user_management'
import ClickOption from '../../../../../page_object_model/click_dot_edit_account'
import EditAccount from '../../../../../page_object_model/edit_account'


const landingpage = new LandingPage()
const dashboard = new Dashboard()
const usermanagement = new UserManagement()
const clickoptions = new ClickOption()
const editaccount = new EditAccount()



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

Given("Edit option should be provided", ()=>{
    clickoptions.clickdot()
})

When("User clicks on Edit option to open the edit mode", ()=>{
   editaccount.openedit();
})
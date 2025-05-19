///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import loginData from '../../../../../fixtures/example.json'

import Dashboard from '../../../../../page_object_model/Dashboard'
import LandingPage from '../../../../../page_object_model/landingpage'
import UserManagement from '../../../../../page_object_model/user_management'
import ReinviteOption from '../../../../../page_object_model/reinvite_inactive_account'
import OpenReinviteOpen from '../../../../../page_object_model/click_reinvite_inactive_account'


const landingpage = new LandingPage()
const dashboard = new Dashboard()
const usermanagement = new UserManagement()
const reinviteoption = new ReinviteOption()
const openreinviteoption = new OpenReinviteOpen()


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

Given("Reinvite option should be provided", ()=>{
    reinviteoption.clickdot();
})

When("Click on Reinvite option reinviting the inactive account", ()=>{
    openreinviteoption.reinviteinactiveaccount()
})
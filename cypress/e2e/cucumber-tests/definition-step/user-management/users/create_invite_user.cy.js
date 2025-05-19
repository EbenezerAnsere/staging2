///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import loginData from '../../../../../fixtures/example.json'

import Dashboard from '../../../../../page_object_model/Dashboard'
import LandingPage from '../../../../../page_object_model/landingpage'
import UserManagement from '../../../../../page_object_model/user_management'
import OpenUserManagementPage from '../../../../../page_object_model/open_user_management'
import VerifyInviteUserButton from '../../../../../page_object_model/invite_user_button'
import OpenInviteUserPage from '../../../../../page_object_model/open_invite_user_form'

import {faker} from '@faker-js/faker'


const landingpage = new LandingPage()
const dashboard = new Dashboard()
const usermanagement = new UserManagement()
const openusermanagementpage = new OpenUserManagementPage()
const verifyinviteuserbutton = new VerifyInviteUserButton()
const openinviteuserpage = new OpenInviteUserPage()

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

Then('Open User Management', () => {
	openusermanagementpage.verifyUserManagement()
})

Given("Invite User Button should be present", ()=>{
    verifyinviteuserbutton.inviteuser()
})

When("Click on Invite User Button to open the invite user form and fill out all fields", ()=>{
   const randomFirstName = faker.person.firstName();
   const randomLastName = faker.person.lastName();
   const randomEmail = faker.internet.email()
   openinviteuserpage.clickinviteuser(randomFirstName, randomLastName, randomEmail);
})

///<reference types='cypress'/>

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import loginData from '../../../../fixtures/example.json'
import Dashboard from '../../../../page_object_model/Dashboard'
import LandingPage from '../../../../page_object_model/landingpage'
import TestManagementTab from '../../../../page_object_model/testmanagement'
import CreateDomain from '../../../../page_object_model/CreateDomain'
import FillDomainForm from '../../../../page_object_model/FillDomainForm'

import { faker } from '@faker-js/faker'

const landingpage = new LandingPage()
const dashboard = new Dashboard()
const testmanagement = new TestManagementTab()
const createdomain = new CreateDomain()
const filldomainform = new FillDomainForm()

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

And('Click on Create New Domain Button', () => {
	createdomain.opendomaincreationform()
})

When('User should be able to create a domain', () => {
	const domainName = faker.commerce.department()
	const domainDescription = faker.lorem.paragraph()
	const domainCategoryName = faker.commerce.department()
	const domainCategoryDescription = faker.lorem.paragraph()
	filldomainform.requireDomainForm(
		domainName,
		domainDescription,
		domainCategoryName,
		domainCategoryDescription,
	)
})

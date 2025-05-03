/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LandingPage from '@PageObject/landingpage'
import Dashboard from '@PageObject/dashboard'
import ProfileIcon from '@PageObject/profileIcon'
import Setting from '@PageObject/setting'
import loginData from '../../../../fixtures/example.json'
import settingData from '../../../../fixtures/setting.json'
import { faker } from '@faker-js/faker'
const landingpage = new LandingPage()
const dashboard = new Dashboard()
const profileicon = new ProfileIcon()
const setting = new Setting()

Given('Navigate to the login page', () => {
	cy.visit(Cypress.env('baseUrl'))
})

When('Enter valid credentials', () => {
	landingpage.login(loginData.email, loginData.password)
})

Then('Open a dashboard', () => {
	// dashboard.dashboard().should("be.visible");
})

Given('Profile Icon is present', () => {
	profileicon.openStaticDynamic().click({ force: true })
	profileicon.selectSettings().should('be.visible').and('have.text', 'Settings')
	profileicon.selectSettings().click({ force: true })
})

When('Modify existing organization with new information', () => {
	const randomOrganizationName = faker.company.name()
	const randomOrganizationAddress = faker.location.streetAddress()
	const randomServiceEmail = faker.internet.email()
	const randomPhoneNumber = faker.string.numeric(10)
	const randomEmailDomain = faker.internet.domainName()

	setting.organizationSettings(
		randomOrganizationName,
		randomOrganizationAddress,
		randomServiceEmail,
		randomPhoneNumber,
		randomEmailDomain,
	)
})

Given('Select system quesion', () => {
	// setting.checkBox().checked()
	// setting.checkBox().uncheck().should("be.unchecked")
})

Then('Update existing organization', () => {
	setting.confirmationMessage()
})

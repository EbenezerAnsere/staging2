class OpenUserManagementPage {
	elements = {
		usermanagement: () =>
			cy.url().should('include', '/dashboard/user-management/users'),
	}

	verifyUserManagement() {
		cy.wait(1000)
		this.elements.usermanagement()
	}
}

export default OpenUserManagementPage

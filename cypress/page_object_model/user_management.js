class UserManagement {
	elements = {
		clickUserManagement: () => cy.contains('User Management'),
	}

	openusermanagement() {
		this.elements.clickUserManagement().click({ force: true })
	}
}

export default UserManagement

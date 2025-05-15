class UserManagement{

    elements = {
        clickUserManagement: () => cy.contains("Test Management")
    }

    openusermanagement(){
        this.elements.clickUserManagement().click({force:true})
    }


}

export default UserManagement;
class OpenInviteUserPage{

    elements = {
        firstName: () => cy.get("input[placeholder='John']"),
        lastName: () => cy.get("input[placeholder='Doe']"),
        email: () => cy.get("input[placeholder='Enter Email']"),
        role: () => cy.get("button[type='button']"),
        selectRole: () => cy.get(".dropdown-list li"),
        clickInviteUserButton: () => cy.get("app-custombutton")
    }

    clickinviteuser(firstName, lastName, email){
        this.elements.firstName().type(firstName)
        this.elements.lastName().type(lastName)
        this.elements.email().type(email)
        this.elements.role().eq(2).click({force:true})
        // this.elements.selectRole().should("have.length", 14);
        this.elements.selectRole().eq(0).click();
        this.elements.clickInviteUserButton().eq(2).click()
        cy.wait(1000);
    }



}

export default OpenInviteUserPage;
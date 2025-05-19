class VerifyInviteUserButton{

    elements = {
        inviteuserbutton: ()=> cy.contains("Invite User"),
         inviteuser: () => cy.get(".capitalize.flex")
    }

    inviteuser(){
        this.elements.inviteuserbutton().should("be.visible")
        this.elements.inviteuser().click({force:true})
    }






}

export default VerifyInviteUserButton;
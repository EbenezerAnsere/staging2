class DeleteInactiveAccount{

    elements = {
        clickdots: () => cy.get(".action-button")
    }

    openMenu(){
        this.elements.clickdots().eq(0).click({force:true})
    }





}

export default DeleteInactiveAccount;
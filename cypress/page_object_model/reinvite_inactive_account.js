class ReinviteOption{

    elements = {
        clickdots: () => cy.get(".action-button")
    }

    clickdot(){
        this.elements.clickdots().eq(0).click({force:true})
    }


}

export default ReinviteOption;
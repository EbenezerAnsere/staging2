class ClickOption{

        elements = {
        clickdots: () => cy.get(".action-button")
    }

    clickdot(){
        this.elements.clickdots().eq(10).click({force:true})
    }




}

export default ClickOption;
class DeleteLevel{

    element ={
        selectLevel: () => cy.get(".action-button"),
        selectEditLevel: () => cy.get(".shadow-custom").find("button")
    }

    openDeleteLevel(){
        this.element.selectLevel().eq(0).click({force:true})
        this.element.selectEditLevel().eq(2).click({force:true})
    }



}

export default DeleteLevel;
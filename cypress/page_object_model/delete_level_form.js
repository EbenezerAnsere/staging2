class DeleteModeLevel{

    elements={
        deletemodelevel: () => cy.get("img[alt='Delete']")
    }

    removeLevel(){
        this.elements.deletemodelevel().eq(0).click({force:true})
    }


}

export default DeleteModeLevel;
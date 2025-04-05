class CreateDomain{

    elements ={
        createNewDomain: () => cy.get("button[type='button']")
    }

    opendomaincreationform(){
        this.elements.createNewDomain().click({force:true})
    }


}

export default CreateDomain;
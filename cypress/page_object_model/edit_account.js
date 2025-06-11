class EditAccount{

    elements = {
        openeditmode: () => cy.get("img[alt='Edit']")
    }

    openedit(){
        this.elements.openeditmode().click({force:true})
    }



}

export default EditAccount;
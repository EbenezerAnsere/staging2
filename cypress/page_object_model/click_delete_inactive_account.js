class ClickDeleteOption{

    elements = {
        clickdelete: () => cy.get("img[alt='Delete']")
    }

    deleteoption(){
        this.elements.clickdelete().click({force:true})
    }



}

export default ClickDeleteOption;
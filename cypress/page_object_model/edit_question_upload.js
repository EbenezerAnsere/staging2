class EditTrueOrFalseQuestion{

    elements = {
        clickdeletesignbutton: () => cy.get("span.slider"),
        rowofquestion: () => cy.get("tbody tr[id='row-0'] td:nth-child(2) div:nth-child(1)"),
        enterinput: () => cy.get("input[type='text']"),
        savequestion: () => cy.get("app-custombutton:nth-child(2) button:nth-child(1) div:nth-child(1)")
    }

    editButtonSingleQuestion(){
        this.elements.clickdeletesignbutton().eq(0).click({force:true})
        this.elements.rowofquestion().dblclick({force:true})
        this.elements.enterinput().eq(0).clear({force:true}).type("There are one button of a mouse")
        this.elements.savequestion().click({force:true})
        cy.wait(1000)
    }

}

export default EditTrueOrFalseQuestion;
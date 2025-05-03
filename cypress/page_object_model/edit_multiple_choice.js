class EditMultipleChoice{

    elements = {
        multichoicequestion: () => cy.get("input[value='Multiple_choice']"),
        downloadsamplecsv: () => cy.contains("Download Sample CSV"),
        uploadcsvfile: () => cy.get("#bulk-questions"),
        showeditbutton: () => cy.get(".slider"),
        enterinput: () => cy.get("tbody tr[id='row-0'] td:nth-child(4) div:nth-child(1)"),
        editinput: () => cy.get("tbody tr[id='row-0'] td:nth-child(2) div:nth-child(1) input:nth-child(1)")
     }

    selectEditMultiChoiceQuestion() {
        this.elements.multichoicequestion().check({force:true}).should("be.checked")
        this.elements.downloadsamplecsv().click({force:true})
        this.elements.uploadcsvfile().attachFile("Multiple_Choice_Question.csv")
        cy.wait(4000)
        this.elements.showeditbutton().eq(0).click({force:true})
        this.elements.enterinput().dblclick({force:true})
        this.elements.editinput().clear({force:true}).type("How many types of software do we have?")
    }








}

export default EditMultipleChoice;
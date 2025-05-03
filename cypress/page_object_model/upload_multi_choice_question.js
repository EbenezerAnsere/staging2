class UploadMultiChoiceQuestion {

    elements = {
        multichoicequestion: () => cy.get("input[value='Multiple_choice']"),
        downloadsamplecsv: () => cy.contains("Download Sample CSV"),
        uploadcsvfile: () => cy.get("#bulk-questions"),
        savequestion: () => cy.get("app-custombutton:nth-child(2) button:nth-child(1) div:nth-child(1)")
    }

    selectMultiChoiceQuestion() {
        this.elements.multichoicequestion().check({force:true}).should("be.checked")
        this.elements.downloadsamplecsv().click({force:true})
        this.elements.uploadcsvfile().attachFile("Multiple_Choice_Question.csv")
        cy.wait(4000)
        this.elements.savequestion().should("have.text", "Save question").and("be.visible").click({force:true})
        
    }




}

export default UploadMultiChoiceQuestion;
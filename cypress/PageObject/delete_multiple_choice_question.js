class DeleteMultiPleChoiceQuestionCSVFile{

    elements = {
        multichoicequestion: () => cy.get("input[value='Multiple_choice']"),
        downloadsamplecsv: () => cy.contains("Download Sample CSV"),
        uploadcsvfile: () => cy.get("#bulk-questions"),
        deleteicon: () => cy.get("img[alt='Delete File']"),
        cancelbutton: () => cy.get("app-custombutton"),
        yescancelbutton: () => cy.get("app-custombutton")
    }

    selectMultiChoiceQuestion() {
        this.elements.multichoicequestion().check({force:true}).should("be.checked")
        this.elements.downloadsamplecsv().click({force:true})
        this.elements.uploadcsvfile().attachFile("Multiple_Choice_Question.csv")
        cy.wait(4000)
        this.elements.deleteicon().click({force:true})
        this.elements.cancelbutton().eq(0).click()
        cy.wait(1000)
        this.elements.yescancelbutton().eq(2).click()
       
    }


}

export default DeleteMultiPleChoiceQuestionCSVFile;
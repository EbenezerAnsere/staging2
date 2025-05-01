class DeleteMultipleChoiceQuestion{

    elements = {
        multichoicequestion: () => cy.get("input[value='Multiple_choice']"),
        downloadsamplecsv: () => cy.contains("Download Sample CSV"),
        uploadcsvfile: () => cy.get("#bulk-questions"),
        showdeletebutton: () => cy.get(".slider"),
        threedoticon: () => cy.get(".action-button"),
        deletebutton: () => cy.get("img[alt='Delete']")
    }

    selectMultiChoiceQuestion() {
        this.elements.multichoicequestion().check({force:true}).should("be.checked")
        this.elements.downloadsamplecsv().click({force:true})
        this.elements.uploadcsvfile().attachFile("Multiple_Choice_Question.csv")
        cy.wait(4000)
        this.elements.showdeletebutton().eq(1).click({force:true})
        this.elements.threedoticon().eq(1).click({force:true})
        this.elements.deletebutton().then(function(button){
        cy.wrap(button).click({force:true})
       })
    }




}

export default DeleteMultipleChoiceQuestion;
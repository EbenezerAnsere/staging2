class DeleteSingleQuestion{

    elements = {
        trueorfalsequestion: () => cy.get("input[value='True_or_false']"),
        downloadsamplecsv: () => cy.contains("Download Sample CSV"),
        uploadsamplecsv: () => cy.get("#bulk-questions"),
        savequestion: () => cy.get("app-custombutton"),
        clickDeletIcon: () => cy.get("img[alt='Delete File']")
    }

    deletesingletrueorfalse(){
        this.elements.trueorfalsequestion().check()
        this.elements.downloadsamplecsv().should("be.visible").click({force:true})
        this.elements.uploadsamplecsv().attachFile("True_or_False_Question.csv")
        cy.wait(4000)
    }


}

export default DeleteSingleQuestion;
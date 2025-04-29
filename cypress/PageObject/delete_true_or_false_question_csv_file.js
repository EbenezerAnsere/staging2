class DeleteTrueOrFalseQuestionCSVFile{

        elements = {
            trueorfalsequestion: () => cy.get("input[value='True_or_false']"),
            downloadsamplecsv: () => cy.contains("Download Sample CSV"),
            uploadsamplecsv: () => cy.get("#bulk-questions"),
            savequestion: () => cy.get("app-custombutton"),
            clickDeletIcon: () => cy.get("img[alt='Delete File']"),
            cancelbutton: () => cy.get("app-custombutton:nth-child(1) button:nth-child(1) div:nth-child(1)"),
            yescancelbutton: () => cy.contains("Yes, Cancel")
        }
    
        deletetrueorfalse(){
            this.elements.trueorfalsequestion().check()
            this.elements.downloadsamplecsv().should("be.visible").click({force:true})
            this.elements.uploadsamplecsv().attachFile("True_or_False_Question.csv")
            cy.wait(4000)
           this.elements.clickDeletIcon().then(function(deleteIcon){

            cy.wrap(deleteIcon).click({force:true})

           })
           this.elements.cancelbutton().should("have.text", "Cancel").and("be.visible").click({force:true});
           this.elements.yescancelbutton().click({force:true})
        }



}

export default DeleteTrueOrFalseQuestionCSVFile;
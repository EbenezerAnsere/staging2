class TrueOrFalseQuestion{

    elements = {
        trueorfalsequestion: () => cy.get("input[value='True_or_false']"),
        downloadsamplecsv: () => cy.contains("Download Sample CSV"),
        uploadsamplecsv: () => cy.get("#bulk-questions"),
        savequestion: () => cy.get("app-custombutton")
    }

    trueorfalse(){
        this.elements.trueorfalsequestion().check()
        this.elements.downloadsamplecsv().should("be.visible").click({force:true})
        this.elements.uploadsamplecsv().attachFile("True_or_False_Question.csv")
        cy.wait(4000)
        this.elements.savequestion().eq(1).then(function(savequestionbutton){
            cy.wrap(savequestionbutton).click({force:true})
        })
    }
    
}

export default TrueOrFalseQuestion;
class TrueOrFalseQuestion{

    elements = {
        trueorfalsequestion: () => cy.get("input[value='True_or_false']"),
        downloadsamplecsv: () => cy.contains("Download Sample CSV"),
        uploadsamplecsv: () => cy.get("#bulk-questions")
    }

    trueorfalse(){
        this.elements.trueorfalsequestion().check()
        this.elements.downloadsamplecsv().should("be.visible").click({force:true})
        this.elements.uploadsamplecsv().attachFile("True_or_False_Question.csv")
    }
    
}

export default TrueOrFalseQuestion;
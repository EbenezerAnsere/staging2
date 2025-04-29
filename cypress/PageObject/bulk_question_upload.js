class MultipleChoicePage{

    elements = {
        myquestion: () => cy.get('.links').find('li'),
        bulkquestionupload: () => cy.get("button[type='button']")
    }

    AccessQuestionsPage(){
        this.elements.myquestion().eq(1).click({force:true})
        cy.wait(1000)
        this.elements.bulkquestionupload().eq(0).click({force:true})
    }




}

export default MultipleChoicePage;
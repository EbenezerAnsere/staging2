class ReplaceAssessmentAssignment{

    elements = {
        selectOption: () => cy.get(".links"),
        selectAssessment: () => cy.get("input[type='radio']"),
        deselectcheckbox: () => cy.get("input[type='checkbox']"),
        clickNextButton: () => cy.get("button[type='button']"),
        saveButton: () => cy.get("button[type='button']")
    }

    replaceAssessment(){
        this.elements.selectOption().eq(1).find("li").should("be.visible")
        this.elements.selectAssessment().eq(1).click({force:true})
        this.elements.deselectcheckbox().should("be.checked")
        this.elements.clickNextButton().eq(3).click({force:true})
        this.elements.saveButton().eq(1).click({force:true})
    }

    update = {
        toastMessage : () => cy.on("window:confirm", (str)=>{
          expect(str).to.equal("Skill Updated successfully")
        })
    
       }
    
       confirmationMessage(){
        // return this.update.toastMessage()
       }


}

export default ReplaceAssessmentAssignment;
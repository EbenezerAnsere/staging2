class Assessment_Assignment{

  element = {
    selectAssessmentAssignment: () => cy.get("input[type='radio']"),
    enableNextButton: () => cy.get(".capitalize"),
    enableSaveButton: () => cy.get(".capitalize")
  }

  saveAssessmentAssignment(){
    this.element.selectAssessmentAssignment().eq(0).click({force:true})
    this.element.enableNextButton().eq(4).click({force:true})
    this.element.enableSaveButton().eq(2).click({force:true})
  }

}

export default Assessment_Assignment;
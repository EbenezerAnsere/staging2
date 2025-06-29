class TestManagementSide{

      element = {
        clickTestManagementTab: () => cy.contains("Test Management"),
        openQuestions: () => cy.contains("Questions"),
        createNewQuestion: () => cy.get(".dropdown-button"),
        selectCodeOption: () => cy.get(".dropdown-content.show")
    }

    openTestManagement(){
        this.element.clickTestManagementTab().should("be.visible").click({force:true});
        this.element.openQuestions().should("be.visible").click({force:true});
        this.element.createNewQuestion().eq(1).should("be.visible").click({force:true});
        this.element.selectCodeOption().find("li.ng-star-inserted").eq(6).should("be.visible").click({force:true});
    }


}

export default TestManagementSide;
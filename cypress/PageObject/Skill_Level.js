class LevelCreation{

    element = {
        clickCreateSkillButton: () => cy.get(".dropdown-button"),
        selectLevel: () => cy.get(".dropdown-content"),
    }

    OpenLevelCreationForm(){
        this.element.clickCreateSkillButton().should("class", "dropdown-button").and("be.visible").click({force:true})
        this.element.selectLevel().should("class", "dropdown-content").and("be.visible").find('li').eq(1).click({force:true})
    }


}

export default LevelCreation;
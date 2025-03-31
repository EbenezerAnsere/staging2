class SkillCreation{

    element = {
        clickCreateSkillButton: () => cy.get(".dropdown-button"),
        selectSkill: () => cy.get(".dropdown-content"),
    }

    OpenSkillCreationForm(){
        this.element.clickCreateSkillButton().should("class", "dropdown-button").and("be.visible").click({force:true})
        this.element.selectSkill().should("class", "dropdown-content").and("be.visible").find('li').eq(0).click({force:true})
    }


}

export default SkillCreation;
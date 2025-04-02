class EditSkill{

    elements = {
        editSkillButton: () => cy.get(".action-button"),
        editSkill: () => cy.get(".shadow-custom").find("button")
    }

    clickEditSkillButton(){
        this.elements.editSkillButton().eq(0).click({force:true})
        this.elements.editSkill().eq(1).click({force:true})
    }

}

export default EditSkill;
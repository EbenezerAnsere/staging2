class EditModeSkill {

    elements ={
        editsmodekilltitle: () => cy.get("input[placeholder='Type title here']"),
        editmodeskilldescription: () => cy.get("#domain-description"),
        nextButton: () => cy.get("button[type='button']")

    }

    clickEditModeSkillButton(title, description){
        this.elements.editsmodekilltitle().type(title)
        this.elements.editmodeskilldescription().type(description)
        this.elements.nextButton().eq(2).click({force:true})
    }


}

export default EditModeSkill;
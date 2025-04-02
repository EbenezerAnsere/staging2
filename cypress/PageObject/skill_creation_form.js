class SkillCreationFormPage{
    

    element = {
        matchHeading: () => cy.get("h1"),
        title: () => cy.get("input[placeholder='Type title here']"),
        description: () => cy.get("#domain-description"),
        enableNextButton: () => cy.get("button[type='button']")
    }

    fillSkillForm(title, description){
        this.element.matchHeading().eq(1)
        this.element.title().type(title)
        this.element.description().type(description)
        this.element.enableNextButton().eq(3).click({force:true})
    }

    

}

export default SkillCreationFormPage;
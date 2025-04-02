class CreateLevel{

    elements = {
        addNewLevel: () => cy.contains("Add New Level"),
        levelName: () => cy.get("input[placeholder='Type title here']"),
        saveButton: () => cy.get("app-custombutton")
    }

    saveLevel(levelName){
        this.elements.addNewLevel().click({force:true})
        this.elements.levelName().eq(5).type(levelName)
        this.elements.saveButton().eq(1).click({force:true})
    }

}

export default CreateLevel;
class SkillManagement{

    element = {
        selectSkills: () => cy.contains("Skills")
    }

    openSkillManagementPage(){
        this.element.selectSkills().click({force:true})
    }


}
export default SkillManagement;
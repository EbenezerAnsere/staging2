class DeleteSkill{

    elements = {
        deleteSkillButton: () => cy.get(".action-button"),
        removeSkill: () => cy.get(".shadow-custom").find("button")
    }

    clickDeleteSkillButton(){
        this.elements.deleteSkillButton().eq(0).click({force:true})
        this.elements.removeSkill().eq(3).click({force:true})
    }

    update = {
        toastMessage : () => cy.on("window:confirm", (str)=>{
          expect(str).to.equal("Skill Deleted successfully")
        })
    
       }
    
       confirmationMessage(){
        return this.update.toastMessage()
       }




}

export default DeleteSkill;
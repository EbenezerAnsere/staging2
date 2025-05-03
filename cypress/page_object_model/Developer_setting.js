class Developer_Setting{

    element = {
        developerSetting: () => cy.get(".links").find("li"),
        generateKey: () => cy.get(".capitalize.flex"),
        threedots: () => cy.get(".action-button")
    }

    openDeveloperSettings(){
        this.element.developerSetting().eq(1).should("be.visible").click({force:true})
        this.element.generateKey().should("be.visible").click({force:true})
        this.element.threedots().eq(0).should("be.visible").click({force:true})
    }

    update = {
        toastMessage : () => cy.on("window:confirm", (str)=>{
          expect(str).to.equal("Key generated successfully")
        })
    
       }
    
       confirmationMessage(){
        return this.update.toastMessage()
       }

}

export default Developer_Setting;
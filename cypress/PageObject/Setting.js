class Setting{

   element = {
    organizationName : () => cy.get("#organizationName"),
    organizationAddress : () => cy.get("#organizationAddress"),
    serviceEmail : () => cy.get("#serviceEmail"),
    hotline : () => cy.get("#hotline"),
    emailDomain : () => cy.get("input[placeholder='Enter domain (e.g. example.com)']"),
    addEmail : () => cy.get(".secondary"),
    signin : () => cy.get(".testSave"),
   }

   organizationSettings(organizationName, organizationAddress, serviceEmail, hotline, emailDomain){
     this.element.organizationName().clear().type(organizationName)
     this.element.organizationAddress().clear().type(organizationAddress)
     this.element.serviceEmail().clear().type(serviceEmail)
     this.element.hotline().clear().type(hotline)
     this.element.emailDomain().type(emailDomain)
     this.element.addEmail().click({force:true})
     this.element.signin().click({force:true})
   }
   
   //select lists, incuding question, test, and assessment
   testSource = {
    systemQuestion : () => cy.get("app-test-source-checkbox").eq(0)
   }

   checkBox(){
    this.testSource.systemQuestion()
   }

   update = {
    toastMessage : () => cy.on("window:confirm", (str)=>{
      expect(str).to.equal("Organization information updated successfully")
    })

   }

   confirmationMessage(){
    return this.update.toastMessage()
   }

}

export default Setting;
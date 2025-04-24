class LandingPage{

    element = {
        email : () => cy.get("#email"),
        password : () => cy.get("#password"),
        signin : () => cy.get("button[type='submit']")
    }

    login(email, password){
        cy.wait(1000)
        this.element.email().type(email)
        this.element.password().type(password)
        this.element.signin().click()
        
    }


}

export default LandingPage;
class Dashboard{

    
    element = {
        matchName : () => cy.get("nav h1")
    }

    dashboard(){
        cy.wait(4000)
        return this.element.matchName()
    }

}

export default Dashboard;
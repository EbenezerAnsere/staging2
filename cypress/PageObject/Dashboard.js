class Dashboard{

    
    element = {
        matchName : () => cy.get("nav h1")
    }

    dashboard(){
        return this.element.matchName()
    }

}

export default Dashboard;
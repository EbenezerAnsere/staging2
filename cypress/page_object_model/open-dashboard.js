class OpenDashboard{

    element = {
        navigate: () => cy.url().should("include", "/dashboard/home")
    }

    myDashboard(){
        this.element.navigate();
    }


}

export default OpenDashboard;
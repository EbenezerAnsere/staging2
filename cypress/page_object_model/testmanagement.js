class TestManagementTab{

    element = {
        clickTestManagementTab: () => cy.contains("Test Management")
    }

    openTestManagementTab(){
        this.element.clickTestManagementTab().click({force:true})
    }


}

export default TestManagementTab;
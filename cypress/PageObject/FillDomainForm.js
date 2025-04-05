class FillDomainForm{

    elements = {
        fillDomainName: () => cy.get("input[placeholder='Type name here']"),
        fillDomainDescription: () => cy.get("#domain-description"),
        fillDomainCategoryName: () => cy.get("input[placeholder='Type name here']"),
        fillDomainCategoryDescription: () => cy.get('#category-description'),
        clickDomainCategory: () => cy.get("button[type='button']"),
        createDomain: () => cy.get("button[type='button']")
    }

    requireDomainForm(domainName, domainDescription, domainCategoryName, domainCategoryDescription){
        this.elements.fillDomainName().eq(0).type(domainName)
        this.elements.fillDomainDescription().type(domainDescription)
        this.elements.fillDomainCategoryName().eq(1).type(domainCategoryName)
        this.elements.fillDomainCategoryDescription().type(domainCategoryDescription)
        this.elements.clickDomainCategory().eq(2).click({force:true})
        this.elements.createDomain().eq(1).click({force:true})
    } 


}

export default FillDomainForm;
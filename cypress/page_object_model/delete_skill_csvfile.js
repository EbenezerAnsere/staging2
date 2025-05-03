class DeleteSkillCSVFile{

    elements = {
        uploadBulkSkillButton: () => cy.get('button[type="button"]'),
        downloadSampleCSV: () => cy.contains("Download Sample CSV"),
        uploadcsvfile: () => cy.get("input[type='file']"),
        deleteskillicon: () => cy.get("img[alt='Delete File']"),
        clickonCancel: () => cy.contains("Cancel"),
        confirmDelete: () => cy.get("button[type='button']")
    }   

    deleteskillicon(){
        this.elements.uploadBulkSkillButton().eq(0).click({force:true})
        this.elements.downloadSampleCSV().click({force:true})
        this.elements.uploadcsvfile().attachFile('skills.csv')
        cy.wait(10000)
        this.elements.deleteskillicon().then(function(mydeletecsvfile){
            cy.wrap(mydeletecsvfile).click({force:true})
        })
        this.elements.clickonCancel().click({force:true})
        this.elements.confirmDelete().eq(2).then(function(myconfirmdelete){
            cy.wrap(myconfirmdelete).click({force:true})
        })
    }
    

}

export default DeleteSkillCSVFile;
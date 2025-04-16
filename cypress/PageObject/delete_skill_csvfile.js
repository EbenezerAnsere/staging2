class DeleteSkillCSVFile{

    elements = {
        uploadBulkSkillButton: () => cy.get('button[type="button"]'),
        downloadSampleCSV: () => cy.contains("Download Sample CSV"),
        uploadcsvfile: () => cy.get("input[type='file']"),
        deleteskillicon: () => cy.get("img[alt='Delete File']")

    }

    deleteskillicon(){
        this.elements.uploadBulkSkillButton().eq(0).click({force:true})
        this.elements.downloadSampleCSV().click({force:true})
        this.elements.uploadcsvfile().attachFile('skills.csv')
        cy.wait(10000)
        this.elements.deleteskillicon().then(function(mydeletecsvfile){
            cy.wrap(mydeletecsvfile).click({force:true})
        })
    }


}

export default DeleteSkillCSVFile;
class UploadBulkSkill{

    elements = {
        uploadBulkSkillButton: () => cy.get('button[type="button"]'),
        downloadSampleCSV: () => cy.contains("Download Sample CSV"),
        uploadcsvfile: () => cy.get("input[type='file']"),
        savebulkskillupload: () => cy.get("button[type='button']"),
        skilluploadedsuccessfully: () => cy.contains("Skill uploaded successfully")
    }

    uploadBulkSkill(){


        this.elements.uploadBulkSkillButton().eq(0).click({force:true})
        this.elements.downloadSampleCSV().click({force:true})
        this.elements.uploadcsvfile().attachFile('skills.csv')
        cy.wait(10000)
        this.elements.savebulkskillupload().eq(1).then(function(clickSaveButton){
            cy.wrap(clickSaveButton).click({ force: true });
        })
        this.elements.skilluploadedsuccessfully().should("exist")
    }


}

export default UploadBulkSkill;
class UploadBulkSkill{

    elements = {
        uploadBulkSkillButton: () => cy.get('button[type="button"]'),
        downloadSampleCSV: () => cy.contains("Download Sample CSV")
    }

    uploadBulkSkill(){
        this.elements.uploadBulkSkillButton().eq(0).click({force:true})
        this.elements.downloadSampleCSV().click({force:true})
    }


}

export default UploadBulkSkill;
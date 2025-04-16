class DeleteSingleSkillCSVFile{

    elements = {
        uploadBulkSkillButton: () => cy.get('button[type="button"]'),
        mydownloadSampleCSV: () => cy.contains("Download Sample CSV"),
        myuploadcsvfile: () => cy.get("input[type='file']"),
        deletesingleskill: () => cy.get(".slider"),
        optionIcon: () => cy.get(".action-button"),
        deleteskillline: () => cy.get(".shadow-custom button")

    }

    mydeleteskill(){
        this.elements.uploadBulkSkillButton().eq(0).click({force:true})
        this.elements.mydownloadSampleCSV().click({force:true})
        this.elements.myuploadcsvfile().attachFile('skills.csv')
        cy.wait(20000)
        this.elements.deletesingleskill().eq(1).click({force:true})
        this.elements.optionIcon().eq(0).click({force:true})
        this.elements.deleteskillline().click({force:true})
    }

}

export default DeleteSingleSkillCSVFile;
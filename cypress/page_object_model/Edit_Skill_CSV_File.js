class EditSkillLine{

    elements = {
        uploadBulkSkillButton: () => cy.get('button[type="button"]'),
        mydownloadSampleCSV: () => cy.contains("Download Sample CSV"),
        myuploadcsvfile: () => cy.get("input[type='file']"),
        editsingleskill: () => cy.get(".slider"),
        entercellvalue: () => cy.get("tr td"),
        // inputName: () => cy.get("input[type='text']"),
        // entercelldescription: () => cy.get("input[type='text']")
    }

    myeditskill(){
        this.elements.uploadBulkSkillButton().eq(0).click({force:true})
        this.elements.mydownloadSampleCSV().click({force:true})
        this.elements.myuploadcsvfile().attachFile('skills.csv')
        cy.wait(20000)
        this.elements.editsingleskill().eq(0).click({force:true})
        this.elements.entercellvalue().eq(1).click({force:true})
        // this.elements.inputName().eq(1).type("Web developer", {force:true})

        // this.elements.entercelldescription().eq(2).click({force:true}).then(function(enter1){
        //     cy.wrap(enter1).type("Web developer", {force:true})
        // })
    }





}
export default EditSkillLine;
class DeleteButtonBulkQuestionUpload{

    elements = {
        clickdeletesignbutton: () => cy.get("span.slider"),
        clickthreedots: () => cy.get(".action-button"),
        deletesinglequestion: () => cy.get("img[alt='Delete']")
    }

    deleteButtonSingleQuestion(){
        this.elements.clickdeletesignbutton().eq(1).click({force:true})
        this.elements.clickthreedots().eq(0).click({force:true})
        this.elements.deletesinglequestion().then(function(deletebutton){
            cy.wrap(deletebutton).click({force:true})
        })
    }

}

export default DeleteButtonBulkQuestionUpload;
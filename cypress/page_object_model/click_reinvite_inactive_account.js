class OpenReinviteOpen{

    elements = {
        clickreinviteoption: () => cy.get("img[alt='Reinvite']")
    }

    reinviteinactiveaccount(){
        this.elements.clickreinviteoption().click({force:true})
    }


}

export default OpenReinviteOpen;
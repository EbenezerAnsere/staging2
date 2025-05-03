// import Setting from "./Setting";

class ProfileIcon{

    openStaticDynamic(){
        return cy.get(".dropdown")
    }

    selectSettings(){
     return cy.get(".shadow-custom").find("button").eq(1)
    }

}

export default ProfileIcon;
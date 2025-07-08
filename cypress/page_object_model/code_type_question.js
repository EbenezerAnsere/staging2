class CodeTypeQuestion{

    element = {
        // questiontitle: () => cy.get("input[placeholder='please enter question title']"),
        // programminglanguage: () => cy.get("button[type='button']").eq(2),
        // selectJavascript: () => cy.get(".dropdown-list").eq(0).find("li"),
        // domain: () => cy.get("button[type='button']").eq(3),
        // selectDomainOption: () => cy.get(".dropdown-list").find("li"),
        // selectCategoryOption: () => cy.get("button[type='button']").eq(4),
        // selectJavascriptOption: () => cy.get(".dropdown-list").find("li"),
        // difficultylevel: () => cy.get("button[type='button']").eq(5),
        // selectDifficultyLevel: () => cy.get(".dropdown-list").find("li"),
        // enterScore: () => cy.get("input[placeholder='Type score here']"),
        // fillQuestionDetail: () => cy.get(".ql-editor.ql-blank"),
        // solutionCode: () => cy.get("button.w-full.notificationActive"),
        // generateSolutionCode: () => cy.get(".capitalize.flex"),
        // boilerplateCodeOption: () => cy.get('button.w-full'),
        // generateBoilerplateCode: () => cy.get(".capitalize.flex"),

        questiontitle: () => cy.get("input[type='text']").eq(0)

    }

    fillCodeTypeQuestion(){
        cy.config("pageLoadTimeout", 10000)
        this.element.questiontitle().type("String Reverse");
        // this.element.programminglanguage().click({force:true});
        // this.element.selectJavascript().click({force:true});
        // this.element.domain().click({force:true});
        // this.element.selectDomainOption().eq(23).click({force:true});
        // this.element.selectCategoryOption().click({force:true});
        // this.element.selectJavascriptOption().eq(2).click({force:true});
        // this.element.difficultylevel().click({force:true});
        // this.element.selectDifficultyLevel().eq(1).click({force:true});
        // this.element.enterScore().type(1);
        // this.element.fillQuestionDetail().type("Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).");
        // this.element.solutionCode().should("be.visible")
        // cy.wait(3000)
        // this.element.generateSolutionCode().eq(2).click({force:true})
        // this.element.boilerplateCodeOption().eq(5).should("be.visible").click({force:true});
        // cy.wait(3000)
        // this.element.generateBoilerplateCode().eq(2).click({force:true});
  


    }





}

export default CodeTypeQuestion;
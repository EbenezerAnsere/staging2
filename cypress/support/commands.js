
import 'cypress-file-upload';




const myEmail = Cypress.env('email');
const myPassword =Cypress.env('password');

Cypress.Commands.add('mylogin', () => {
    cy.get('#email').type(myEmail)
    cy.get('#password').type(myPassword)
    cy.get("button[type='submit']").click()
})
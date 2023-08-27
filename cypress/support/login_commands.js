/// <reference types="Cypress"/>

//PARA CHAMAR ESSE COMANDO , USAR cy.login_teste e passar os parametros
//TAMBEM ADICIONAR O IMPORT DESSA CLASSE EM e2e.js , para reconhecer
Cypress.Commands.add('realizar_login',(usuario,senha) => {
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('#login-button').click()
});
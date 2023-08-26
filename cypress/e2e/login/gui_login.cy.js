// IDENTIFICAR QUE É UM TESTE TIPO CYPRESS
/// <reference types="Cypress"/>

// DESCRIBE É O NOME DA FEATURE
// IT É O NOME DO CENÁRIO
describe('', () => {
    it('', () => {
        
    });
});

describe('Teste de Login', () => {
    it('Autenticação com login válido', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain','Products')
    });

    it.only('Autenticação com login invalido', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("erro")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain','Username and password do not match')
    });
});
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
        cy.realizar_login("standard_user","secret_sauce")
        cy.get('.product_label').should('contain','Products')
    });

    it('Autenticação com login invalido', () => {
        cy.realizar_login("standard_user","erro")
        cy.get('[data-test="error"]').should('contain','Username and password do not match')
    });
});
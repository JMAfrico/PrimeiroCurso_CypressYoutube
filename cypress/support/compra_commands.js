/// <reference types="Cypress"/>

Cypress.Commands.add('seleciona_produto',(nome_produto) => {
    cy.get('.product_sort_container').select('Price (low to high)')
    cy.get('.inventory_list > :nth-child(1)').should('contain','Sauce Labs Onesie')
    cy.contains(nome_produto).click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click({force: true})
});

Cypress.Commands.add('finaliza_compra',() => {
    cy.get('.fa-layers-counter').should('have.text','1')
    cy.get('.fa-layers-counter').click()
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('JM')
    cy.get('[data-test="lastName"]').type('Africo')
    cy.get('[data-test="postalCode"]').type('15151659')
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()
    cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
});


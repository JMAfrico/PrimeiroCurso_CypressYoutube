/// <reference types="Cypress"/>

describe('Comprar produto', () => {
    it('Compra de produto com sucesso sem commands', () => {
        //acessa o site
        cy.visit("https://www.saucedemo.com/v1/")

        //localiza o elemento campo usuário e preenche o nome
        cy.get('[data-test="username"]').type("standard_user")

        //localiza o elemento campo senha e preenche a senha
        cy.get('[data-test="password"]').type("secret_sauce")

        //localiza o botão login e clica
        cy.get('#login-button').click()

        //verifica a entrada no site e valida login, se contem o texto
        cy.get('.product_label').should('contain','Products')

        //clica no botão listar e ordena(select)
        cy.get('.product_sort_container').select('Price (low to high)')

        //verifica os elementos(tira foto)
        cy.get('.inventory_list > :nth-child(1)').should('contain','Sauce Labs Onesie').screenshot()
        cy.get('.inventory_list > :nth-child(2)').should('contain','Sauce Labs Bike Light')
        cy.get('.inventory_list > :nth-child(3)').should('contain','Sauce Labs Bolt T-Shirt')

        //Clica no produto e adiciona no carrinho(força o clique caso tenha elemento atrapalhando)
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click({force: true})

        //Clico no carrinho(se contem exatamente o texto)
        cy.get('.fa-layers-counter').should('have.text','1')

        //Clico no carrinho
        cy.get('.fa-layers-counter').click()

        //Clico no botao de fionalizar compra e valido mensagem de sucesso
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('JM')
        cy.get('[data-test="lastName"]').type('Africo')
        cy.get('[data-test="postalCode"]').type('15151659')
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
    });

    it('compra de produto com commands',()=>{
        cy.realizar_login("standard_user","secret_sauce")
        cy.seleciona_produto('Sauce Labs Onesie')
        cy.finaliza_compra()
    })
});
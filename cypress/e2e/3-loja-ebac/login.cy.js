///<reference types="cypress"/>

describe('funcionalidade: Login', () => {
    it('deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('rodrigo.prata@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rodrigo.prata (não é rodrigo.prata? Sair)')
    })
})
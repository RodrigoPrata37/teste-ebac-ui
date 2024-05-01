///<reference types="cypress"/>

describe('funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    

    });

    it('deve fazer login com sucesso', () => {
       
        cy.get('#username').type('rodrigo.prata@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rodrigo.prata (não é rodrigo.prata? Sair)')
            
    });

    it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

        cy.get('#username').type('rodrigo@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')

    })

    it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        
        cy.get('#username').type('rodrigo.prata@teste.com.br')
        cy.get('#password').type('teste@000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail rodrigo.prata@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });
})
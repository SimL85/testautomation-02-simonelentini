/// <reference types="cypress" />

describe('Login and Logout a user', () => {
    it('Login (TC1)', () => {
        cy.visit('http://localhost:3000')
        cy.title().should('eq', 'Testers Hotel')
        cy.get('h2').should('contain', 'Login')

        cy.percySnapshot('index-page')

        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.username').should('contain', 'Welcome tester01')
        cy.wait(3000)
        cy.percySnapshot('EE-page')
        cy.get('.user > .btn').click()
        cy.get('h2').should('contain', 'Login')
        cy.percySnapshot('dashbord-page')
    })

})


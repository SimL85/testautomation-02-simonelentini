/// <reference types="cypress" />

describe('Create, Editing and Deleting a Bill', ()=>{
    it('Login',() => {
        
        cy.visit('http://localhost:3000')
        cy.title().should('eq','Testers Hotel')
        cy.get('h2').should('contain','Login')
       
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.username').should('contain','Welcome tester01')
         
    })

    it('Create a Bill (TC5)',() => {
       
        cy.get('.blocks > :nth-child(3) > .btn').click()
        cy.get('h2').should('contain','Bills')
        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('contain','New Bill')

        cy.get('input').type(5000)
        cy.get('.checkbox').click()

        cy.get('.blue').click()
        cy.get('h2').should('contain','Bills')
        
    })

    it('Editing a Bill (TC6)',() => {
       
        cy.get('h2').should('contain','Bills')
        cy.get('img').last().click()
        cy.get('.menu > :nth-child(1)').click()
        cy.get(':nth-child(3) > input').clear()
        cy.get(':nth-child(3) > input').type(4500)
        
        cy.get('.checkbox').click()
        cy.get('.blue').click()

        cy.get('h2').should('contain','Bills')

    })
   
    it('Deleting a Bill (TC7)',() => {
       
        cy.get('img').last().click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get('h2').should('contain','Bills')
          
    })
   
    it('Logout',() => {
        
        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
        
    })

})
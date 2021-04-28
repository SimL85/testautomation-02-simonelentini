/// <reference types="cypress" />

describe('Registration, Editing and Deleting a client', ()=>{
    it('Login',() => {
        
        cy.visit('http://localhost:3000')
        cy.title().should('eq','Testers Hotel')
        cy.get('h2').should('contain','Login')
       
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.username').should('contain','Welcome tester01')
        
    })

    it('Client Registration (TC2)',() => {
        
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.title().should('eq','Testers Hotel')
        cy.get('h2').should('contain','Clients')
        cy.get('h2 > .btn').click()

       
        cy.get(':nth-child(1) > input').type('Pina Colada')
        cy.get(':nth-child(2) > input').type('pinacolada@gmail.com')
        cy.get(':nth-child(3) > input').type('070 12 33 234')
        cy.get('.blue').click()
        cy.get('h2').should('contain','Clients')
              
    })

    it('Edit a client (TC3)',() => {
       
        
        cy.get('h2').should('contain','Clients')
       
        cy.get('img').last().click()
        cy.get('.menu > :nth-child(1)').click()
        
        cy.get(':nth-child(4) > input').clear()
        cy.get(':nth-child(4) > input').type('pinacolada@yahoo.se')
        
        cy.get('.blue').click()
        cy.get('h2').should('contain','Clients')
          
    })
 

    it('Deleting a Client (TC4)',() => {
       
        cy.get('h2').should('contain','Clients')
        cy.get('img').last().click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get('h2').should('contain','Clients')
        
    })
 
    it('Logout',() => {
        
        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')

    })

})

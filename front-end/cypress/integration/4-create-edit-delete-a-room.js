/// <reference types="cypress" />

describe('Create, Editing and Deleting a Room', ()=>{
    it('Login',() => {
        
        cy.visit('http://localhost:3000')
        cy.title().should('eq','Testers Hotel')
        cy.get('h2').should('contain','Login')
       
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.username').should('contain','Welcome tester01')
         
    })

    it('Create a Room (TC8)',() => {
       
        cy.get('.blocks > :nth-child(1) > .btn').click()
        cy.get('h2').should('contain','Rooms')
        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('contain','New Room')

        cy.get(':nth-child(1) > select').select('Twin')
        cy.get(':nth-child(2) > input').type(1101)
        cy.get(':nth-child(3) > input').type(11)
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type(4000)
       
       
        cy.get(':nth-child(6) > select').select(['Balcony','Ensuite','Penthouse'])  
        cy.get('.blue').click()
        cy.get('h2').should('contain','Rooms')
        
    })

    it('Editing a Room (TC9)',() => {
       
        cy.get('h2').should('contain','Rooms')
        cy.get('img').last().click()
        cy.get('.menu > :nth-child(1)').click()
        cy.get(':nth-child(3) > select').select('Double')
        cy.get('.checkbox').click()
        cy.get('.blue').click()
        cy.get('h2').should('contain','Rooms')

    })
   
    it('Deleting a Room (TC10)',() => {
        
        cy.get('h2').should('contain','Rooms')
        cy.get('img').last().click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get('h2').should('contain','Rooms')
          
    })
   
    it('Logout',() => {
        
        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
        
    })

})
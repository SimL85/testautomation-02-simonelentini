/// <reference types="cypress" />

import * as loginIndex from '../pages/login-page'
import * as indexPage from '../pages/index-page'
import * as clientsPage from '../pages/clients-page'
import * as clientNewPage from '../pages/client-new-page'
import * as clientEditPage from '../pages/client-edit-page'
import * as billsPage from '../pages/bills-page'
import * as billsNewPage from '../pages/bills-new-page'
import * as billsEditPage from '../pages/bills-edit-page'
import * as roomsPage from '../pages/rooms-page'
import * as roomsNewPage from '../pages/rooms-new-page'
import * as roomEditPage from '../pages/rooms-edit-page'

var faker = require('faker')

let randomName = faker.name.findName()
let randomMail = faker.internet.email()
let randomPhone = faker.phone.phoneNumber()

describe('Testsuite with Page-Objet', ()=>{

   
    beforeEach('login (TC1)',() => {
        cy.visit('/')
        loginIndex.confirmHeader('Login')
        loginIndex.loginUser('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Tester Hotel Overview')
    })

    /*
    afterEach('Logout (TC1)',() => {
        indexPage.logoutUser('Login')
    })
*/
    it('Client registration (TC2)',() => {
        indexPage.viewClients('Clients')
        clientsPage.viewClientNew('New Client')
        clientNewPage.createClient('Pina Colada','pinacolada@gmail.com','0701233234','Clients')
        clientsPage.verifyLastClient('Pina Colada','pinacolada@gmail.com','0701233234')
    })

    it('Edit the last Client (TC3)',() => {
        indexPage.viewClients('Clients')
        clientsPage.verifyEditLastClient('Client:')
        clientEditPage.editClient('pinacolada@yahoo.se','Clients')
        clientsPage.verifyLastClient('Pina Colada','pinacolada@yahoo.se','0701233234')
       
    })

    it('Delete the last Client (TC4)',() => {
        indexPage.viewClients('Clients')
        clientsPage.deleteLastClient('Clients')       
    })

    it('Create a bill (TC5)',() => {
        indexPage.viewBills('Bills')
        billsPage.viewBillNew('New Bill')
        billsNewPage.createBill('5000','Bills') 
        billsPage.verifyLastBill('5000')
    })

    it('Edit the last bill (TC6)',() => {
        indexPage.viewBills('Bills')
        billsPage.verifyEditLastBill('Bill:')
        billsEditPage.editLastBill('4500','Bills')
        billsPage.verifyLastBill('4500')
    })
    
    it('Delete the last bill (TC7)',() => {
        indexPage.viewBills('Bills')
        billsPage.deleteLastBill('Bills')
    })

    it('Create a room (TC8)',() => {
        indexPage.viewRooms('Rooms')
        roomsPage.viewRoomNew('New Room')
        roomsNewPage.createRoom('Twin','1101','11','4000',['Balcony', 'Ensuite', 'Penthouse'],'Rooms')
        roomsPage.verifyLastRoom('twin','1101','11','4000','balcony')
    })
   
    it('Edit the last room (TC9)',() => {
        indexPage.viewRooms('Rooms')
        roomsPage.verifyEditLastRoom('Room:')
        roomEditPage.editRoom('1230','12','Rooms')
        roomsPage.verifyLastRoom('twin','1230','12','4000','balcony')
       
    })

    it('Delete the last room (TC10)',() => {
        indexPage.viewRooms('Rooms')
        roomsPage.deleteLastRoom('Rooms')
    })
   
    it.only('Client registration (TC2) with faker',() => {
        indexPage.viewClients('Clients')
        clientsPage.viewClientNew('New Client')
        clientNewPage.createClient(randomName,randomMail,randomPhone,'Clients')
        clientsPage.verifyLastClient(randomName,randomMail,randomPhone,)
    })

    it.only('Edit the last Client (TC3) with faker',() => {
        indexPage.viewClients('Clients')
        clientsPage.verifyEditLastClient('Client:')
        clientEditPage.editClient(randomMail,'Clients')
        clientsPage.verifyLastClient(randomName,randomMail,randomPhone)
       
    })
    
    it('Create a bill (TC5) with faker',() => {
        indexPage.viewBills('Bills')
        billsPage.viewBillNew('New Bill')
        billsNewPage.createBill('5000','Bills') 
        billsPage.verifyLastBill('5000')
    })

    it('Edit the last bill (TC6) with faker',() => {
        indexPage.viewBills('Bills')
        billsPage.verifyEditLastBill('Bill:')
        billsEditPage.editLastBill('4500','Bills')
        billsPage.verifyLastBill('4500')
    })
})
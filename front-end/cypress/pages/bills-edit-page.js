/// <reference types="cypress" />

const VALEU_SEK = ':nth-child(3) > input'
const PAID_CHECK_B = '.checkbox'
const SAVE_BTN = '.blue'

function editLastBill(value, content) {
    cy.get(VALEU_SEK).clear().type(value)
    cy.get(PAID_CHECK_B).click()
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

exports.default = {
    editLastBill
}
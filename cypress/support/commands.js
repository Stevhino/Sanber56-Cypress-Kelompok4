import pageLogin from "./PageObject/PageLogin.cy"
const dataLogin = require("../fixtures/dataTestLogin.json")

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
Cypress.Commands.add('login', () => {
    const log_in = new pageLogin

    cy.visit(dataLogin.url)
    log_in.inputEmail(dataLogin.email)       //email
    log_in.inputPassword(dataLogin.password) //password
    log_in.clickLogin()                      //click login button
    log_in.checkUrl()                        //check url
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
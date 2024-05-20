import pageLogin from "./PageObject/PageLogin.cy";
const dataLogin = require("../fixtures/dataTestLogin.json");

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
Cypress.Commands.add("login", () => {
  const log_in = new pageLogin();

  cy.visit(dataLogin.url);
  log_in.inputEmail(dataLogin.email); //email
  log_in.inputPassword(dataLogin.password); //password
  log_in.clickLogin(); //click login button
  log_in.checkUrl(); //check url
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add("clearType", (element, value) => {
  cy.get(element).should("be.visible").clear();
});

Cypress.Commands.add("requireText", (value, text) => {
  cy.get(value).should("contain.text", text);
});
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// CUSTOM COMMANDS UNTUK PRODUCT
Cypress.Commands.add("pilihUkuranAcak", (productOption) => {
  const randomSizeIndex = Math.floor(
    Math.random() * productOption.sizes.length
  );
  const randomSizeSelector = productOption.sizes[randomSizeIndex].selector;
  cy.get(randomSizeSelector).click({ force: true });
});

Cypress.Commands.add("pilihWarnaAcak", (productOption) => {
  const randomColorIndex = Math.floor(
    Math.random() * productOption.colors.length
  );
  const randomColorSelector = productOption.colors[randomColorIndex].selector;
  cy.get(randomColorSelector).click({ force: true });
});

Cypress.Commands.add("pilihKuantitasAcak", (quantitySelector) => {
  const randomQuantity = Math.floor(Math.random() * 10) + 1;
  cy.get(quantitySelector).clear().type(randomQuantity);
});

Cypress.Commands.add("pilihKuantitasAcakKurangDari0", (quantitySelector) => {
  const randomQuantity = Math.floor(Math.random() * -10) + 1;
  cy.get(quantitySelector).clear().type(randomQuantity);
});

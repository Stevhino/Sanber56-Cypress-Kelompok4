describe('Login page', () => {
 
  //Valid Login
  it('Success Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')

    cy.get('#email').type('abc123@sanber.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('abc123@sanber')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.url().should('be.equal','https://magento.softwaretestingboard.com/customer/account/')
  })
})
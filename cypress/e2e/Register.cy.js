import pageRegister from "../support/PageObject/PageRegister.cy"


// case for positive case
describe('positive case', () => {
  beforeEach(() => {  
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')

  })

  it('success create user', () => {
    const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
    const randomName = Math.random.toString(12).substring(2,15)
    cy.get('#firstname').type(randomName)
    cy.get('#lastname').type(randomName)
    cy.get('#email_address').type(randomEmail)
    cy.get('#password').type('Test123@')
    cy.get('#password-confirmation').type('Test123@')

    pageRegister.clickCreateButton()
  })
})


// case for negative case
describe('negative case', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')    
  })

  it('using the same email', () => {
    const randomName = Math.random.toString(12).substring(2,15)
    const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
    cy.get('#firstname').type(randomName)
    cy.get('#lastname').type(randomName)
    cy.get('#email_address').type(randomEmail)
    cy.get('#password').type('Test123@')
    cy.get('#password-confirmation').type('Test123@')
    pageRegister.clickCreateButton()
    
    cy.get('.message-error').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  })

  it('different password', () => {
    const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
    const randomName = Math.random.toString(12).substring(2,15)
    cy.get('#firstname').type(randomName)
    cy.get('#lastname').type(randomName)
    cy.get('#email_address').type(randomEmail)
    cy.get('#password').type('Test123@')
    cy.get('#password-confirmation').type('Test123@@')

    pageRegister.clickCreateButton()

    cy.get('#password-confirmation-error').should('contain', 'Please enter the same value again.')
  })

  it('empty email', () => {
    const randomName = Math.random.toString(12).substring(2,15)
    cy.get('#firstname').type(randomName)
    cy.get('#lastname').type(randomName)
    cy.get('#password').type('Test123@')
    cy.get('#password-confirmation').type('Test123@@')

    pageRegister.clickCreateButton()

    cy.get('#email_address-error').should('contain', 'This is a required field.')
  })

  it('empty password', () => {
    const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
    const randomName = Math.random.toString(12).substring(2,15)
    cy.get('#firstname').type(randomName)
    cy.get('#lastname').type(randomName)
    cy.get('#email_address').type(randomEmail)
    //cy.get('#password').type('Test123@')
    cy.get('#password-confirmation').type('Test123@@')

    pageRegister.clickCreateButton()

    cy.get('#password-error').should('contain', 'This is a required field.')
  })

  it('empty confirm password', () => {
    const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
    const randomName = Math.random.toString(12).substring(2,15)
    cy.get('#firstname').type(randomName)
    cy.get('#lastname').type(randomName)
    cy.get('#email_address').type(randomEmail)
    cy.get('#password').type('Test123@')
    // cy.get('#password-confirmation').type('Test123@@')

    pageRegister.clickCreateButton()

    cy.get('#password-confirmation-error').should('contain', 'This is a required field.')
  })

})
class pageLogin {

    email = '#email'
    password = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    loginButton = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    errorMessage = '.message-error > div'
    errorEmail = '#email-error'
    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }

    inputPassword(password){
        cy.get(this.password).clear().type(password)
    }

    clickLogin(){
        cy.get(this.loginButton).click()
    }

    checkUrl(){
        cy.url().should('be.equal','https://magento.softwaretestingboard.com/customer/account/')
    }

    errorMsgIncorrect(){
        cy.get(this.errorMessage).should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    }

    errorMsgInvalid(){
        cy.get(this.errorEmail).should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com)')
    }

}

export default pageLogin
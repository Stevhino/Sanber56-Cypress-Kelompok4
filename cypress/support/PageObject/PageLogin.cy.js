class pageLogin {

    email = '#email'
    password = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    loginButton = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    errorMessage = '.message-error > div'

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

    errorMsgInvalidEmail(){
        cy.get(this.errorMessage).should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    }

    //The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.

}

export default pageLogin
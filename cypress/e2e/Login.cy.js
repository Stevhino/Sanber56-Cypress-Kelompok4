import pageLogin from "../support/PageObject/PageLogin.cy"
const dataLogin = require("../fixtures/dataTestLogin.json")

describe('Login page', () => {
  const login = new pageLogin

  //visit url
  beforeEach(() => {
    cy.visit(dataLogin.url)
  })
  
  //Invalid Login
  it('login with invalid email', () => {
    login.inputEmail(dataLogin.invalidEmail)  //invalid email
    login.inputPassword(dataLogin.password)   //password
    login.clickLogin()                        //click login button
    login.errorMsgInvalidEmail()              //error message
    })

  //Valid Login
  it('Login success', () => {
    login.inputEmail(dataLogin.email)       //email
    login.inputPassword(dataLogin.password) //password
    login.clickLogin()                      //click login button
    login.checkUrl()                        //check url
  })

})
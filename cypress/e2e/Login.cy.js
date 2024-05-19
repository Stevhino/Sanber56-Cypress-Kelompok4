import pageLogin from "../support/PageObject/PageLogin.cy"
const dataLogin = require("../fixtures/dataTestLogin.json")

describe('Login page', () => {
  const login = new pageLogin

  //visit url
  beforeEach(() => {
    cy.visit(dataLogin.url)
  })    

  //Invalid Login
  it('login with incorrect email', () => {
    login.inputEmail(dataLogin.invalidEmail)  //invalid email
    login.inputPassword(dataLogin.password)   //password
    login.clickLogin()                        //click login button
    login.errorMsgIncorrect()              //error message
    })

  it('login with incorrect password', () => {
    login.inputEmail(dataLogin.invalidEmail)  //invalid email
    login.inputPassword(dataLogin.invalidPassword)   //password
    login.clickLogin()                        //click login button
    login.errorMsgIncorrect()              //error message
    })

  it('login with invalid format email', () => {
    login.inputEmail(dataLogin.invalidFormatEmail)  //invalid email
    login.inputPassword(dataLogin.password)   //password
    login.clickLogin()                        //click login button
    login.errorMsgInvalid()              //error message
    })

  //Valid Login
  it('Login success', () => {
    login.inputEmail(dataLogin.email)       //email
    login.inputPassword(dataLogin.password) //password
    login.clickLogin()                      //click login button
    login.checkUrl()                        //check url
  })

})
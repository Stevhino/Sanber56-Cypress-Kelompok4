import pageEdit from "../support/PageObject/PageEdit.cy"
import pageLogin from "../support/PageObject/PageLogin.cy"
const dataLogin = require("../fixtures/dataTestLogin.json")

describe('Edit Account and Address', () => {
  const edit = new pageEdit
  const login = new pageLogin

  //visit url
  beforeEach(() => {
    cy.visit(dataLogin.url)
  })
  
  //VALID Login and SUCCESS Edit Account + Edit Address
  it('Login Success, Edit Account and Address Success', () => {
    const randomName = Math.random().toString(20).substring(3,20)   //random Name
    
    login.inputEmail(dataLogin.email)       //email
    login.inputPassword(dataLogin.password) //password
    login.clickLogin()                      //click login button
    login.checkUrl()                        //check url

    //Edit Account - Success
    cy.get('.current > strong').click()                         //click my account
    edit.clickEditAcc()                                         //click edit account button
    cy.clearType('#firstname').type(randomName)                 //clear and change firstname
    edit.clickSaveEditButton()                                  //click save button
    cy.requireText('.message-success','saved the account info') //message bar

    //Edit Address - Success
    edit.clickEditAddress()                                 //click edit address button
    cy.clearType('#telephone').type('081234')               //clear and type telephone data
    cy.clearType('#street_1').type('jl.santai no.12')       //clear and type street data
    cy.clearType('#city').type('Bandung')                   //clear and type city data
    cy.clearType('#zip').type('123')                        //clear and type zip data
    cy.get('#country').select('Indonesia')                  //select country
    edit.clickSaveEditButton()                              //click save button
    cy.requireText('.message-success','saved the address')  //message bar
  })

  //VALID Login and FAILED Edit Account
  it('Login Success, Edit Account Failed', () => {
    login.inputEmail(dataLogin.email)       //email
    login.inputPassword(dataLogin.password) //password
    login.clickLogin()                      //click login button
    login.checkUrl()                        //check url

    //Edit Account - Failed
    cy.get('.current > strong').click()                 //click my account
    edit.clickEditAcc()                                 //click edit account button
    cy.clearType('#firstname')                          //clear and empty firstname
    edit.clickSaveEditButton()                          //click save button
    cy.requireText('#firstname-error','required field') //required message
  })
  
  //VALID Login and FAILED Edit Address
  it('Login Success, Edit Address Failed', () => {
    login.inputEmail(dataLogin.email)       //email
    login.inputPassword(dataLogin.password) //password
    login.clickLogin()                      //click login button
    login.checkUrl()                        //check url

    //Edit Address - Failed
    edit.clickEditAddress()                 //click edit address button
    cy.clearType('#street_1').type('jl.santai no.12')   //clear and type street data
    cy.get('#city').clear()                 //clear and empty city data
    cy.get('#country').select('Indonesia')  //select country
    edit.clickSaveEditButton()              //click save button
    cy.requireText('#city-error','require') //required message
  })
})
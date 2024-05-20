class pageEdit {

    firstName = '#firstname'
    editAccount = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    saveButton = '#form-validate > .actions-toolbar > div.primary > .action > span'
    editAddress = '.box-shipping-address > .box-actions > .action > span'

    
    inputFirstName(firstName) {
        cy.get(this.firstName).type(firstName)
    }

    clickEditAcc(){
        cy.get(this.editAccount).click()
    }

    clickSaveEditButton(){
        cy.get(this.saveButton).click()
    }

    clickEditAddress(){
        cy.get(this.editAddress).click()
    }
}

export default pageEdit
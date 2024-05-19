class pageRegister {
    firstName = '#firstname'
    lastName = '#lastName'
    createButton = '.action.submit.primary'

    inputFirstName(firstName) {
        cy.get(this.firstName).type(firstName)
    }

    inputLastName(lastName) {
        cy.get(this.lastName).type(lastName)
    }

    clickCreateButton() {
        cy.get(this.createButton).click()
    }
}
export default new pageRegister()
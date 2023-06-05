class HomePage {
    visit(){
        cy.visit('https://automationteststore.com')
    }

    getLoginOrRegister(){
        return cy.get(`a`).contains(`Login or register`)
    }
}

export default new HomePage();
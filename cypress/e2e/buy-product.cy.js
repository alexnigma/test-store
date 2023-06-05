import user from "../fixtures/user.json";
import {login} from "../support/helpers/login";

describe (`Buy product test suite`, () => {

    beforeEach(`Visit and login`, () => {
        cy.visit(`/`);
        cy.clearAllCookies();
        login(user);
    })

    // Test data:
    let product = {
        productName: `Curls to straight Shampoo`,
    }

    it (`Buy product test`, () => {
        cy.get(`#filter_keyword`).type(product.productName);
        cy.get(`[title="Go"]`).click();
        cy.get(`.bgnone`).should(`contain`, product.productName);
        cy.get(`.cart`).click();
        cy.get(`#cart_checkout2`).click();
        cy.get(`#checkout_btn`).click();
        cy.get(`.maintext`).should(`contain`, ` Your Order Has Been Processed!`);
        cy.get(`.btn.btn-default.mr10`).click();
    })

})
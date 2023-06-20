///<reference types="cypress"/>

import {buyProduct} from "../support/helpers/buy-product";
import {login} from "../support/helpers/login";
import user from "../fixtures/user.json";


it('Order', () => {

    login(user);

    cy.get('#filter_keyword')
        .type('i')
        .closest("form")
        .submit();

    buyProduct('Benefit Bella Bamba')

    cy.get('.productpagecart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('.contentpanel').should('contain', "Thank you for shopping with us!");

})
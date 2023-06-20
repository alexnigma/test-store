import {buyProduct} from "../support/helpers/buy-product";

beforeEach(`Visit`, () => {
   cy.visit(`/`)
})

it.skip(`Search product test`, () => {

   buyProduct(`Nail Lacq45uer`)

})
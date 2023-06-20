// export function buyProduct (productName) {
//
// cy.get(`ul.pagination a`).then( pages => {
//     for (let i = 1; i < pages.length; i++) {
//         cy.location().then( location => {
//             if(!location.search.includes(`product/product`)) {
//                 cy.get(`body`).then( body => {
//                     if (body.find(`.prdocutname[title="${productName}"]`).length > 0 ) {
//                         cy.get(`.prdocutname[title="${productName}"]`).click();
//                     } else {
//                         cy.get(`ul.pagination a`).contains(`>`).click();
//                     }
//             })
//         }
//         })
//     }
// })
// }


export function buyProduct (productName) {
    cy.get(`body`).then( body => {
                    if (body.find(`.prdocutname[title="${productName}"]`).length > 0 ) {
                        cy.get(`.prdocutname[title="${productName}"]`).click();
                    } else {
                        cy.get(`ul.pagination a`).contains(`>`).click();
                        buyProduct(productName)
                    }
    })
}






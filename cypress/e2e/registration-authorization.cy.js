import user from "../fixtures/user.json"

describe ('Registration and authorization tests', () => {

  beforeEach (() =>{
    cy.visit('https://automationteststore.com')
    cy.get(`a`).contains(`Login or register`).click()
  })

  afterEach ( () => {
    cy.get(`.fa.fa-unlock`).click();
    cy.get(`.maintext`).should(`contain.text`, ` Account Logout`);
    cy.get(`.btn.btn-default.mr10`).click();
  })


  // // Test Data:
  // let email = `Tes234234234t@maul.com`; // need to change every run
  // let login = `Tewer4234222467`; // need to change every run
  //
  // let password = `Loooginchickpassword`;
  // let firstName = `Test`;
  // let lastName = `Test`;
  // let phone = `7991034433`;
  // let adress1 = `Milky Way, planet Earth`;
  // let city = `Chornobil`;
  // let countryId = `220`; // Ukraine
  // let regionId = `3490`; // Kyiv
  // let postCode = `18500`;


  it ('Registration', () => {

    cy.get(`[title="Continue"]`).click();
    cy.get(`#AccountFrm_firstname`).type(`${firstName}`).should(`contain.value`, `${firstName}`);
    cy.get(`#AccountFrm_lastname`).type(`${lastName}`).should(`contain.value`, `${lastName}`);
    cy.get(`#AccountFrm_email`).type(`${email}`).should(`contain.value`, `${email}`);
    cy.get(`#AccountFrm_telephone`).type(`${phone}`).should(`contain.value`, `${phone}`);
    cy.get(`#AccountFrm_address_1`).type(`${adress1}`).should(`contain.value`, `${adress1}`);
    cy.get(`#AccountFrm_city`).type(`${city}`).should(`contain.value`, `${city}`);
    cy.get(`#AccountFrm_country_id`).select(`${countryId}`).should(`contain.text`, `Ukraine`);
    cy.get(`#AccountFrm_zone_id`).select(`${regionId}`).should(`contain.text`, `Kyiv`);
    cy.get(`#AccountFrm_postcode`).type(`${postCode}`).should(`contain.value`, `${postCode}`);
    cy.get(`#AccountFrm_loginname`).type(`${login}`).should(`contain.value`, `${login}`);
    cy.get(`#AccountFrm_password`).type(`${password}`).should(`contain.value`, `${password}`);
    cy.get(`#AccountFrm_confirm`).type(`${password}`).should(`contain.value`, `${password}`);
    cy.get(`#AccountFrm_newsletter0`).check().should(`be.checked`);
    cy.get(`#AccountFrm_agree`).check().should(`be.checked`);
    cy.get(`.btn.btn-orange.pull-right.lock-on-click`).click();
    cy.get(`.maintext`).should(`contain.text`, ` Your Account Has Been Created!`);
    cy.get(`.btn.btn-default.mr10`).click();
    cy.get(`.maintext`).should(`contain.text`, ` My Account`);

  })


  it.only (`Authorization`, () => {

    cy.get(`#loginFrm_loginname`).type(user.username);
    cy.get(`#loginFrm_password`).type(user.password);
    cy.get(`[title="Login"]`).click();
    cy.get(`.maintext`).should(`contain.text`, ` My Account`);

  })
})
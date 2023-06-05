import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import user from ""

it('Authorization', () => {
  homePage.visit();
  homePage.getLoginOrRegisterButton().click();
  loginPage.submitLoginForm('Reid_Jacobi48', 'TestPassword');
})

import { SIGNIN_PAGE_URL } from '../helpers/baseUrls';
import { signInData } from '../helpers/testData';
import { SignInPage } from '../e2e/pages/sign.in.page';

export class UserHelper {    

    loginAsUser() {
        const signInPage = new SignInPage();

        cy.clearLocalStorage();
        cy.clearCookies();

        cy.visit(SIGNIN_PAGE_URL)
        cy.url().should('contain', SIGNIN_PAGE_URL);

        signInPage.fillEmailInput(Cypress.env('userEmail'))
            .clickSubmitButton()
            .checkPageContent(Cypress.env('userEmail'))
            .fillPasswordInput(Cypress.env('userPass'))
            .clickSubmitButton()

        cy.url().should('contain', SIGNIN_PAGE_URL);
        cy.title().should('contain', signInData.dashboardPageTitle);
    }
 }
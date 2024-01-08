import { SIGNIN_PAGE_URL } from '../../helpers/baseUrls';
import { signInData } from '../../helpers/testData';
import { SignInPage } from '../pages/sign.in.page';

describe('[A000] Login tests: positive & negative scenarios', function(){    
    const signInPage = new SignInPage();
    
    before(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });
    it('#negative case: Sign in with empty email', () => {
        cy.visit(SIGNIN_PAGE_URL)
        cy.url().should('contain', SIGNIN_PAGE_URL);

        signInPage.clickSubmitButton()
            .checkError(signInData.emptyFieldError)
    });
    it('#negative case: Sign in with invalid email', () => {
        cy.visit(SIGNIN_PAGE_URL)
        cy.url().should('contain', SIGNIN_PAGE_URL);

        signInPage.fillEmailInput('qwerty')
            .clickSubmitButton()
            .checkError(signInData.invalidFormatEmailError)
    });
    it('#positive case: Sign in with valid email', () => {
        cy.visit(SIGNIN_PAGE_URL)
        cy.url().should('contain', SIGNIN_PAGE_URL);

        signInPage.fillEmailInput(Cypress.env('userEmail'))
            .clickSubmitButton()
            .checkPageContent(Cypress.env('userEmail'))
            .fillPasswordInput(Cypress.env('userPass'))
            .clickSubmitButton()

        cy.url().should('contain', SIGNIN_PAGE_URL);
        cy.title().should('contain', signInData.dashboardPageTitle);
    });




});
    
    


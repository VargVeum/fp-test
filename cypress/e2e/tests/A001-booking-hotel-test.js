// import { dashboardPageUrl, carrierTMSDashboardUrl } from '../../../../fixtures/baseUrls';
import { DASHBOARD_PAGE_URL } from '../../helpers/baseUrls';
import { signInData } from '../../helpers/testData';
// import { UserHelper } from '../../../../helpers/userHelper';
// import { carrierPageData, pageData, urlsData } from '../../../../fixtures/getMethods';
import { SignInPage } from '../pages/sign.in.page';


describe('[A000] Login tests: positive & negative scenarios', function(){    
    const signInPage = new SignInPage();
    
    before(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });
    it('#negative case: Sign in with empty email', () => {
        cy.visit(DASHBOARD_PAGE_URL)
        cy.url().should('contain', DASHBOARD_PAGE_URL);

        // signInPage.clickSubmitButton()
        //     .checkError(signInData.emptyFieldError)
    });




});
    
    


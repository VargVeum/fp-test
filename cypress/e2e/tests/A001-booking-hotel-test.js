import { DASHBOARD_PAGE_URL } from '../../helpers/baseUrls';
import { DashboardPage } from '../pages/dashboard.page';
import { dashboardData } from '../../helpers/testData';

describe('[A001] Dashboard tests: search hotels by location', function(){    
    const dashboardPage = new DashboardPage();
    
    before(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });
    it('#positive case: Search offers by location', () => {
        cy.visit(DASHBOARD_PAGE_URL)
        cy.url().should('contain', DASHBOARD_PAGE_URL);

        dashboardPage.checkWelcomeModal()
            .fillLocationInput(dashboardData.kyivLocation)
            .openCalendar()
            .chooseCurrentAndPlusTwoDayDate()
            .clickSubmitButton()
        // Check that info about founded properties is displayed
            .checkPageContent(dashboardData.kyivLocation)
            .checkPageContent('properties found')
        // Click side menu filter and check that filter was applied
            .clickSideMenuFilter('5 stars')
            .checkPageNotContainsElement()

    });




});
    
    


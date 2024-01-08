const dashboardPageLocators = {
    locationInput: 'input[placeholder="Where are you going?"]',
    signInModal: 'div[role="dialog"]',
    closeModalButton: 'button[aria-label="Dismiss sign-in info."]',
    submitButton: 'button[type="submit"]',
    calendarInput: 'div[data-testid="searchbox-dates-container"]',
    calendarDay: 'td[role="gridcell"]',
    pageTitle: 'h1',
    pageContent: 'body',
    threeStarsIcon: 'div[aria-label="3 out of 5"]',
    fiveStartSideMenuFilter: 'div[data-filters-item="class:class=5"]',   

}

export class DashboardPage {

    clickSideMenuFilter(value) {
        cy.contains(value)
            .click({ force: true })
        return this;
    }

    checkPageNotContainsElement() {
        cy.get(dashboardPageLocators.threeStarsIcon)
            .should('not.exist');
        return this;
    }

    checkPageContent(value) {
        cy.get(dashboardPageLocators.pageContent)
            .should('contain', value)
        return this;
    }

    chooseCurrentAndPlusTwoDayDate() {
        const today = new Date();
        const todayFormatted = `${today.getDate()}`;
        // choosing today date in calendar
        cy.get(dashboardPageLocators.calendarDay).contains(todayFormatted).click({ force: true });        
        // choosing +2 days date in calendar
        const twoDaysFromNow = new Date(today);
        twoDaysFromNow.setDate(today.getDate() + 2);
        const twoDaysFromNowFormatted = `${twoDaysFromNow.getDate()}`;
        cy.get(dashboardPageLocators.calendarDay).contains(twoDaysFromNowFormatted).click({ force: true });
        return this;
    }

    openCalendar() {
        cy.get(dashboardPageLocators.calendarInput)
            .should('be.visible')
            .click();
        return this;
    }

    clickSubmitButton() {
        cy.get(dashboardPageLocators.submitButton)
            .should('be.visible')
            .click();
        return this;
    }    

    fillLocationInput(value) {
        cy.get(dashboardPageLocators.locationInput)
            .should('be.visible')
            .click()
            .clear()
            .type(value, '{enter}');
        return this;
    }

    checkWelcomeModal() {
        cy.get(dashboardPageLocators.signInModal).then(modal => {
            if (modal.length > 0) {
                cy.get(dashboardPageLocators.closeModalButton).should('be.visible').click(); 
            }
        });
        return this;
    }





}
const signInPageLocators = {
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    pageTitle: 'h1',
    submitButton: 'button[type="submit"]',
    error: '#username-note',
    pageContent: 'div.app',
    

}

export class SignInPage {

    checkPageContent(value) {
        cy.get(signInPageLocators.pageContent)
            .should('contain', value)
        return this;
    }

    checkError(value) {
        cy.get(signInPageLocators.error)
            .should('contain', value)
        return this;
    }

    clickSubmitButton() {
        cy.get(signInPageLocators.submitButton)
            .should('be.visible')
            .click();
        return this;
    }

    fillPasswordInput(enterPassword) {
        cy.get(signInPageLocators.passwordInput)
            .filter(':visible')
            .click()
            .clear()
            .type(enterPassword);
        return this;
    }

    fillEmailInput(enterEmail) {
        cy.get(signInPageLocators.emailInput)
            .filter(':visible')
            .click()
            .clear()
            .type(enterEmail);
        return this;
    }

}
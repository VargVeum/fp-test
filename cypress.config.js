const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
      },
      baseUrl: "https://www.booking.com/",
      viewportHeight: 900,
      viewportWidth: 1440,
      defaultCommandTimeout: 25000,
      pageLoadTimeout: 50000,
      requestTimeout: 30000,
      responseTimeout: 30000,
      specPattern: "cypress/e2e/tests/",
      downloadsFolder: "cypress/downloads",
      chromeWebSecurity: false, 
      ensureScrollable: false,
      numTestsKeptInMemory: 1,
      retries: {
        runMode: 1,
        openMode: 0,
      },
      parseSpecialCharSequences: false
    }    
})



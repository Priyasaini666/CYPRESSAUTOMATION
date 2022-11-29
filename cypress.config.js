const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    responseTimeout: 60000,
    
      viewportHeight: 800,
viewportWidth: 1200, 
baseUrl:"http://www.amazon.ca"   
  },
});

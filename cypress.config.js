// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     baseUrl: 'https://parabank.parasoft.com/parabank',
//     supportFile: 'cypress/support/e2e.ts',
//     specPattern: 'cypress/e2e/**/*.cy.ts',
//     screenshotsFolder: 'cypress/screenshots',
//     screenshotOnRunFailure: true, // Takes a screenshot on failure
//   },

//   reporter: 'mochawesome',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     overwrite: false,
//     html: false,
//     json: true,
//   },

// });


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true, // Takes a screenshot on failure
  }
});


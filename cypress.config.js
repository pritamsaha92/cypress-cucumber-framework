const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  watchForFileChanges: true,
  experimentalWebKitSupport: true,
  // screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Pritam Cypress Tests",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
  // retries : 2,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/*.feature",
    // baseUrl: "http://localhost:8081/",
    // excludeSpecPattern: ["*.js"],
  },
});



// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require ("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

// module.exports = defineConfig({
//   experimentalWebKitSupport: true,
//   reporter: "cypress-multi-reporters",
//   reporterOptions: {
//     configFile: "reporterconfig.json",
//   },
//   chromeWebSecurity: false,
//   video: true,
//   e2e: {
//     async setupNodeEvents(on, config) {
//       // implement node event listeners here
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)]
//       })
//       on("file:preprocessor", bundler)
//       await addCucumberPreprocessorPlugin(on, config)
//       return config
//     },  
//   specPattern: "**/*.feature",
//   // baseUrl: "http://localhost/siacloud/gate/login"
//   },
// });
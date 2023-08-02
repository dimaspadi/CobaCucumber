// original code of cypress.config.js
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
// original code of cypress.config.js

// ------------------------------------------------------------------------------------------------------------------------- //
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
  
async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
      
  on(
    "file:preprocessor",
         createBundler({
         plugins: [createEsbuildPlugin(config)],
        })
      
  );
  
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
  
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://google.co.id/",
    specPattern: "cypress/e2e/bdd-cucumber/features/*.feature",
    excludeSpecPattern: [
      "*.js",
      "*.md"
    ],
    chromeWebSecurity: false,
    projectId: "bfi83g",
    supportFile: false,
    setupNodeEvents
  }
  
})
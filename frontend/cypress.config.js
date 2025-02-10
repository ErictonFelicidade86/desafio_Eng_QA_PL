const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true, 
    videoCompression: 32,
    screenshotOnRunFailure: false,
    baseUrl: 'https://jessikaaguiar.github.io/forms-qa',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    setupNodeEvents(on, config) {},
  },
  video: true, 
  videoCompression: 32,
  viewportWidth: 1200,
  viewportHeight: 800,
});

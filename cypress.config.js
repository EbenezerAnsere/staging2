const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const path = require("path")

module.exports = defineConfig({
  projectId: '11wbmp',

	env: {
        URL : "https://amap-staging.amalitech-dev.net"
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here

			on('file:preprocessor', cucumber());
			allureWriter(on, config);
			return config;
			
		},
		video: true,
		specPattern: 'cypress/e2e/**/*.feature',
		experimentalStudio: true,
		pageLoadTimeout: 60000,
		defaultCommandTimeout: 60000,
		screenshotOnRunFailure: true,
		screenshotsFolder: "cypress/screenshots",
		waitForAnimations: true,
		supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
		downloadsFolder: "cypress/downloads",
		viewportHeight: 900,
		viewportWidth: 1300,
		chromeWebSecurity: true,
		allowEpty: true,
        retries: {
			runMode: 3,
			openMode: 1
		},
		resolve: {
			alias: {
				"@PageObject": path.resolve(__dirname, "PageObject")
			}
		}
		
	},
});









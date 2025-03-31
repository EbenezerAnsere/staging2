const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: '11wbmp',

	// env: {
    //     URL : "https://amap-staging.amalitech-dev.net"
	// },

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here

			on('file:preprocessor', cucumber());
			
		},
		video: true,
		specPattern: 'cypress/e2e/**/*.feature',
		experimentalStudio: true,
		
		pageLoadTimeout: 60000,
		defaultCommandTimeout: 60000,

		viewportHeight: 900,
		viewportWidth: 1300,

		
	},
});









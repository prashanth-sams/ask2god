const {defineConfig} = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
    reporter: 'mochawesome',
    e2e: {
        async setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            const bundler = createBundler({
                plugins: [createEsBuildPlugin(config)],
            });
            on('file:preprocessor', bundler);
            await addCucumberPreprocessorPlugin(on, config);
            return config;
        },
        specPattern: 'cypress/e2e/**/*.feature',
        baseUrl: "http://localhost:3000",
        defaultCommandTimeout: 40000,
        pageLoadTimeout: 20000,
        responseTimeout: 30000,
        retries: 1,
        screenshotOnRunFailure: true,
        video: true,
        videoUploadOnPasses: false,
        screenshotsFolder: "cypress/screenshots",
        videosFolder: "cypress/videos",
        fixturesFolder: "cypress/fixtures"
    },
    
});
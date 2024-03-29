module.exports = {
    "setupFilesAfterEnv": [ "<rootDir>/__mocks__/setup.js" ],
    "verbose": true,
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    "collectCoverageFrom": [
        "src/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!src/*.{js,jsx}",
        "!src/docs/**",
    ],
    "testMatch": [
      "**/*.test.(js|jsx)"
    ],
    "roots": [
      "./src"
    ],
    "moduleNameMapper": {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "testEnvironment": "./custom-jest-environment.js"
};
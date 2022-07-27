module.exports = {
    displayName: {
        name: 'mywebpackwithjest',
        color: 'blue'
    },
    // transformIgnorePatterns: [
    //     "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
    // ],
    preset: "ts-jest",
    coverageDirectory: "./coverage",
    // testMatch: [
    //     "**/?(*.)spec.ts"
    // ],
    resetMocks: true,
    clearMocks: true
}
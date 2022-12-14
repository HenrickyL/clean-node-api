/*
* For a detailed explanation regarding each configuration property and type check, visit:
* https://jestjs.io/docs/configuration
*/
export default {
  roots: ['<rootDir>/src'],
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  testEnvironment: 'node',

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "v8",
  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};

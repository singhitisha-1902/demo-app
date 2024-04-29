
module.exports = {
    collectCoverageFrom: ['src/**/*.js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    //   '^.+\\.css$': 'jest-transform-css',
      "^.+\\.css$": "jest-css-modules-transform"
    },
    testEnvironment: 'jsdom',
    rootDir: './',
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage/unit-tests',
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    testMatch: ['**/*.test.js'],
    verbose: true,
    resetMocks: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {

 '\\.(svg|css|scss)$':'babel-jest',  
 '^react-icons(.*)$': '<rootDir>/node_modules/react-icons$1',
      // '^UserManagement$': '<rootDir>/src/components/UserManagement.js',
    resolver: 'jest-resolver'

    },
  };

 
  
  
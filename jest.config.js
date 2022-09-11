module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test/unit'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/**'],
  coveragePathIgnorePatterns: ['node_modules'],
  setupFiles: ['<rootDir>/.jest/envVars.ts'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}

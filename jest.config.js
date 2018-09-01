module.exports = {
  cacheDirectory: './jest-temp',
  automock: true,
  timers: 'fake',
  setupFiles: [
    '<rootDir>/jest/requestAnimationFrame.js',
    '<rootDir>/jest/setup.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: [],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  unmockedModulePathPatterns: [
    'node_modules/enzyme',
    'node_modules/enzyme-to-json',
    'node_modules/react',
    'node_modules/react-dom',
    'node_modules/jest-mock-axios',
    'node_modules/@babel/polyfill'
  ],
  reporters: [
    "default",
    "jest-junit"
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-7-jest',
  },
  moduleNameMapper: {
    "^client": "<rootDir>/src/client"
  }
};

const packageJSON = require('../../package.json');

module.exports = {
  ...packageJSON.jest,
  rootDir: '../../',
  testMatch: ['<rootDir>/functional-tests/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-puppeteer',
};

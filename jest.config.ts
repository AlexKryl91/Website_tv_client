import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@locales/(.*)$': '<rootDir>/src/locales/$1',
    '^@img/(.*)$': '<rootDir>/public/img/$1',
    '^@icons/(.*)$': '<rootDir>/public/icons/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
  },

  testEnvironment: 'jsdom',
};

export default createJestConfig(config);

import type { Config } from 'jest';

const config: Config = {
  // Coletar informações de cobertura enquanto os testes são executados
  collectCoverage: true,

  // Diretório onde os arquivos de cobertura serão armazenados
  coverageDirectory: 'coverage',

  // Provedor de cobertura a ser utilizado
  coverageProvider: 'v8',

  // Configuração para transformar arquivos TypeScript usando ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Usar o preset ts-jest para configurar o Jest para trabalhar com TypeScript
  preset: 'ts-jest',

  // O ambiente em que os testes serão executados (neste caso, ambiente Node.js)
  testEnvironment: 'node',

  // Extensões de arquivos que Jest deve reconhecer
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],

  // Outras configurações opcionais, como o arquivo de setup
  // setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default config;

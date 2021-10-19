module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: ['graphql', '@typescript-eslint', 'prettier', 'deprecation'],
  parser: '@typescript-eslint/parser',
  // https://stackoverflow.com/a/64488474/10876256
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        // for eslint-plugin-deprecation
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {
    'prettier/prettier': 'warn',
    'deprecation/deprecation': 'warn',
    'no-console': 'warn',
    'no-alert': 'warn',
    'object-shorthand': 'warn',
    curly: 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('./src/generated/graphql.schema.json'),
      },
    ],
  },
};

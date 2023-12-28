module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'standard-jsx',
    'standard-react',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/jsx-pascal-case': [2, { allowNamespace: true, allowAllCaps: true }]
  }
}

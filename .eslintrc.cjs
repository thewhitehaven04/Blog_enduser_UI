module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'standard-jsx',
        'standard-react',
        'standard-with-typescript',
        'prettier'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off',
        'react/jsx-pascal-case': [2, { allowNamespace: true, allowAllCaps: true }]
    }
}

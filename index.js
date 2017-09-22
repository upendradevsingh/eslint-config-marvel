{
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": ["airbnb"],
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "createClass": "createClass",
            "pragma": "React",
            "version": "16.0"
        },
        "import/resolver": {
            "webpack": { "config": "webpack.config.js" },
            "babel-module-alias": {}
        }
    },
    "rules": {
        "comma-dangle": 0,
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }]
    }
}

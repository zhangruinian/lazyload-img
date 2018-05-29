module.exports = {
    "extends": ["standard"],
    "globals": {
        'IntersectionObserver': true
    },
    "rules": {
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        "space-before-function-paren":[0],
        "no-console": [0],
        "consistent-return": [0],
        "no-param-reassign": [0],
        "semi": [
            "error",
            "never"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "eol-last": [
            "error",
            "never"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "no-use-before-define": [0],
        "camelcase": [0],
        "no-return-assign": [0],
        "no-multi-assign": [0],
        "no-mixed-operators": [0],
        "curly": ["error", "all"],
        "import/no-named-as-default": [0],
        "import/no-named-as-default-member": [0],
        "class-methods-use-this": [0],
        "no-plusplus": [0]
    }
};

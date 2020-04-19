module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-console": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "newline-before-return": "error",
    "import/newline-after-import": 0,
    "no-use-before-define": 0,
    "max-len": ["error", { code: 140 }],
    "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0
  }
};

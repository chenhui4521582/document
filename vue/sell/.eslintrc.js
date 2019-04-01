module.exports = {
  root: true,
  env: {
    node: true
  },
<<<<<<< HEAD
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier", "vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
=======
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
>>>>>>> d50bfcc43746ea5ba9f1c88b0027120274183604

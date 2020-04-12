# cra-hypercore-8-starter
An ejected create react app for hypercore 8 starter

## Changes
1. `yarn add babel-plugin-module-resolver -D`
2. in babel aliased `sodium-native` for `@geut/sodium-native-plus`
3. 🍾

Since it's already bundled with browserify, you can post right to dat project.

MIT

"babel": {
    "presets": [
      "@babel/env",
      "@babel/react"
    ],
    "plugins": [
      [
        "module-resolver",
        {
          "alias": {
            "sodium-native": "@geut/sodium-javascript-plus",
            "sodium-universal": "@geut/sodium-javascript-plus"
          }
        }
      ],
      [
        "@babel/plugin-proposal-export-default-from"
      ],
      [
        "@babel/plugin-syntax-dynamic-import"
      ],
      [
        "@babel/plugin-transform-runtime",
        {
          "regenerator": true
        }
      ]
    ]
  }
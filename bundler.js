var fs = require("fs");
var browserify = require("browserify");
var path = require('path');

var babelify = require("babelify");

browserify(path.join(__dirname, "src/index.js"))
  .transform(babelify, {
  	// global: true,
  	// ignore: /\/node_modules\/(?!app\/)/,
  	presets: [
  		"@babel/preset-env", 
  		"@babel/react"
  	],
  	plugins: [
      [
        "@babel/plugin-proposal-export-default-from"
      ],
      [
        "@babel/plugin-syntax-dynamic-import"
      ],
    ]
  })
  .bundle().pipe(process.stdout);
  // .pipe(fs.createWriteStream("./public/bundle.js"));
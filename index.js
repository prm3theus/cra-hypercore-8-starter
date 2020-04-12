var babelify = require('babelify')
var reactify = require('reactify')

// var budo = require('budo').cli(args, {
//   // additional overrides for our custom tool
//   pushstate: true,
//   browserify: {
//     transform: babelify
//   }
// })

var budo = require('budo')
// var babelify = require('babelify')

budo('./src/index.js', {
  live: true,             // live reload
  stream: process.stdout, // log to stdout
  port: 8000,             // use this as the base port
  browserify: {
    transform: babelify   // use ES6
  }
})
.on('connect', function(ev) {
  //...
  console.log(ev)
})
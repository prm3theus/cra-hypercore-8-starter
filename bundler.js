require('budo').cli(process.argv.slice(2), {
  pushstate: true,
  browserify: {
    transform: [
    	['browserify-css'],
    	['babelify', {
        	global: true,
        	only: [/(\/src|node_modules\/noise-protocol|node_modules\/simple-hypercore-protocol|node_modules\/hmac-blake2b)/]
      	}],
    ]
  }
})
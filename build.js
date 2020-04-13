const babelConfig = require('./babel.config.json')

babelConfig.global = true
babelConfig.only = [/(\/src|node_modules\/noise-protocol|node_modules\/simple-hypercore-protocol|node_modules\/hmac-blake2b)/]

// clean existin bundle
require('rimraf')('./public/js', () => {
    // create fresh directory
    require('mkdirp')('./public/js', (err) => {
        if (err) {
            console.error(err);
        } else {
            require('browserify')
	            ('src/index.js')
	            .transform('babelify', babelConfig)
	            .bundle()
	            .pipe(require("fs").createWriteStream('public/js/bundle.js'))

            console.log('Bundle Complete')
        }
    })
})
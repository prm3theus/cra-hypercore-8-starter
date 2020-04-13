# cra-hypercore-8-starter
An ejected create react app hypercore 8 starter used for dweb development and distributed in-browser support. Added the needed babel plugins / aliases to speedup p2p dev. Might add networking as a default too..

## How to use
The project uses [budo](https://github.com/mattdesl/budo) for rapid server prototyping. It can also bundle your project using straight browserify and deploy to [dat](https://dat.foundation/). 

### install 
run `$ yarn # install deps`

then, either

### Bundle for local dev
run `$ yarn bundle`

### Build & deploy to dat
run `$ yarn share`

## What does this mean for dweb development?
Before, dweb apps needed to live in browsers that supported certain p2p protocols. Now, with a simple proxy server with something like [hyperswarm](https://github.com/RangerMauve/hyperswarm-web), hypercore 8 comes to the browser, data can now get replicated cross browser sessions with minimal infrastructure.

## What changes were made for this to work?
Thanks to this [project](https://github.com/tinchoz49/workaround-hypercore8-browser)
1. `yarn add babel-plugin-module-resolver -D`
2. in babel config, aliased `sodium-native` for `@geut/sodium-native-plus` so crypto primitives are supported
3. transpile 🍾🍾🍾

MIT

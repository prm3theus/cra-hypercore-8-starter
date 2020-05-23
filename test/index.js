const ram = require('random-access-memory')
const replicate = require('@hyperswarm/replicator-web')
const hypercore = require('hypercore')

if(!process.argv[2]){
	throw new Error('Please include a key.')
}
const key = Buffer.from(process.argv[2], 'hex')
console.log(key)

const feed = key ? hypercore(ram, key, {valueEncoding: 'json'}) : hypercore(ram, {valueEncoding: 'json'})

feed.on('ready', () => {
	console.log(`Using Room: ${feed.key.toString('hex')}`)
	replicate(feed, { live: true, wsProxy: 'ws://localhost:4977'})
})

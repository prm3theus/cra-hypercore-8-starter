const hypercore = require('hypercore')
const ram = require('random-access-memory')
// const replicate = require('@hyperswarm/replicator-web')
const hyperswarm = require('hyperswarm-web')
const pump = require('pump')

const IS_HOST = process.argv.length > 2 ? false : true
const key = !IS_HOST && Buffer.from(process.argv[2], 'hex')
console.log(`HOST: ${IS_HOST}`)
const feed = key ? hypercore(ram, key, {valueEncoding: 'json'}) : hypercore(ram, {valueEncoding: 'json'})

const swarm = hyperswarm({
	wsProxy: 'ws://localhost:4977'
})

// const replicate = require('@hyperswarm/replicator-web')

// feed.on('ready', () => {
// 	replicate(feed, { announce: true, wsProxy: 'ws://localhost:4977' })
// })

feed.on('ready', () => {
	console.log('ready')

	swarm.join(feed.discoveryKey, {
		lookup: true,
		announce: true
	})

	console.log(`using key: ${feed.key.toString('hex')}`)
	console.log(`using discovery key: ${feed.discoveryKey.toString('hex')}`)

	// swarm = replicate(feed, { announce: true, wsProxy: 'ws://localhost:4977' })

	swarm.on('connection', (socket, details) => {
	  console.log('new connection!')

		pump(socket, feed.replicate(IS_HOST), socket)
	})

	feed.createReadStream( { live: true } ).on('data', (data) => {
		console.log('data')
		console.log(data)
	})
	
})

let i=0

IS_HOST && setInterval(() => feed.append({hi: IS_HOST + i++}), 1000)

feed.createReadStream({ live: true }).on('data', (data) => console.log(data))

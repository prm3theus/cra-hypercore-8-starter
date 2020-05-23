const hypercore = require('@geut/hypercore-promise')
const ram = require('random-access-memory')
const feed = hypercore(ram, {valueEncoding: 'json'})
const pump = require('pump')
// todo
// const replicate = require('@hyperswarm/replicator')
// const replicate = require('@hyperswarm/replicator-web')

const hyperswarm = require('hyperswarm-web')

const swarm = hyperswarm({
	wsProxy: 'ws://localhost:4977'
})

feed.on('ready', () => {
	swarm.join(feed.discoveryKey,{
		lookup: true,
		announce: true
	})
	console.log(`Using discovery key: ${feed.discoveryKey.toString('hex')}`)
	console.log(`Using key: ${feed.key.toString('hex')}`)
	// swarm = replicate(feed, { live: true, announce: true, wsProxy: 'ws://localhost:4977'})
	swarm.on('connection', (socket, details) => {
		// console.log(connection)
		pump(socket, feed.replicate(true), socket)
	})
})

// listen on append events
feed.on('append', async () => {
  console.log(await feed.head(0))
})

export default feed
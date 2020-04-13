const hypercore = require('@geut/hypercore-promise')
const ram = require('random-access-memory')
const feed = hypercore(ram, {valueEncoding: 'json'})

// listen on append events
feed.on('append', async () => {
  console.log(await feed.head(0))
})

export default feed
const hypercore = require('@geut/hypercore-promise');
const feed = hypercore('./my-first-dataset', {valueEncoding: 'utf-8'})

export default feed
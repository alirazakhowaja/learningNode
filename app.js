const _ = require('lodash')

const items = [1,[1,2,[3,[4]]]]
console.log(items)
const newItems = _.flattenDeep(items) //FlattenDeep makes it all one array
console.log(newItems)
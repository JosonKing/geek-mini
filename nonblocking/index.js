const glob = require('glob')

console.time('glob')
var result = glob.sync('**/*.js')
console.timeEnd('glob')
console.log(result)
console.log('end test')

// console.time('glob')
// glob('**/*.js', (err, res) => {
//   console.log(res)
// })
// console.timeEnd('glob')
// console.log('end test')
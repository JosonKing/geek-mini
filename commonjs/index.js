console.log('before require')
var lib = require('./lib')
console.log('after require')
console.log(lib)
lib.additional = 'additional test'
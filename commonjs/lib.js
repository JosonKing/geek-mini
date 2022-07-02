console.log('hello lib')

exports.hello = 'world'

exports.hi = {hello: 'world'}

exports.add = function(a, b) {
  return a + b
}

setTimeout(() => {
  console.log(exports)
}, 2000);

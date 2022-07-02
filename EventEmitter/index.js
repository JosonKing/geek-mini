const messages = require('./lib')

messages.addListener('newMessage', (event) => {
  console.log(event.text)
})
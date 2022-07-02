const EventEmitter = require('events')

class Messages extends EventEmitter {
  constructor() {
    super()
    setInterval(() => {
      this.emit('newMessage', {text: 'hello, ' + Math.random()})
    }, 2000);
  }
}

const messages = new Messages()

module.exports = messages
// var playerAction = process.argv[process.argv.length - 1]

const game = require('./lib')

let winCount = 0
let loseCount = 0
process.stdin.on('data', e => {
  const playerAction = e.toString().trim()
  const result = game(playerAction)
  
  if (result === 1) {
    loseCount++
  }

  if (result === -1) {
    winCount++
  }

  if (loseCount >= 2) {
    console.log('In the end you lose')
    process.exit()
  }

  if (winCount >= 2) {
    console.log('In the end you won')
    process.exit()
  }
})
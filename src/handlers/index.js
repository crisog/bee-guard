// const getHoneyFlow = require('./getHoneyFlow')
const address = require('./address')
const help = require('./help')
const pollen = require('./pollen')
const brightid = require('./brightid')
const { verifyDiscourse, checkDiscourse } = require('./discourse')
const mycred = require('./mycred')

const handlers = new Map([
  ['address', address],
  ['help', help],
  ['pollen', pollen],
  ['brightid', brightid],
  ['verify-discourse', verifyDiscourse],
  ['check-discourse', checkDiscourse],
  ['mycred', mycred],
])

module.exports = handlers

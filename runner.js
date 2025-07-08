//For Local Testing:

//import required modules
var gas = require('gas-local')

require('./src/code')
require('./test/testCode')

//attach your mocks to globalThis here
globalThis.Logger = gas.globalMockDefault.Logger

//call your test functions here
globalThis.testFunction()
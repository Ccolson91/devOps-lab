// port
const PORT = process.env.PORT || 6001

// dependencies 
const express = require('express')
const app = express()
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '3643f04951734db58d69c2ff01abad2c',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record generic message and send to rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => {
  try{
    nonExistentFunction()
  } catch (error) {
    rollbar.info('That function does not exist')
    res.send('Someone tapped the API')
  }
})




// running
server.listen(PORT, () => console.log(`This server is running on port number ${PORT}`))
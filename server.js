// port
const PORT = process.env.PORT || 6001

// dependencies 
const express = require('express')
const server = express()







// running
server.listen(PORT, () => console.log(`This server is running on port number ${PORT}`))
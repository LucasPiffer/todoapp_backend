const server = require('./config/server.js')
require('./config/db')

require('./config/routes')(server)
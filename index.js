'use-strict'

const app = require('./app.js');
const server = require('http').Server(app);
var port = process.env.PORT || 3008;

server.listen(port,function(){
	console.log(`Servidor http://localhost escuchando en el puerto ${port}`);
});
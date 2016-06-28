var express = require('express')
var middlewear = require('./middlewear.js')
var app = express();
var PORT = 3000;

app.use(middlewear.logger);

app.get('/about', middlewear.requireAuthentication, function (req, res) {
	res.send('About Us!');
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT + ".");
});
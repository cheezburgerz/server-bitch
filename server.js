var express = require('express')
var app = express();
var PORT = 3000;

var middlewear = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!')
		next()
	},
	logger: function (req, res, next) {
		console.log('Request at ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middlewear.logger);

//app.use(middlewear.requireAuthentication);

app.get('/about', middlewear.requireAuthentication, function (req, res) {
	res.send('About Us!');
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT + ".");
});
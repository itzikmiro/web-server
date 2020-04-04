var express = require('express');
var app = express();
var PORT = 3000;
var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('privete route hit!');
		next();
	},
	logger: function (req, res, next) {	
		console.log('Reqest: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,function(req, res) {
	res.send('Abount Us');
});


app.use(express.static(__dirname + '/public'));



app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});
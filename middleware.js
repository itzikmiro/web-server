
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

module.exports = middleware;
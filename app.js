var express = require('express');
var app = express();
var parser = require('ua-parser-js');
var PORT = process.env.PORT || 3000;

app.get('/', function(req,  res){

	var ip = req.ip;
	var language = req.headers['accept-language'].split(",")[0];
	var software = parser(req.headers['user-agent']);

	var json = {

		"ip" : ip,
		"language": language,
		"software": software.os.name + ", " + software.os.version
	}
	
	res.send(JSON.stringify(json));
});

app.listen(PORT);
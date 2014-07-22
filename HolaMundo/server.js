// Pasamos a la variable 'http' el módulo 'http'. Equivalente al "import" en python
var http = require('http');

var miPeticion = function (req, res){
	res.writeHead('200',{'content-type': 'text/plain'});
	if (req.url == '/'){
		res.end('Hola, Bienvenido Maginkgo al real time!');
	}
	if (req.url == '/ejemplos'){
		res.end('Hola, aca van los ejemplos!');
	}	
};

var server = http.createServer(miPeticion).listen(3000);
console.log('Server running at http://localhost:3000');

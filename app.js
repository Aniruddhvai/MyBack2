const http =  require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

 	const url = req.url;
	const method = req.method;

	if(url === '/')
	{
		res.write('<html>');
		res.write('<head><title> Enter Message </title></head>');
		res.write('<body><form action= "/message" method="POST"><input type = "text" name = "myMessage"><button type = "submit">Submit</button></form></body>');
		res.write('</html>');
		return res.end();
		}
	
		if(url === '/message' && method === 'POST'){
			fs.writeFileSync('myMsg.txt' , 'DUMMy')
			res.statusCode = 302;
			res.setHeader = ('Location ' , '/')
			return res.end();
		}

		res.setHeader('Content-Type','text/html');
		res.write('<html>');
		res.write('<head><title> First Page </title></head>');
		res.write( '<body><h1>Hello from my node.js Server </h1></body>');
		res.write('</html>');
		return res.end();
	

});

server.listen(4000);

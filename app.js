const http =  require('http');

const server = http.createServer((req,res) => {

 	res.write('Aman Vaishnav')
	res.end(); 
});

server.listen(4000);

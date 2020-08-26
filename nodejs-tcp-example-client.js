var net = require('net');
var client = new net.Socket();
client.connect(6991, '233.1.2.6', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.RSN');
});
var i = 0;
client.on('data', function(data) {
	console.log('Received: ' + data);
	i++;
	if(i==2)
		client.destroy(); 
});
client.on('close', function() {
	console.log('Connection closed');
});
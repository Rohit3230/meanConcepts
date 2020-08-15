// code for create tcp server and listen ip, get data packet and put it in local file as well as datebase.
var net = require('net');
const fs = require('fs');
var textChunk = '';
var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.on('data', function(data){
		console.log('data***',data);
		textChunk = data.toString('utf8');
		console.log('textChunk****',textChunk);

		fs.appendFile('message.txt', textChunk+ "\n", function (err) {
			// if (err) throw err;
			console.log('Saved!');
		});


		runQuery('INSERT INTO `msgTest`(`msg`) VALUES (?)', [textChunk], function (err, result) { 
			if(
				err
			){
				console.error('RUN QUERY err******', JSON.stringify(err)); 
			}else{ 
				console.error('RUN QUERY result******', JSON.stringify(result)); 
			}
		});  

		socket.write(textChunk);
	});
});
server.listen(52275, '127.0.0.1');


var mysql = require('mysql');
var dbPool = mysql.createPool({
    host: "remotemysql.com",
    user: "NvlR1F3wgJ",
    password: "jd1LzffFGc",
    database: "NvlR1F3wgJ",
    port : 3306
});

var runQuery = function runQuery(query, paramArr, callback) { 
    if (typeof paramArr !== 'object')
        throw new Error("ParamArr not passed"); 

    let stTime = new Date().getTime();

    dbPool.getConnection(function (err, conn) { 
        if (err) 
            return callback(err);
 
        conn.query(query, paramArr, function (err, queryResult) { 
            let endTime = new Date().getTime();
            console.log("Query time (ms )   =======> " + (endTime - stTime));
            conn.release();
            callback(err, queryResult);
        });

    });
};
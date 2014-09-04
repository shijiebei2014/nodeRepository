/**
 * Created by zhq on 14-7-16.
 */

//var http = require("http");
//var options = {
//    hostname: 'localhost',
//    port: 3000,
//    method: 'GET'
//};
//
///*
//* 相当于HttpRequest，想服务器发一个请求报文
//* */
//var req = http.request(options, function(res) {
//    console.log('STATUS: ' + res.statusCode);
//    console.log('HEADERS: ' + JSON.stringify(res.headers));
//    res.setEncoding('utf8');
//    res.on('data', function (chunk) {
//        console.log('BODY: ' + chunk);
//    });
//});
//
//req.on('error', function(e) {
//    console.log('problem with request: ' + e.message);
//});
//
//// write data to request body
//req.write('data\n');
//req.write('data\n');
//req.end()


var http = require('http');
var net = require('net');
var url = require('url');

// Create an HTTP tunneling proxy
var proxy = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay');
});
proxy.on('connect', function(req, cltSocket, head) {
    // connect to an origin server
    var srvUrl = url.parse('http://' + req.url);
    console.log("3.  The request is received! The request url is " + req.url);
    //若发生连接超时,可能的原因就是srvUrl的地址连接不到......
    var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, function() {
        cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
            'Proxy-agent: Node-Proxy\r\n' +
            '\r\n');
        srvSocket.write(head);
        srvSocket.pipe(cltSocket);
        cltSocket.pipe(srvSocket);

        console.log("4.  The pipe is connected!");
    });
});

// now that proxy is running
proxy.listen(1337, '127.0.0.1', function() {
    // make a request to a tunneling proxy
    console.log("1.  is listening at port 1337");
    var options = {
        port: 1337,
        hostname: '127.0.0.1',
        method: 'CONNECT',
        path: 'www.gu1234.com:80'//请求的地址
    };

    var req = http.request(options);
    req.end();
    console.log("2.  request is sending......");
    req.on('connect', function(res, socket, head) {
        console.log('5.  got connected!');

        // make a request over an HTTP tunnel
        socket.write('GET / HTTP/1.1\r\n' +
            'Host: www.google.com:80\r\n' +
            'Connection: close\r\n' +
            '\r\n');
        socket.on('data', function(chunk) {
            console.log("6.  获得数据:\r\n" + chunk.toString());
        });
        socket.on('end', function() {
            proxy.close();
        });
    });
});


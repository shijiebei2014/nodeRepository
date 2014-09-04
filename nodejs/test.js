/**
 * Created by zhq on 14-7-7.
 */


var http = require("http");
var url = require("url");
var util = require("util");
var queryString = require("querystring");
var dns = require("dns");

http.createServer(function(req, res){
    var path = queryString.parse(url.parse(req.url).query);

    res.writeHead(200, {"Content-Type": "text/plain"});

    if(path.domain && path.cb) {
        dns.lookup(path.domain, 4, function(err, address, family){
            if(err){//若接卸失败，抛出异常
                throw err;
            }
            else{//若解析成功，输出对应的ip地址
                console.log("resolve success! and The address is " + address);
                res.end(address);
            }
        });
    }
}).listen(3000);


//var util = require("util");
//
//var number = 1;
//var obj= {"name": "hello"};
//var str = "world";
//
///*
//* 将Number类型的,JSON类型的和String类型的数据,以指定的输出形式以String的形式输出
//* */
//var result = util.format("%d,%j,%s", number, obj, str);
//console.log(result);
//
//util.log("hello ! my log!")
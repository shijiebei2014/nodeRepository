/**
 * Created by dell on 2014/9/2.
 */

var cluster = require("cluster");
var http = require("http");
var cpuNum = require("os").cpus().length;

var workers = [];

/***
 *  如果是父进程(node mycluster.js),创建子进程调用node mycluster.js命令
 *  如果是子进程,开启一个端口为8000的web
 *  如果将子进程全部杀死,就没有web服务了,会执行父进程中的exit事件
 *
 */
if(cluster.isMaster){
    for(var i = 0; i < cpuNum; i++){
        cluster.fork();
    }

    cluster.on("exit", function(worker, code, signal){
        console.log(worker.process.pid + " is died!");
    });

} else {
    http.createServer(function(req, res){
        res.writeHead(200);
        res.end("hello world!" + cluster.worker.process.pid);
    }).listen(8000);
}
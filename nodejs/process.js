/**
 * Created by zhq on 14-7-11.
 */

//process.on('exit', function(code){
//
//    /*
//    * Therefore you must only perform synchronous operations in this handler.
//    * 因此，这个事件的回调函数里，执行执行同步的操作
//    * */
//    setTimeout(function(){
//        console.log("This will not run");
//    }, 0);
//s
//    console.log("About to exit with code:" + code);
//});

//从控制台里读取信息，并打印
//process.stdin.setEncoding("utf-8");
//
//process.stdin.on("readable", function(){
//    var chunk = process.stdin.read();
//
//    if(chunk != null){
//        process.stdout.write(chunk);
//    }
//});
//
//process.stdin.on("end", function(){
//    process.stdout.write("end");
//});

//var util = require("util");
//console.info("当前进程的标题:" + process.title);
//console.info("v8系统内存的使用情况:" + util.inspect(process.memoryUsage()));
//console.info("操作系统指令的集合:" + process.arch);
//console.info("node的版本:" + process.version);
//console.info("环境变量:" + util.inspect(process.env));

//process.stdin.resume();
////在控制台,按ctrl+c,就会执行;进行debug结束的时候,也会执行
//process.on("SIGINT", function(){
//    console.info("Got SIGINT.");
//});
//
////在控制台中，关闭窗口按钮,就会执行
//process.on("SIGHUP", function(){
//    console.info("Got SIGHUP");
//});
//
//process.on("SIGUSR1", function(){
//    console.info("SIGUSR1");
//});
//
////获得当前的目录
//console.info("current directory:" + process.cwd());

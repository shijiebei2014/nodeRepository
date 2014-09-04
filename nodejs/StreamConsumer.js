/**
 * Created by zhq on 14-7-17.
 */

var fs = require("fs");
var options = {
    flags: 'r',
    encoding: null,
    fd: null,
    mode: 0666,
    autoClose: true
};

var path = "D:/project/nodejs/test.html";
var readable = fs.createReadStream(path, options);//fs创建最原始的文件流

readable.on("readable", function(){
    console.log("1.  To begin read from the console.....");
    //与输入流能进行管道的，参数是输出流
    //readable.pipe(process.stdout);//异步输出
    var chunk;
    while(null !== (chunk = readable.read())){
        console.log(chunk.toString('utf-8', 0 , chunk.length));
    }
});

readable.on("data", function(chunk){
    //console.log("2.  Read from the console is " + chunk);

});


readable.on("end", function(){
    console.log("\n3.  Read from the console is end......");
});

readable.on("close", function(){
    console.log("4.  Read from the console is close.....");
});
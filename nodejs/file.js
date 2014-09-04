/**
 * Created by zhq on 14-7-9.
 */

var fs = require("fs");
var util = require("util");

fs.open("D:/project/nodejs/test.html", "r+",function(err, data){
    if (err) throw err;
    else
        fs.appendFile("D:/project/nodejs/test.html", "hello world", function (err) {
            if (err) throw err;
            console.log("read success!");
        });
} );

/*
* 传说中的文件监听器，监听文件修改的事件
*
fs.watchFile("D:/project/nodejs/test.html", function(curr, prev){
    console.log(util.inspect(curr, true));
    console.log("the current time is:" +  curr);
    console.log("the previous time is:" + prev);
});
*/
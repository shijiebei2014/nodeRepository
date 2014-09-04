/**
 * Created by zhq on 14-7-17.
 */

var net = require('net');

console.time("100-elements");

for(var i = 0; i < 100; i++){
    //console.log(i);
}

console.log("打印共耗时:");
console.timeEnd("100-elements");

/*
* 内部使用了util.inspect(obj)
* 如果不想引入util，则可以用console.dir来替代
* */
console.dir(net.connect(80, "www.gu1234.com"));
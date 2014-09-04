/**
 * Created by zhq on 14-7-18.
 */

var StringDecoder = require("string_decoder").StringDecoder;

var decoder = new StringDecoder("utf8");

var cent = new Buffer([0xE2, 0x82, 0xAC]);
console.log(decoder.write(cent));

//将字符串转成Buffer类型
var code = new Buffer("中国", "utf8");
console.log(code);

//将Buffer类型的转成字符串
console.log(code.toString("utf8", 0, code.length));

var str = "node.js";
var buf = new Buffer(str.length);

for(var i = 0; i < str.length; i++){
    //注意是charCodeAt方法,而不是charAt方法
    buf[i] = str.charCodeAt(i);
}

console.log(buf.toString("utf8", 0, str.length));

var obj = {
    "country" : "中国",
    "name" : "zhq"
};

var objString = JSON.stringify(obj);
var objBuffer = new Buffer(objString);

var objNew = JSON.parse(objBuffer.toString());
console.log(objNew.name + ":" + objNew.country);
/**
 * Created by zhq on 14-7-18.
 */

/**
 *为实现如何一种流,遵循以下三步
 *1.在子类中适当地扩展父类的方法(util.inherits方法可以实现继承)
 *2 在子类的构造方法里适当调用父类的构造方法
 *3.实现适当地方法
 */
var fs = require("fs");
var util = require("util");

var readable = fs.ReadStream;

//第一步
util.inherits(Counter, readable);

function Counter(opt) {
    readable.call(this, opt);
    this._max = 1000000;
    this._index = 1;
}
//第三步
Counter.prototype._read = function(){
    var i = this._index++;
    if(i > this._max){
        this.push(null);
    } else {
        var str = '' + i
        var buf = new Buffer(str, 'ascii');
        this.push(buf);//push什么信息,read就什么信息
    }
};
//第四步,使用
var options = {
    flags: 'r',
    encoding: null,
    fd: null,
    mode: 0666,
    autoClose: true
};
//nodejs获取文件的路径
var FILE_PATH = fs.realpathSync("./StreamConsumer.js");

var counter = new Counter(FILE_PATH, options);
var data = counter.read();
console.info(data.toString());


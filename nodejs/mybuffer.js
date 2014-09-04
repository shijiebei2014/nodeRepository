/**
 * Created by zhq on 14-7-21.
 */

/*
* 全局变量Buffer,不需要require
* */

var buf = new Buffer(1);

/*
* Buffer有两种最基本的方式来进行按下标来赋值
* 第一种是以十六进制的方式来赋值,选择用数组下标直接赋值
* 第二种是以字符串的方式来赋值,选择用write方法来赋值
* */
//buf[0] = 0x48;
////buf.write('H', 0);
//console.info(buf.toString());
/**************************************************************************/
//var strs =  'hello';
//var hexs = [];
////另外获得某个字符的编码的值比较好用的方法就是charCodeAt方法
//for(var i = 0; i < strs.length; i++){
//    hexs[i] = strs.charCodeAt(i);
//}
//buf = new Buffer(hexs);
//
//console.log(buf.toString());
/**************************************************************************/
console.info(Buffer.isBuffer('H'));

var str = '\u00bd + \u00bc = \u00be';

//类方法byteLength,仅仅是以字节的形式，位数的长度,即\u00bd和和\u00bc和\u00be,各占四个字符(\u表示以unicode编码的方式进行编码,默认编码是utf8,以两个字节表示一个字符)
//而String.length，即字符串的方法,是以编码之后，字符的长度,即\u00bd和\u00bc和\u00be都是一个字符,空格四个,加号和等号各一个
console.log(str + ": " + str.length + " characters, " +
    Buffer.byteLength(str, 'utf8') + " bytes");
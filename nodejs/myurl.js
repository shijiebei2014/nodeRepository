/**
 * Created by zhq on 14-7-21.
 */

var url = require('url');

//var path = 'http://localhost:8080/user?username=hello&pwd=123';
var path = '//foo/test';
/*
* url.parse()方法,第二个参数表示是否解析请求地址的参数,默认是false;若改为true,则表示自动解析请求参数(url.parse().query['参数名'])
* url.parse()方法,第三个参数表示slashesDenoteHost(是否很多个斜杠表示主机),默认是false
* 在绝对路径比如'http://localhost:8080/user?username=hello&pwd=123',设置第三个参数没有任何效果
* 在相对路径比如'//foo/test',设置flase,默认也是false,解析path,之后返回的对象,host:null,pathname://foo/test; 而设置为true时,host为foo;pathname为test
* */
var pathObj = url.parse(path, true, false);
//console.log(pathObj.query['username']);

console.log(pathObj.host);
console.log(pathObj.pathname);

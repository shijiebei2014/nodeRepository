/**
 * Created by zhq on 14-7-17.
 */

var dns = require("dns");

//将一个域名解析成ip地址
dns.lookup("www.twitter.com", 4, function(err, address, family){
    if(err){//若接卸失败，抛出异常
        throw err;
    }
    else{//若解析成功，输出对应的ip地址
        console.log("resolve success! and The address is " + address);
    }
});

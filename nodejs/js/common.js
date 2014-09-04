    /**
     * Created by zhq on 14-7-22.
     */

    /*
    * 为数字类型增加保留小数位几位
    * */
    if(!Number.prototype.toFixed()){
        Number.prototype.toFixed= function(num){
            with(Math)return round(this.valueOf()*pow(10,num))/pow(10,num);
        }
    }

    /*
    * 检测输入的数据是否符合格式或者范围
    * */
    function checkNumber(num, maxNum, isCheck){
        if(isCheck == false){
            return true;
        }
        var reg = /^\d+$/;//非负整数
        var reg2 = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;//正小数
        if(reg.test(num) || reg2.test(num)){
            var temp = parseFloat(num);
            if(temp > maxNum){
                return false;
            }
            return true;
        }
        else{
            return false;
        }
    }

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            if ( this === undefined || this === null ) {
                throw new TypeError( '"this" is null or not defined' );
            }

            var length = this.length >>> 0; // Hack to convert object.length to a UInt32

            fromIndex = +fromIndex || 0;

            if (Math.abs(fromIndex) === Infinity) {
                fromIndex = 0;
            }

            if (fromIndex < 0) {
                fromIndex += length;
                if (fromIndex < 0) {
                    fromIndex = 0;
                }
            }

            for (;fromIndex < length; fromIndex++) {
                if (this[fromIndex] === searchElement) {
                    return fromIndex;
                }
            }

            return -1;
        };
    }

    function isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    }
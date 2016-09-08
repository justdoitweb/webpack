
/*function prettyPrint(str){
    if(str === '' || str === null || str === false || typeof(str) === 'undefined'){
    	return '-';
    }else{
    	return str;
    }*/
//module.exports = prettyPrint;
var util= {}
util.checkMax= function (a , b){
   return a - b > 0 ? a : b;
}

util.prettyPrint= function(str){
	if(str === '' || str === null || str === false || typeof(str) === 'undefined'){
    	return '-';
    }else{
    	return str;
    }
}

util.remainWords= function(str){
	var _temp = 255 - str.length
	if(_temp < 0){
		return 0;
	}else{
		return _temp;
	}
}
module.exports = util;

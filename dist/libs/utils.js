// window.API_SERVICE_URL = window.API_SERVICE_URL || '';
window.API_SERVICE_URL = window.API_SERVICE_URL || 'http://localhost:8080';
var STORAGE_CONSTANTS = {
	USER_ID_KEY:'user_id',
	USER_NAME_KEY:'user_name',
	REGIST_MOBILE_NO_KEY:'regist_mobile_no_key',
	USER_IMG_KEY:'user_img',
	USER_CHOOSE_ADDRESS:'user_choose_address'
};

var MobileNoUtil = window.MobileNoUtil || (function(){
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	return {
		crypt:function(mobileNo){
			return mobileNo==undefined?mobileNo:mobileNo.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
		},
		validate:function(mobileNo){			
			return myreg.test(mobileNo);
		}
	}
})();

var LocalStorageUtil = window.LocalStorageUtil || (function(){
	
	var _set = function(key,value){
		window.localStorage.setItem(key,value);
	}
	
	var _get = function(key,defaultValue){
		return window.localStorage.getItem(key)||defaultValue;
	}
	
	var _remove = function(key){
		window.localStorage.removeItem(key);
	}
	
	return {
		set:_set,
		get:_get,
		remove:_remove
	}
})();

var CryptoUtils = window.CryptoUtils || (function(){
	var _getSha256 = function(text){
		try{
			var shaObj = new jsSHA("SHA-256", "TEXT");
			shaObj.update(text);
			var hash = shaObj.getHash("HEX");
			shaObj = null;
			return hash;
		}catch(e){
			console.log(e);
		}
	}
	
	var _getSha512 = function(text){
		try{
			var shaObj = new jsSHA("SHA-512", "TEXT");
			shaObj.update(text);
			var hash = shaObj.getHash("HEX");
			shaObj = null;
			return hash;
		}catch(e){
			console.log(e);
		}
	}
	
	return {
		getSha256:_getSha256,
		getSha512:_getSha512
	}
})();

var GetQueryString = window.GetQueryString || (function(){
		var _getQueryString = function (paramName) {
			var reg = new RegExp("(^|&)"+ paramName +"=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r==null){
				return null;
			}else{
				return r[2];
			}
		};

		return {
			getQueryString: _getQueryString
		}

	})();

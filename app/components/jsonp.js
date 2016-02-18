/*
* @Author: Administrator
* @Date:   2016-02-18 13:52:52
* @Last Modified by:   Administrator
* @Last Modified time: 2016-02-18 14:44:48
*/

(function(angular){
	'use strict';
	//创建一个模块
	var http=angular.module('myApp.service.jsonp',[]);
	//创建一个服务
	http.service('HttpService',['$window','$document',function($window,$document){
			this.jsonp=function(url,data,callback){
				//1.挂载函数
				var cbName='my_jsonp_cb_'+Math.random().toString().replace('.','');
				$window[cbName]=callback;
			  //2.处理data,拼接查询字符串
			  var queryString=url.indexOf('?')==-1?'?':'&';
			  for(var key in data){
			  	queryString += key +'=' + data[key] +'&';
			  }
			  //3.处理url
			  var url = url + queryString + 'callback='+cbName;
			  //4.创建script标签
			  var scriptEle=$document[0].createElement('script');
			  scriptEle.src=url;
			  //5.把script标签添加到html页面中
			  $document[0].body.appendChild(scriptEle);
			}
	}]);

})(angular);

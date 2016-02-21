/*
 * @Author: Administrator
 * @Date:   2016-02-18 13:52:52
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-02-21 09:57:36
 */

(function(angular) {
    'use strict';
    //创建一个模块
    var http = angular.module('myApp.service.jsonp', []);
    //创建一个服务
    http.service('HttpService', ['$window', '$document', function($window, $document) {
        this.jsonp = function(url, data, callback) {

            //1.处理data,拼接查询字符串
            var queryString = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                queryString += key + '=' + data[key] + '&';
            }

            //2.处理url
            var cbName = 'my_jsonp_cb_' + Math.random().toString().replace('.', '');
            var url = url + queryString + 'callback=' + cbName;

            //3.创建script标签
            var scriptEle = $document[0].createElement('script');
            scriptEle.src = url;

            //4.挂载函数
            //挂载函数必须写在append之前，不然append之后直接执行callback函数，就会找不到
            //为了解决页面中出现多次就jsonp请求，所以在执行完callback函数后要删除script标签
            $window[cbName] = function(data){
            	callback(data);
            	// 必须是执行完回调函数后才能删除标签
            	$document[0].body.removeChild(scriptEle);
            };
            //5.把script标签添加到html页面中
            $document[0].body.appendChild(scriptEle);
        }
    }]);

})(angular);

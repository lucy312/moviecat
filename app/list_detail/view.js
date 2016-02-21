/*
* @Author: Administrator
* @Date:   2016-02-21 10:12:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-02-21 12:13:06
*/

(function(angular) {
	'use strict';
	// 创建正在热映模块
	var module = angular.module('myApp.list_detail', ['ngRoute', 'myApp.service.jsonp'])
		// 配置模块路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'list_detail/view.html',
			controller: 'DetailController'
		});
	}]);
	//配置模块控制器
  module.controller('DetailController',[
  	'$scope',
  	'$routeParams',
  	'HttpService',
  	function($scope,$routeParams,HttpService){
  		var id=$routeParams.id
  	$scope.title='Loading...';
     $scope.data={};
     $scope.loading=false;
     HttpService.jsonp('http://api.douban.com/v2/movie/subject/'+id,{},function(data){
     	      $scope.data=data;
     	      $scope.title=$scope.data.title;
     	      $scope.loading=true;
     	      $scope.$apply();
     })
  }]);

})(angular);

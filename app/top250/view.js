(function(angular) {
    'use strict';
    // 创建正在热映模块
    var module = angular.module('myApp.top250', ['ngRoute','myApp.service.jsonp'])
        // 配置模块路由
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html',
            controller: 'Top250Controller'
        });
    }]);
    //配置模块控制器
    module.controller('Top250Controller', ['$scope','HttpService', function($scope,HttpService) {
    	$scope.title='';
    	$scope.message='';
    	$scope.subjects=[];
    	HttpService.jsonp('http://api.douban.com/v2/movie/top250',{},function(data){
          $scope.subjects=data.subjects;
          $scope.title=data.title;
          $scope.$apply();//重新同步绑定数据
    	})
    }]);
})(angular);

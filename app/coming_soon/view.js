(function(angular) {
    'use strict';
    // 创建正在热映模块
    var module = angular.module('myApp.coming_soon', ['ngRoute','myApp.service.jsonp'])
        // 配置模块路由
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/coming_soon', {
            templateUrl: 'coming_soon/view.html',
            controller: 'ComingSoonController'
        });
    }]);
    //配置模块控制器
    module.controller('ComingSoonController', ['$scope','HttpService', function($scope,HttpService) {
    	$scope.title='';
    	$scope.message='';
    	$scope.subjects=[];
    	HttpService.jsonp('http://api.douban.com/v2/movie/coming_soon',{},function(data){
          $scope.subjects=data.subjects;
          $scope.title=data.title;
          $scope.$apply();//重新同步绑定数据
    	})
    }]);
})(angular);

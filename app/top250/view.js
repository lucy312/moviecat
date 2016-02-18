(function(angular) {
    'use strict';
    // 创建正在热映模块
    var module = angular.module('myApp.top250', ['ngRoute', 'myApp.service.jsonp'])
        // 配置模块路由
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250/:page', {
            templateUrl: 'top250/view.html',
            controller: 'ComingSoonController'
        });
    }]);
    //配置模块控制器
    module.controller('ComingSoonController', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        function($scope, $route, $routeParams, HttpService) {
            var count = 10;
            var page = parseInt($routeParams.page);
            var start = (page - 1) * count;
            $scope.total = 0;
            $scope.page = page;
            $scope.pages = 0;
            $scope.title = '';
            $scope.message = '';
            $scope.subjects = [];
            HttpService.jsonp('http://api.douban.com/v2/movie/top250', { start: start, count: count }, function(data) {
                $scope.subjects = data.subjects;
                $scope.title = data.title;
                $scope.total = data.total;
                $scope.pages = Math.ceil(data.total / count);
                $scope.$apply(); //重新同步绑定数据
            })
            $scope.go = function(page) {
                if (page >= 1 && page <= $scope.pages) {
                    $route.updateParams({ page: page });
                }
            }
        }
    ]);
})(angular);

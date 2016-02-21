(function(angular) {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'myApp.list_detail',
        'myApp.moviecat',
        'myApp.directives'
    ])
    .constant('AppConfig',{
    	pageCount:10,
    	listUrl:'http://api.douban.com/v2/movie/',
    	detailUrl:'http://api.douban.com/v2/movie/subject/'
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }])
    .controller('SearchController',['$scope','$route',function($scope,$route){
    	$scope.input='';
    	$scope.search=function(){
    		$route.updateParams({category:'search',q:$scope.input});
    		$scope.input='';
    	}
    }]);
    // 用自定义angular属性指令的方法去实现以下功能，所以此段代码注释
    // .controller('AppController',['$scope','$location',function($scope,$location){
    // 	$scope.location=$location;
    //  $scope.$watch('location.path()',function(now){
    //    if(now.startsWith('/coming_soon')){
    //    	$scope.type='coming_soon';
    //    }else if(now.startsWith('/top250')){
    //    	$scope.type='top250';
    //    }else if(now.startsWith('/in_theaters')){
    //    	$scope.type='in_theaters';
    //    }
    //  });
    // }]);
})(angular);

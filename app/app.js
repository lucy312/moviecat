(function(angular) {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'myApp.moviecat',
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }]).
    controller('AppController',['$scope','$location',function($scope,$location){
    	$scope.location=$location;
     $scope.$watch('location.path()',function(now){
       if(now.startsWith('/coming_soon')){
       	$scope.type='coming_soon';
       }else if(now.startsWith('/top250')){
       	$scope.type='top250';
       }else if(now.startsWith('/in_theaters')){
       	$scope.type='in_theaters';
       }
     });
    }]);
})(angular);

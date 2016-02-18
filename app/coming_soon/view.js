(function(angular) {
    'use strict';

    var module = angular.module('myApp.coming_soon', ['ngRoute'])

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/coming_soon', {
            templateUrl: 'coming_soon/view.html',
            controller: 'ComingSoonController'
        });
    }]);

    module.controller('ComingSoonController', ['$scope', function($scope) {
    	console.log(2)
    }]);
})(angular);

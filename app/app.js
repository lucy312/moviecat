(function(angular){
	'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.in_theaters',
  'myApp.coming_soon',
  'myApp.top250'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters'});
}]);
})(angular);

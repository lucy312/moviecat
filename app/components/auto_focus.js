/*
 * @Author: Administrator
 * @Date:   2016-02-19 22:04:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-02-21 09:42:39
 */

(function(angular) {
    'use strict';
    angular.module('myApp.directives', [])
        .directive('autoFocus', ['$location', function($location) {
            return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
                link: function($scope, iElm, iAttrs, controller) {

                    $scope.$location = $location;
                    $scope.$watch('$location.path()', function(now) {
                        // 当path发生变化时执行，now是变化后的值
                        var aLink = iElm.children().attr('href');
                        var type = aLink.replace(/#(\/.+?)\/\d+/, '$1'); // /coming_soon
                        if (now.startsWith(type)) {
                            // 访问的是当前链接
                            iElm.parent().children().removeClass('active');
                            iElm.addClass('active');
                        }
                    });
                }
            };
        }]);
})(angular);

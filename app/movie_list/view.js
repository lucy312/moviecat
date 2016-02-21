//1、假数据绑定
// (function(angular) {
//     'use strict';
//     var data=[
//         {
//             "rating": {
//                 "max": 10,
//                 "average": 7.3,
//                 "stars": "40",
//                 "min": 0
//             },
//             "genres": [
//                 "剧情",
//                 "爱情",
//                 "科幻"
//             ],
//             "collect_count": 170589,
//             "casts": [
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/805.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/805.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/805.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1274235/",
//                     "id": "1274235",
//                     "name": "邓超"
//                 },
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/3083.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/3083.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/3083.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1274317/",
//                     "id": "1274317",
//                     "name": "罗志祥"
//                 },
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/47020.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/47020.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/47020.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1274494/",
//                     "id": "1274494",
//                     "name": "张雨绮"
//                 }
//             ],
//             "title": "美人鱼",
//             "original_title": "美人鱼",
//             "subtype": "movie",
//             "directors": [
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/47421.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/47421.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/47421.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1048026/",
//                     "id": "1048026",
//                     "name": "周星驰"
//                 }
//             ],
//             "year": "2016",
//             "images": {
//                 "small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2316177058.jpg",
//                 "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2316177058.jpg",
//                 "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2316177058.jpg"
//             },
//             "alt": "http://movie.douban.com/subject/19944106/",
//             "id": "19944106"
//         },
//         {
//             "rating": {
//                 "max": 10,
//                 "average": 8.1,
//                 "stars": "40",
//                 "min": 0
//             },
//             "genres": [
//                 "动画"
//             ],
//             "collect_count": 3147,
//             "casts": [
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/13635.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/13635.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/13635.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1276138/",
//                     "id": "1276138",
//                     "name": "三瓶由布子"
//                 },
//                 {
//                     "avatars": null,
//                     "alt": null,
//                     "id": null,
//                     "name": "菊池心"
//                 },
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/17853.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/17853.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/17853.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1000744/",
//                     "id": "1000744",
//                     "name": "竹内顺子"
//                 }
//             ],
//             "title": "火影忍者剧场版：博人传",
//             "original_title": "BORUTO -NARUTO THE MOVIE-",
//             "subtype": "movie",
//             "directors": [
//                 {
//                     "avatars": null,
//                     "alt": null,
//                     "id": null,
//                     "name": "山下宏幸"
//                 }
//             ],
//             "year": "2015",
//             "images": {
//                 "small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2302137839.jpg",
//                 "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2302137839.jpg",
//                 "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2302137839.jpg"
//             },
//             "alt": "http://movie.douban.com/subject/26282448/",
//             "id": "26282448"
//         },
//         {
//             "rating": {
//                 "max": 10,
//                 "average": 5.9,
//                 "stars": "30",
//                 "min": 0
//             },
//             "genres": [
//                 "喜剧",
//                 "动作",
//                 "奇幻"
//             ],
//             "collect_count": 38567,
//             "casts": [
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/29009.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/29009.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/29009.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1041390/",
//                     "id": "1041390",
//                     "name": "郭富城"
//                 },
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/1399268395.47.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/1399268395.47.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/1399268395.47.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1035641/",
//                     "id": "1035641",
//                     "name": "巩俐"
//                 },
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/11633.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/11633.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/11633.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1275721/",
//                     "id": "1275721",
//                     "name": "冯绍峰"
//                 }
//             ],
//             "title": "西游记之孙悟空三打白骨精",
//             "original_title": "西游记之孙悟空三打白骨精",
//             "subtype": "movie",
//             "directors": [
//                 {
//                     "avatars": {
//                         "small": "http://img6.douban.com/img/celebrity/small/1378782533.9.jpg",
//                         "large": "http://img6.douban.com/img/celebrity/large/1378782533.9.jpg",
//                         "medium": "http://img6.douban.com/img/celebrity/medium/1378782533.9.jpg"
//                     },
//                     "alt": "http://movie.douban.com/celebrity/1274240/",
//                     "id": "1274240",
//                     "name": "郑保瑞"
//                 }
//             ],
//             "year": "2016",
//             "images": {
//                 "small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2315805100.jpg",
//                 "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2315805100.jpg",
//                 "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2315805100.jpg"
//             },
//             "alt": "http://movie.douban.com/subject/25827963/",
//             "id": "25827963"
//         }
//     ]
//     // 创建正在热映模块
//     var module = angular.module('myApp.in_theaters', ['ngRoute'])
//     // 配置模块路由
//     module.config(['$routeProvider', function($routeProvider) {
//         $routeProvider.when('/in_theaters', {
//             templateUrl: 'in_theaters/view.html',
//             controller: 'InTheatersController'
//         });
//     }]);
//     //配置模块控制器
//     module.controller('InTheatersController', ['$scope',function($scope) {
//     	$scope.subjects=data;
//     }]);
// })(angular);

// 2、异步获取数据绑定
// (function(angular) {
//     'use strict';
//     // 创建正在热映模块
//     var module = angular.module('myApp.in_theaters', ['ngRoute'])
//         // 配置模块路由
//     module.config(['$routeProvider', function($routeProvider) {
//         $routeProvider.when('/in_theaters', {
//             templateUrl: 'in_theaters/view.html',
//             controller: 'InTheatersController'
//         });
//     }]);
//     //配置模块控制器
//     module.controller('InTheatersController', ['$scope','$http', function($scope,$http) {
//     	$scope.title='';
//     	$scope.message='';
//     	$scope.subjects=[];
//         $http.get('data.json').
//         then(function(resource) {
//              if(resource.status==200){
//              	$scope.subjects=resource.data.subjects;
//              	$scope.title=resource.data.title;
//              }else{
//              	$scope.message='获取数据失败'+resource.statusText;
//              }
//         }),
//        (function(err) {
//         	 $scope.message='获取数据失败'+err.statusText;
//         });
//     }]);
// })(angular);

//3、跨域获取jsonps数据绑定
//由于angular中的$http.jsonp("http://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK")
//中的callback函数都是挂载在angular上的，如angular.callback,而豆瓣不支持这种格式，所以需要自己写一个
//jsonp的服务，考虑到模块化，后面还会用到，所以单独提取到组件中去，jsonp,js文件中
(function(angular) {
	'use strict';
	// 创建正在热映模块
	var module = angular.module('myApp.moviecat', ['ngRoute', 'myApp.service.jsonp'])
		// 配置模块路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:category/:page?', {
			templateUrl: 'movie_list/view.html',
			controller: 'MoviecatController'
		});
	}]);
	//配置模块控制器
	module.controller('MoviecatController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function($scope, $route, $routeParams, HttpService,AppConfig) {
			var count = AppConfig.pageCount;
			var page = parseInt($routeParams.page);
			var start = (page - 1) * count;
			$scope.loading=false;
			$scope.total = 0;
			$scope.page = page;
			$scope.pages = 0;
			$scope.title = 'Loading...';
			$scope.message = '';
			$scope.subjects = [];
			//$routeParams的数据来源：1。路由匹配出来的如：page 2.url中？后面匹配出来的
			HttpService.jsonp(AppConfig.listUrl+$routeParams.category, { start: start, count: count , q:$routeParams.q}, function(data) {
				$scope.subjects = data.subjects;
				$scope.title = data.title;
				$scope.total = data.total;
				$scope.pages = Math.ceil(data.total / count);
				$scope.loading=true;
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

'use strict';

angular.module('try').
config(
		function(
				$locationProvider,
				$routeProvider
				){
				$routeProvider.
					when("/",{
						template: "<blog-list></blog-list>"
					}).
					when("/blog", {
						template: "<blog-list></blog-list>"
					}).
					when("/blog/:id", {
						template: "<blog-detail></blog-detail>"
					}).
					otherwise({
						template: "Not found"
					})
					
				});
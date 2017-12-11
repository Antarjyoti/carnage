'use strict';

angular.module("tryNav").
	directive('tryNav',function(Post,$location){
		return{
	
			restrict: "E",
			templateUrl:"templates/nav.html",
			link:function(scope,element,attr){
				scope.items=Post.query()
				scope.selectItems=function($item,$model,$label){
					console.log($item)
					console.log($model)
					console.log($label)
					$location.path("/blog/" + $item.id)
					scope.searchQuery=""
				}
				scope.searchItem=function(){
					scope.searchQuery=""
					console.log(scope.searchQuery)
					$location.path("/blog/").search("q",scope.searchQuery)
				}
			}
		}
	});
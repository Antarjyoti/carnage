'use strict';

angular.module('blogList').
component('blogList',{
	
	//template:"<div><h1 class='new-class'>{{title}}</h1><button ng-click='someClick()'>Click Me!</button></div>",
	templateUrl:"templates/blog-list.html",
	controller: function(Post,$routeParams,$scope,$rootScope,$location){
		var q=$location.search().q
		
		if (q){
			$scope.query=q
			$scope.searchQuery=true
			
		}
		$scope.order='title'
		$scope.goToItem=function(post){
			
			
			$rootScope.$apply(function(){
				$location.path("/blog/" + post.id)
			})
			
			console.log("http://localhost:8080/tryAngular/#/blog/" + post.id)
			
		}
		
		

		$scope.changecCols=function(number)
		{
			if (angular.isNumber(number)){
				$scope.numCols=number
			}else
				{
					$scope.numCols=2
				}
			
			setupCol($scope.items,$scope.numCols)
		}
		
		$scope.loadingQuery=false
		$scope.$watch(function(){
			//console.log($scope.query)
			if($scope.query){
				$scope.loadingQuery=true
				$scope.cssClass='col-sm-12'
					if ($scope.query !=q)
				{
					$scope.searchQuery=true
			}}		
			else
				{
				if($scope.loadingQuery){
					setupCol($scope.items,2)
					$scope.loadingQuery=false
					
				}
				
				}
		})
		function setupCol(data,number){
			if (angular.isNumber(number)){
				$scope.numCols=number
			}else
				{
					$scope.numCols=2
				}
			$scope.cssClass='col-sm-' + (12/$scope.numCols);
			$scope.items=data;
			$scope.collItems=chunkArrayInGroups(data,$scope.numCols);
		}
		
		Post.query(function(data){
			
			//var numCols=4
			//$scope.cssClass="col-sm-" + (12/numcols)
			//$scope.items=data
			//$scope.collItems=chunkArrayInGroups(data,4)
			setupCol(data,3)
		},
		function(errorData){
			
		});
		
		function chunkArrayInGroups(array,unit){
			var results=[]
			length=Math.ceil(array.length / unit);
			for (var i=0;i<length;i++){
				results.push(array.slice(i*unit,(i+1)*unit));
			}
			return results;
		}
		
	}
});
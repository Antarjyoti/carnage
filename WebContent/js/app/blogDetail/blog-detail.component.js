'use strict';

angular.module('blogDetail').
component('blogDetail',{
	
	//template:"<div><h1 class='new-class'>{{title}}</h1><button ng-click='someClick()'>Click Me!</button></div>",
	templateUrl:"templates/blog-details.html",
	controller: function(Post, $http,$location,$routeParams,$scope){	
		
		Post.query(function(data){
			$scope.notFound=true;
			$scope.comments=[]
			angular.forEach(data,function(post){
				if (post.id == $routeParams.id)
					{
					$scope.notFound=false;
					$scope.post=post;
					
					if (post.comments){
						$scope.comments=post.comments
						
					}
					resetReply()
					}
				//console.log(post);
			})
		})
		
		//$http.get("json/posts.json").then(successCallback,errorCallback);
		
		//function successCallback(response, status, config, statusText){
			//$scope.notFound=true;
			
			
			//var blogItems=response.data;
			//$scope.posts=blogItems;
			
			//angular.forEach(blogItems,function(post){
				//if (post.id == $routeParams.id)
					//{
					//$scope.notFound=false;
					//$scope.post=post;
					
					//}
				//console.log(post);
			//})
		//}
		//function errorCallback(response, status, config, statusText){
			//$scope.notFound=true;
			//console.log(response);
		//}
		
		
		//console.log($routeParams);
		//$scope.notFound=true;
		
		$scope.deleteComment=function(comment){
			$scope.$apply($scope.comments.splice(comment,1))
		}
		
		
		$scope.AddReply = function(){
			
			console.log($scope.reply)
			$scope.comments.push($scope.reply)
			
		}
		
		function resetReply(){
			$scope.reply={
					"id": $scope.comments.length +1,
					"text":"",
			}
		}
		
		if($scope.notFound)
			{
				//console.log("Not Found");
				$location.path("/404");
			}
		//$scope.title="Blog "+ $routeParams.id
		}
	
});
var app = angular.module('myApp', []);

app.controller('paginationCtrl', function($scope){
		var max = 1000
		$scope.arr = [];

		for(i = 1; i<=max; i++) {
			$scope.arr.push(i);
		}

		$scope.currentPage = 0;
		$scope.pageSize = 20;

		$scope.numberOfpages = function(){
			return Math.ceil($scope.arr.length/ $scope.pageSize);
		}
		$scope.range = function() {
			$scope.ret = [];
			for(i=0; i<$scope.numberOfpages(); i++) {
				$scope.ret.push(i);
			}
		}
		$scope.range();
		console.log($scope.ret)

		$scope.setPage = function(index) {
			console.log(index)
			$scope.currentPage = index;
		}
});

app.filter('pagination', function(){
	return function (input, start) {
		start = +start;
		 return input.slice(start);
	}
});
var app = angular.module('myApp', []);

app.controller('paginationCtrl', function($scope){
		var max = 1000
		$scope.arr = [];
		
		// create static array for pagination
		for(i = 1; i<=max; i++) {
			$scope.arr.push(i);
		}

		$scope.currentPage = 0;
		$scope.pageSize = 20;

		// calculate total number of pages.
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

		// set cuurent page index
		$scope.setPage = function(index) {
			$scope.currentPage = index;
		}
});

// Filter for data
app.filter('pagination', function(){
	return function (input, start) {
		start = +start;
		 return input.slice(start);
	}
});

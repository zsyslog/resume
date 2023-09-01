angular.module('resume', []).controller('Controller', ['$scope', '$http', 
function($scope, $http) {
	$http.get('https://master.d2r5j8b15o1tgt.amplifyapp.com/resume/resume.json')
						.success(function(data, status, headers, config){
							console.log(data)
							$scope.resume = data
						})
}]);

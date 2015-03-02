angular.module('resume', []).controller('Controller', ['$scope', '$http', 
function($scope, $http) {
	$http.get('http://jcjimenez.me/resume/resume.json')
						.success(function(data, status, headers, config){
							console.log(data)
							$scope.resume = data
						})
}]);

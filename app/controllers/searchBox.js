(function() {

	var imdb = angular.module("imdb")
	imdb.controller("searchBox", searchBox);

	function searchBox($scope, $http,$timeout,message) {
      
		$scope.appName = "The Movie DB";
		$scope.searchName = ''
		$scope.searchMovies = ''
		var url='http://api.themoviedb.org/3/';
		var key='f24727bdb915ca05f7718876104b211d'
		$scope.getActors = function() {
			//message.print($scope.searchName);
			if ($scope.searchName != '') {
				var promise = $http.get(url+'search/person?api_key='+key+'&query=' + $scope.searchName);
				promise.then(successCallback, errorCallback);
			}
			else
			{

					$scope.results=[{name:"no results!"}];


			}
			function successCallback(response) {
				$scope.results = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}

		};
$scope.getMovies = function() {
			//message.print($scope.searchMovies);
			if ($scope.searchMovie != '') {
				var promise = $http.get(url+'search/movie?api_key='+key+'&query=' + $scope.searchMovie);
				promise.then(successCallback, errorCallback);
			}
			else
			{

					$scope.movies=[{name:"no results!"}];


			}
			function successCallback(response) {
				$scope.movies = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}

		};

	}

})();


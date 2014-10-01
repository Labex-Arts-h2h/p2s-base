'use strict';

angular.module('p2sApp')
  .controller('TheatresCtrl', function ($scope,$state, $http, Api, $modal, $window) {

  	// == ALL
   	$scope.theatres = Api.Theatres.query();
	
	// == Get One
	// $scope.theatre = Api.Theatres.get({id: "47e8724893005948"});
	// console.log($scope.theatre);

	// == Nouveau 
	//$scope.newTheatre = new Api.Theatres({nom : "Mehdi"});
	//Api.Theatres.save($scope.newTheatre);

	// == Update
	// $scope.theatreEdit = Api.Theatres.get({id: "9fa3dfc7b841993e"})
	// $scope.theatreEdit.gps = "Mehdi";
	// $scope.theatreEdit.$update({id: "9fa3dfc7b841993e"});

    $scope.remove = function($index) {
		$scope.theatres[$index].$delete(function() {
		  $scope.theatres.splice($index, 1);
		});
    };


    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };

 
 });

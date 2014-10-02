'use strict';

angular.module('p2sApp')
  .controller('LinkCtrl', function ($scope, Api) {
    $scope.typeItem = [
        { id: 1, name: 'Theatre' },
        { id: 2, name: 'Personne' },
        { id: 3, name: 'Pièces' }
    ];
    $scope.launchType = function(me) {
    	$scope.nextChoice = "true";
    	if (me.selectedType.id == 1) {$scope.itemsSuggest = Api.Theatres.query();};
    	if (me.selectedType.id == 2) {$scope.itemsSuggest = Api.Theatres.query();};
    	if (me.selectedType.id == 3) {$scope.itemsSuggest = Api.Pieces.query();};    	  	
    };
    $scope.fromDate;
    
    $scope.add = function(me) {
	    console.log($scope.fromDate);
	    console.log($scope.untilDate);
	    console.log($scope.selectedItem);
	    console.log($scope.descLink);
	    console.log($scope.typeLink);
    };   	

});

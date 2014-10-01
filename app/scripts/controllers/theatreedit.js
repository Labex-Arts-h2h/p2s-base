'use strict';
angular.module('p2sApp').controller('TheatreeditCtrl', function($scope, $state, $stateParams, Api) {
    
    //$scope.selectedDate = new Date();
    
    $scope.update = function() {
        //console.log($scope.selectedDate);
        //$scope.theatre.date = $scope.selectedDate;
        $scope.theatre.$update(function() {
            $state.go('theatres');
        });
    };
    $scope.load = function() {
        $scope.theatre = Api.Theatres.get({
            id: $stateParams.id
        });
        console.log($scope.theatre.dates);

    };
    
    $scope.addDate = function() {
        $scope.theatre.dates.push(new Date());
    };
    $scope.removeDate = function(index) {
        $scope.theatre.dates.splice(index, 1);
    };

    $scope.load();
});
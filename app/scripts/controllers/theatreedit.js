'use strict';
angular.module('p2sApp').controller('TheatreeditCtrl', function($scope, $state, $stateParams, Api) {
  $scope.update = function() {
    $scope.theatre.$update(function() {
      $state.go('theatres');
    });
  };
  $scope.load = function() {
    $scope.theatre = Api.Theatres.get({
      id: $stateParams.id
    });
  };
  $scope.addDate = function() {
    if(!$scope.theatre.dates) {$scope.theatre.dates = Array();} // Si undefined
    $scope.theatre.dates.push({"description": "Description de la date","date": new Date()});
  };
  $scope.removeDate = function(index) {
    $scope.theatre.dates.splice(index, 1);
  };
  $scope.load();
});
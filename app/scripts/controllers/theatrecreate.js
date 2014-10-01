'use strict';

angular.module('p2sApp')
  .controller('TheatrecreateCtrl', function ($scope, $state, Api) {
    $scope.theatre=new Api.Theatres();
    $scope.theatre.dates = Array();
    $scope.addDate = function() {
        $scope.theatre.dates.push(new Date());
    };
    $scope.removeDate = function(index) {
        $scope.theatre.dates.splice(index, 1);
    };
    $scope.add=function(){
        $scope.theatre.$save(function(){
            $state.go('theatres');
        });
    }
  });

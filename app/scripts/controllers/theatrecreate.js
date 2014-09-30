'use strict';

angular.module('p2sApp')
  .controller('TheatrecreateCtrl', function ($scope, $state, Api) {
    $scope.theatre=new Api.Theatres();
    $scope.add=function(){
        $scope.theatre.$save(function(){
            $state.go('theatres');
        });
    }
  });

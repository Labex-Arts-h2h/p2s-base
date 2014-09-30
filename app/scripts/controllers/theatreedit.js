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
    $scope.load();
});
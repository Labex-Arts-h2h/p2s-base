'use strict';
angular.module('p2sApp').controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
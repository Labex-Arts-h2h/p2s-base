'use strict';
angular.module('p2sApp').controller('LieuxCtrl', function($scope, $state, $http, Api, $modal, $window) {

    $scope.lieux = Api.Lieux.query();
    $scope.remove = function($index) {
        $scope.lieux[$index].$delete(function() {
            $scope.lieux.splice($index, 1);
        });
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
// CREATE
angular.module('p2sApp').controller('LieucreateCtrl', function($scope, $state, Api) {
    $scope.lieu = new Api.Lieux();
    $scope.lieu.dates = Array();
    $scope.addDate = function() {
        $scope.lieu.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.lieu.dates.splice(index, 1);
    };
    $scope.add = function() {
        $scope.lieu.$save(function() {
            $state.go('lieux');
        });
    }
});
// EDIT
angular.module('p2sApp').controller('LieueditCtrl', function($scope, $state, $stateParams, Api) {
    $scope.update = function() {
        $scope.lieu.$update(function() {
            $state.go('lieux');
        });
    };
    $scope.load = function() {
        $scope.lieu = Api.Lieux.get({
            id: $stateParams.id
        });
    };
    $scope.addDate = function() {
        if (!$scope.lieu.dates) {
            $scope.lieu.dates = Array();
        } // Si undefined
        $scope.lieu.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.lieu.dates.splice(index, 1);
    };
    $scope.load();
});
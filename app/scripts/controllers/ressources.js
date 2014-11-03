'use strict';
angular.module('p2sApp').controller('RessourcesCtrl', function($scope, $state, $http, Api, $modal, $window) {

    $scope.ressources = Api.Ressources.query();
    $scope.remove = function($index) {
        $scope.ressources[$index].$delete(function() {
            $scope.ressources.splice($index, 1);
        });
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
// CREATE
angular.module('p2sApp').controller('RessourcecreateCtrl', function($scope, $state, Api) {
    $scope.ressource = new Api.Ressources();
    $scope.ressource.dates = Array();
    $scope.addDate = function() {
        $scope.ressource.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.ressource.dates.splice(index, 1);
    };
    $scope.add = function() {
        $scope.ressource.$save(function() {
            $state.go('ressources');
        });
    }
});
// EDIT
angular.module('p2sApp').controller('RessourceeditCtrl', function($scope, $state, $stateParams, Api) {
    $scope.update = function() {
        $scope.ressource.$update(function() {
            $state.go('ressources');
        });
    };
    $scope.load = function() {
        $scope.ressource = Api.Ressources.get({
            id: $stateParams.id
        });
    };
    $scope.addDate = function() {
        if (!$scope.ressource.dates) {
            $scope.ressource.dates = Array();
        } // Si undefined
        $scope.ressource.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.ressource.dates.splice(index, 1);
    };
    $scope.load();
});
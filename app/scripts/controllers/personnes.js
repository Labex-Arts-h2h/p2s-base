'use strict';
angular.module('p2sApp').controller('PersonnesCtrl', function($scope, $state, $http, Api, $modal, $window) {

    $scope.personnes = Api.Personnes.query();
    $scope.remove = function($index) {
        $scope.personnes[$index].$delete(function() {
            $scope.personnes.splice($index, 1);
        });
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
// CREATE
angular.module('p2sApp').controller('PersonnecreateCtrl', function($scope, $state, Api) {
    $scope.personne = new Api.Theatres();
    $scope.personne.dates = Array();
    $scope.addDate = function() {
        $scope.personne.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.personne.dates.splice(index, 1);
    };
    $scope.add = function() {
        $scope.personne.$save(function() {
            $state.go('personnes');
        });
    }
});
// EDIT
angular.module('p2sApp').controller('PersonneeditCtrl', function($scope, $state, $stateParams, Api) {
    $scope.update = function() {
        $scope.personne.$update(function() {
            $state.go('personnes');
        });
    };
    $scope.load = function() {
        $scope.personne = Api.Personnes.get({
            id: $stateParams.id
        });
    };
    $scope.addDate = function() {
        if (!$scope.personne.dates) {
            $scope.personne.dates = Array();
        } // Si undefined
        $scope.personne.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.personne.dates.splice(index, 1);
    };
    $scope.load();
});
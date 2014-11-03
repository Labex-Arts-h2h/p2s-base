'use strict';
angular.module('p2sApp').controller('EventsCtrl', function($scope, $state, $http, Api, $modal, $window) {

    $scope.events = Api.Events.query();
    $scope.remove = function($index) {
        $scope.events[$index].$delete(function() {
            $scope.events.splice($index, 1);
        });
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
// CREATE
angular.module('p2sApp').controller('EventcreateCtrl', function($scope, $state, Api) {
    $scope.event = new Api.Events();
    $scope.event.dates = Array();
    $scope.addDate = function() {
        $scope.event.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.event.dates.splice(index, 1);
    };
    $scope.add = function() {
        $scope.event.$save(function() {
            $state.go('events');
        });
    }
});
// EDIT
angular.module('p2sApp').controller('EventeditCtrl', function($scope, $state, $stateParams, Api) {
    $scope.update = function() {
        $scope.event.$update(function() {
            $state.go('events');
        });
    };
    $scope.load = function() {
        $scope.event = Api.Events.get({
            id: $stateParams.id
        });
    };
    $scope.addDate = function() {
        if (!$scope.event.dates) {
            $scope.event.dates = Array();
        } // Si undefined
        $scope.event.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.event.dates.splice(index, 1);
    };
    $scope.load();
});
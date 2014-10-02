'use strict';
angular.module('p2sApp').controller('PiecesCtrl', function($scope, $state, $http, Api, $modal, $window) {
    // == ALL
    $scope.pieces = Api.Pieces.query();
    $scope.remove = function($index) {
        $scope.pieces[$index].$delete(function() {
            $scope.pieces.splice($index, 1);
        });
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
// CREATE
angular.module('p2sApp').controller('PiececreateCtrl', function($scope, $state, Api) {
    $scope.piece = new Api.Pieces();
    $scope.piece.dates = Array();
    $scope.addDate = function() {
        $scope.piece.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.piece.dates.splice(index, 1);
    };
    $scope.add = function() {
        $scope.piece.$save(function() {
            $state.go('pieces');
        });
    }
});
// EDIT
angular.module('p2sApp').controller('PieceeditCtrl', function($scope, $state, $stateParams, Api) {
    $scope.update = function() {
        $scope.piece.$update(function() {
            $state.go('pieces');
        });
    };
    $scope.load = function() {
        $scope.piece = Api.Pieces.get({
            id: $stateParams.id
        });
    };
    $scope.addDate = function() {
        if (!$scope.piece.dates) {
            $scope.piece.dates = Array();
        } // Si undefined
        $scope.piece.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.piece.dates.splice(index, 1);
    };
    $scope.load();
});
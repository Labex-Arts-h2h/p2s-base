'use strict';
angular.module('p2sApp').controller('TheatresCtrl', function($scope, $state, $http, Api, $modal, $window) {
    // == ALL
    $scope.theatres = Api.Theatres.query();
    // == Get One
    // $scope.theatre = Api.Theatres.get({id: "47e8724893005948"});
    // console.log($scope.theatre);
    // == Nouveau 
    //$scope.newTheatre = new Api.Theatres({nom : "Mehdi"});
    //Api.Theatres.save($scope.newTheatre);
    // == Update
    // $scope.theatreEdit = Api.Theatres.get({id: "9fa3dfc7b841993e"})
    // $scope.theatreEdit.gps = "Mehdi";
    // $scope.theatreEdit.$update({id: "9fa3dfc7b841993e"});
    $scope.remove = function($index) {
        $scope.theatres[$index].$delete(function() {
            $scope.theatres.splice($index, 1);
        });
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
// CREATE
angular.module('p2sApp').controller('TheatrecreateCtrl', function($scope, $state, Api) {
    $scope.theatre = new Api.Theatres();
    $scope.theatre.dates = Array();
    $scope.addDate = function() {
        $scope.theatre.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.theatre.dates.splice(index, 1);
    };
    $scope.add = function() {
        $scope.theatre.$save(function() {
            $state.go('theatres');
        });
    }
});
// EDIT
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
        if (!$scope.theatre.dates) {
            $scope.theatre.dates = Array();
        } // Si undefined
        $scope.theatre.dates.push({
            "description": "Description de la date",
            "date": new Date()
        });
    };
    $scope.removeDate = function(index) {
        $scope.theatre.dates.splice(index, 1);
    };
    $scope.load();
});
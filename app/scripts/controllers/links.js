'use strict';
angular.module('p2sApp').controller('LinksCtrl', function($scope, $state, $http, Api, $modal, $window) {
    // == ALL
    $scope.links = Api.Links.query();
    $scope.remove = function($index) {
        $scope.links[$index].$delete(function() {
            $scope.links.splice($index, 1);
        });
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
// CREATE
angular.module('p2sApp').controller('LinkcreateCtrl', function($scope, $state, Api) {
    $scope.link = new Api.Links();
    $scope.add = function() {
        $scope.link.$save(function() {
            $state.go('links');
        });
    }
});
// EDIT
angular.module('p2sApp').controller('LinkeditCtrl', function($scope, $state, $stateParams, Api) {
    $scope.update = function() {
        $scope.link.$update(function() {
            $state.go('links');
        });
    };
    $scope.load = function() {
        $scope.typeItem = [
        { id: 1, name: 'Theatre' },
        { id: 2, name: 'Personne' },
        { id: 3, name: 'Pièces' }
        ];
        $scope.link = Api.Links.get({
            id: $stateParams.id
        });
    };

    $scope.launchType1 = function(me) {
        $scope.nextChoice = "true";
        console.log(me.selectedTypeTarget1.id);
        if (me.selectedTypeTarget1.id == 1) {$scope.itemsSuggestTarget1 = Api.Theatres.query();};
        if (me.selectedTypeTarget1.id == 2) {$scope.itemsSuggestTarget1 = Api.Theatres.query();};
        if (me.selectedTypeTarget1.id == 3) {$scope.itemsSuggestTarget1 = Api.Pieces.query();};                 
    };

    $scope.launchType2 = function(me) {
        $scope.nextChoice = "true";
        if (me.selectedTypeTarget2.id == 1) {$scope.itemsSuggestTarget2 = Api.Theatres.query();};
        if (me.selectedTypeTarget2.id == 2) {$scope.itemsSuggestTarget2 = Api.Theatres.query();};
        if (me.selectedTypeTarget2.id == 3) {$scope.itemsSuggestTarget2 = Api.Pieces.query();};                
    };




    $scope.load();
});
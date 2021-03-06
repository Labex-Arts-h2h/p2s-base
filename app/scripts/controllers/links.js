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
    $scope.load = function() {
        $scope.typeItem = [
        { id: 1, name: 'Theatre' },
        { id: 2, name: 'Personnes' },
        { id: 3, name: 'Pièces' },
        { id: 4, name: 'Ressources' },
        { id: 5, name: 'Lieux' },
        { id: 6, name: 'Evénements' }
        ];
        $scope.disabled1 = $scope.disabled2 = true;
    };
    $scope.launchType1 = function(me) {
        $scope.nextChoice = "true";
        $scope.disabled1 = false;
        $scope.link.target1.selected = null;
        if (me.link.target1.target.id == 1) {$scope.itemsSuggestTarget1 = Api.Theatres.query();};
        if (me.link.target1.target.id == 2) {$scope.itemsSuggestTarget1 = Api.Personnes.query();};
        if (me.link.target1.target.id == 3) {$scope.itemsSuggestTarget1 = Api.Pieces.query();};                 
        if (me.link.target1.target.id == 4) {$scope.itemsSuggestTarget1 = Api.Ressources.query();};
        if (me.link.target1.target.id == 5) {$scope.itemsSuggestTarget1 = Api.Lieux.query();};  
        if (me.link.target1.target.id == 6) {$scope.itemsSuggestTarget1 = Api.Events.query();};  
    };
    $scope.launchType2 = function(me) {
        $scope.nextChoice = "true";
        $scope.disabled2 = false;
        if (me.link.target2.target.id == 1) {$scope.itemsSuggestTarget2 = Api.Theatres.query();};
        if (me.link.target2.target.id == 2) {$scope.itemsSuggestTarget2 = Api.Personnes.query();};
        if (me.link.target2.target.id == 3) {$scope.itemsSuggestTarget2 = Api.Pieces.query();};                
        if (me.link.target2.target.id == 4) {$scope.itemsSuggestTarget2 = Api.Ressources.query();};
        if (me.link.target2.target.id == 5) {$scope.itemsSuggestTarget2 = Api.Lieux.query();};  
        if (me.link.target2.target.id == 6) {$scope.itemsSuggestTarget2 = Api.Events.query();};         
    };    
    $scope.add = function() {
        $scope.link.$save(function() {
            $state.go('links');
        });
    };
    $scope.load();

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
        { id: 2, name: 'Personnes' },
        { id: 3, name: 'Pièces' },
        { id: 4, name: 'Ressources' },
        { id: 5, name: 'Lieux' },
        { id: 6, name: 'Evénements' }
        ];
        $scope.disabled1 = $scope.disabled2 = true;
        $scope.link = Api.Links.get({
            id: $stateParams.id
        });
    };

    $scope.launchType1 = function(me) {
        $scope.nextChoice = "true";
        $scope.disabled1 = false;
        $scope.link.target1.selected = null;
        if (me.link.target1.target.id == 1) {$scope.itemsSuggestTarget1 = Api.Theatres.query();};
        if (me.link.target1.target.id == 2) {$scope.itemsSuggestTarget1 = Api.Personnes.query();};
        if (me.link.target1.target.id == 3) {$scope.itemsSuggestTarget1 = Api.Pieces.query();};                 
        if (me.link.target1.target.id == 4) {$scope.itemsSuggestTarget1 = Api.Ressources.query();};
        if (me.link.target1.target.id == 5) {$scope.itemsSuggestTarget1 = Api.Lieux.query();};  
        if (me.link.target1.target.id == 6) {$scope.itemsSuggestTarget1 = Api.Events.query();};  
    };
    $scope.launchType2 = function(me) {
        $scope.nextChoice = "true";
        $scope.disabled2 = false;
        if (me.link.target2.target.id == 1) {$scope.itemsSuggestTarget2 = Api.Theatres.query();};
        if (me.link.target2.target.id == 2) {$scope.itemsSuggestTarget2 = Api.Personnes.query();};
        if (me.link.target2.target.id == 3) {$scope.itemsSuggestTarget2 = Api.Pieces.query();};                
        if (me.link.target2.target.id == 4) {$scope.itemsSuggestTarget2 = Api.Ressources.query();};
        if (me.link.target2.target.id == 5) {$scope.itemsSuggestTarget2 = Api.Lieux.query();};  
        if (me.link.target2.target.id == 6) {$scope.itemsSuggestTarget2 = Api.Events.query();};         
    };   
    $scope.load();
});
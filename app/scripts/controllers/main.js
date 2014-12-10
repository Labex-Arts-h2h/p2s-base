'use strict';
angular.module('p2sApp').controller('MainCtrl', function($scope, USER_ROLES, Auth, Api) {
	
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = Auth.isAuthorized;

  $scope.dataNetwork = new Object();
  $scope.dataNetwork['nodes'] = [];
  $scope.dataNetwork['edges'] = [];

  var theatresList = Api.Theatres.query(function (response) {
    angular.forEach(response, function (item) {
        $scope.dataNetwork['nodes'].push({'id':item.id,'label':item.nom, 'group': 'theatre'});
    });
  });

  var personnesList = Api.Personnes.query(function (response) {
    angular.forEach(response, function (item) {
        $scope.dataNetwork['nodes'].push({'id':item.id,'label':item.nom, 'group':'personne'});
    });
  });

  var piecesList = Api.Pieces.query(function (response) {
    angular.forEach(response, function (item) {
        $scope.dataNetwork['nodes'].push({'id':item.id,'label':item.nom, 'group':'piece'});
    });
  });    

  var ressourcesList = Api.Ressources.query(function (response) {
    angular.forEach(response, function (item) {
        $scope.dataNetwork['nodes'].push({'id':item.id,'label':item.nom, 'group':'ressource'});
    });
  });

  var eventsList = Api.Events.query(function (response) {
    angular.forEach(response, function (item) {
        $scope.dataNetwork['nodes'].push({'id':item.id,'label':item.nom, 'group':'evenement'});
    });
  });

  var lieuxList = Api.Lieux.query(function (response) {
    angular.forEach(response, function (item) {
        $scope.dataNetwork['nodes'].push({'id':item.id,'label':item.nom, 'group':'lieu'});
    });
  });    

  var linksList = Api.Links.query(function (response) {
    angular.forEach(response, function (item) {
        $scope.dataNetwork['edges'].push({'from':item.target1.selected.id,'to':item.target2.selected.id});
    });
  });   
  console.log($scope.dataNetwork.edges);


  var options = {
        navigation: true,
        "width":"90%",
        "height":"500px",
        "groups": {
          piece: {
            shape: 'triangle',
            'color': {
              border: '#ABDEF7',
              background: '#ABDEF7'
            }
          },
          'personne': {
            shape: 'dot',
            'color': {
              border: '#E31B23',
              background: '#E31B23'
            }
          },
          'evenement': {
            shape: 'dot',
            'color': {
              border: '#543D3D',
              background: '#543D3D'
            }
          },
          'lieu': {
            shape: 'square',
            'color': {
              border: '#543D3D',
              background: '#543D3D'
            }
          },
          'ressource': {
            shape: 'dot',
            'color': {
              border: '#FC758F',
              background: '#FC758F'
            }
          },                                     
          'theatre': {
            shape: 'square',
            'color': {
              border: '#E3D522',
              background: '#E3D522'
            }
          }          
        }
    }


  $scope.graph = {data: {nodes: $scope.dataNetwork.nodes, edges: $scope.dataNetwork.edges}, options: options};  


 
  // $scope.setCurrentUser = function (user) {
  //   $scope.currentUser = user;
  // };

	// $scope.users = Api.Theatres.query();
	// console.log($scope.users);
	


    // $http.get('http://localhost:2403/links').success(function(todos) {
    // 	console.log(todos);
    //     $scope.todos = todos;
    // }).error(function(err) {
    //     alert(err);
    // });

});
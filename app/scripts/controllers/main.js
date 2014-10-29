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
            color: '#FF9900' // orange
          },
          'personne': {
            shape: 'dot',
            color: "#2B7CE9" // blue
          },
          'theatre': {
            fontFace: 'times',
            fontColor: 'black',
            shape: 'square',
            'color': {
              border: 'orange',
              background: 'yellow'
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
'use strict';
angular.module('p2sApp').controller('MainCtrl', function($scope, USER_ROLES, Auth) {
	
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = Auth.isAuthorized;
 
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
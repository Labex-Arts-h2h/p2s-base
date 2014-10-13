'use strict';
angular.module('p2sApp').controller('LoginCtrl', function($scope, $state, $rootScope, AUTH_EVENTS, Auth) {
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function(credentials) {
    Auth.login(credentials).then(function(user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $state.go('home');
      event.preventDefault();
    }, function() {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
});
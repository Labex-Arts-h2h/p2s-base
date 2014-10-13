'use strict';
angular.module('p2sApp').controller('NavCtrl', function($scope, $location, Auth, USER_ROLES) {
  	$scope.isAuthorized = function(param) {
  		return	Auth.isAuthorized(USER_ROLES.admin);
  	}
  	$scope.isActive = function(viewLocation) {
	    return viewLocation === $location.path();
	};
	$scope.loginOut = function() {
	    Auth.logout();
	    //$cookieStore.remove('user');
	};

});
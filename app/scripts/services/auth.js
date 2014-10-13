'use strict';
// http://adamalbrecht.com/2014/09/22/authorization-with-angular-and-ui-router/
// http://beletsky.net/2013/11/simple-authentication-in-angular-dot-js-app.html
//https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
// https://docs.google.com/presentation/d/1dceqxHVLP251cOQvBh3gOrAO_G2c6W9lQ6J2JCaO1d0/edit#slide=id.g1cb42e14c_059
//https://medium.com/@mattlanham/authentication-with-angularjs-4e927af3a15f
//http://www.occitech.fr/blog/2014/04/lauthentification-avec-angularjs/
//http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/
//http://arthur.gonigberg.com/2013/06/29/angularjs-role-based-auth/ 
//http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app

//Video a reagarde
//http://youtu.be/18ifoT-Id54
// exemple facile
//http://stackoverflow.com/questions/23960105/why-wont-the-state-change-in-a-unit-test-for-an-angularjs-controller
angular.module('p2sApp')
.factory('Auth', function($http, $cookieStore, Session){
  return {
    login: function (credentials) {
      return $http
        .post('http://localhost:2403/users/login', credentials)
        .then(function (res) {
          Session.create(res.data.id, res.data.uid, "admin");
          return res.data;
        });
    },
    isAuthenticated: function () {
      return !!Session.userId;
    },
    isAuthorized: function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1;
    }
  };


    // var accessLevels = routingConfig.accessLevels
    //     , userRoles = routingConfig.userRoles
    //     , currentUser = $cookieStore.get('user') || { username: '', role: userRoles.public };

    // $cookieStore.remove('user');

    // function changeUser(user) {
    //     angular.extend(currentUser, user);
    // }

    // return {
    //     authorize: function(accessLevel, role) {
    //         if(role === undefined) {
    //             role = currentUser.role;
    //         }

    //         return accessLevel.bitMask & role.bitMask;
    //     },
    //     isLoggedIn: function(user) {
    //         if(user === undefined) {
    //             user = currentUser;
    //         }
    //         return user.role.title === userRoles.user.title || user.role.title === userRoles.admin.title;
    //     },
    //     register: function(user, success, error) {
    //         $http.post('/register', user).success(function(res) {
    //             changeUser(res);
    //             success();
    //         }).error(error);
    //     },
    //     login: function(user, success, error) {
    //         $http.post('/login', user).success(function(user){
    //             console.log(user);
    //             //changeUser(user);
    //             //success(user);
    //         }).error(error);
    //     },
    //     logout: function(success, error) {
    //         $http.post('/logout').success(function(){
    //             changeUser({
    //                 username: '',
    //                 role: userRoles.public
    //             });
    //             success();
    //         }).error(error);
    //     },
    //     accessLevels: accessLevels,
    //     userRoles: userRoles,
    //     user: currentUser
    // };
});
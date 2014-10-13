'use strict';

angular.module('p2sApp',['ngResource','ngSanitize','ngCookies','ui.router','mgcrea.ngStrap','ui.select'])
.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
  })
.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
  });

angular.module('p2sApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, USER_ROLES){

    $stateProvider.state('home',{
        url:'/',
        templateUrl:'views/main.html',
        controller:'MainCtrl'
    }).state('login',{
       url:'/login',
       templateUrl:'views/login.html',
       controller:'LoginCtrl',
       authorizedRoles : [USER_ROLES.all]
    }).state('theatres',{
       url:'/theatres',
       templateUrl:'views/theatres/theatres.html',
       controller:'TheatresCtrl',
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
    }).state('newTheatre',{
        url:'/theatre/new',
        templateUrl:'views/theatres/theatre-add.html',
        controller:'TheatrecreateCtrl'
    }).state('editTheatre',{
        url:'/theatre/:id/edit',
        templateUrl:'views/theatres/theatre-edit.html',
        controller:'TheatreeditCtrl'
    }).state('pieces',{
       url:'/pieces',
       templateUrl:'views/pieces/pieces.html',
       controller:'PiecesCtrl',
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
    }).state('newPiece',{
        url:'/piece/new',
        templateUrl:'views/pieces/piece-add.html',
        controller:'PiececreateCtrl'
    }).state('editPiece',{
        url:'/piece/:id/edit',
        templateUrl:'views/pieces/piece-edit.html',
        controller:'PieceeditCtrl'
    }).state('links',{
       url:'/links',
       templateUrl:'views/links/links.html',
       controller:'LinksCtrl'
    }).state('newLink',{
        url:'/link/new',
        templateUrl:'views/links/link-add.html',
        controller:'LinkcreateCtrl'
    }).state('editLink',{
        url:'/link/:id/edit',
        templateUrl:'views/links/link-edit.html',
        controller:'LinkeditCtrl'
    }).state('personnes',{
       url:'/personnes',
       templateUrl:'views/personnes/personnes.html',
       controller:'PersonnesCtrl'
    }).state('newPersonne',{
        url:'/personne/new',
        templateUrl:'views/personnes/personne-add.html',
        controller:'PersonnecreateCtrl'
    }).state('editPersonne',{
        url:'/personne/:id/edit',
        templateUrl:'views/personnes/personne-edit.html',
        controller:'PersonneeditCtrl'
    });

    // $urlRouterProvider.otherwise('/404');

    // // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
    // $urlRouterProvider.rule(function($injector, $location) {
    //     if($location.protocol() === 'file')
    //         return;

    //     var path = $location.path()
    //     // Note: misnomer. This returns a query object, not a search string
    //         , search = $location.search()
    //         , params
    //         ;

    //     // check to see if the path already ends in '/'
    //     if (path[path.length - 1] === '/') {
    //         return;
    //     }

    //     // If there was no search string / query params, return with a `/`
    //     if (Object.keys(search).length === 0) {
    //         return path + '/';
    //     }

    //     // Otherwise build the search string and return a `/?` prefix
    //     params = [];
    //     angular.forEach(search, function(v, k){
    //         params.push(k + '=' + v);
    //     });
    //     return path + '/?' + params.join('&');
    // });

    // $locationProvider.html5Mode(true);

    // $httpProvider.interceptors.push(function($q, $location) {
    //     return {
    //         'responseError': function(response) {
    //             if(response.status === 401 || response.status === 403) {
    //                 $location.path('/login');
    //             }
    //             return $q.reject(response);
    //         }
    //     };
    // });


}).run(function($state, $rootScope, AUTH_EVENTS, Auth){
    $rootScope.$on('$stateChangeStart', function (event, nextState) {
     console.log(Auth.isAuthorized(nextState.authorizedRoles));

     if (!Auth.isAuthorized(nextState.authorizedRoles)) {
       //event.preventDefault();
       if (Auth.isAuthenticated()) {
          console.log("auth");
         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
       } else {
        console.log("not");
        //$state.transitionTo("login")
         $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
       }
     }
   });

  
  //
    // $rootScope.$on("$stateChangeStart", function (event, nextState) {
    //     if (!Auth.isAuthorized(nextState.authorizedRoles)) {
    //         //$rootScope.error = "Access denied";
    //         console.log(Auth.isAuthenticated());
    //         event.preventDefault();
    //          if(Auth.isAuthenticated()) {
    //             //$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
    //          } else {
    //             console.log("els");
    //              $rootScope.error = null;
    //             //$state.go('login');
    //          }
    //     }
    // });

    // $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    //     console.log(event);
    //     if(!('data' in toState) || !('access' in toState.data)){
    //         $rootScope.error = "Access undefined for this state";
    //         event.preventDefault();
    //     }
    //     else if (!Auth.authorize(toState.data.access)) {
    //         $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
    //         event.preventDefault();

    //         if(fromState.url === '^') {
    //             if(Auth.isLoggedIn()) {
    //                 $state.go('home');
    //             } else {
    //                 $rootScope.error = null;
    //                 $state.go('login');
    //             }
    //         }
    //     }
    // });

});

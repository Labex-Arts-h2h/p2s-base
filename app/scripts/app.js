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
        controller:'MainCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]
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
        controller:'TheatrecreateCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]
    }).state('editTheatre',{
        url:'/theatre/:id/edit',
        templateUrl:'views/theatres/theatre-edit.html',
        controller:'TheatreeditCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]
    }).state('pieces',{
       url:'/pieces',
       templateUrl:'views/pieces/pieces.html',
       controller:'PiecesCtrl',
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
    }).state('newPiece',{
        url:'/piece/new',
        templateUrl:'views/pieces/piece-add.html',
        controller:'PiececreateCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]        
    }).state('editPiece',{
        url:'/piece/:id/edit',
        templateUrl:'views/pieces/piece-edit.html',
        controller:'PieceeditCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]        
    }).state('links',{
       url:'/links',
       templateUrl:'views/links/links.html',
       controller:'LinksCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]       
    }).state('newLink',{
        url:'/link/new',
        templateUrl:'views/links/link-add.html',
        controller:'LinkcreateCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]        
    }).state('editLink',{
        url:'/link/:id/edit',
        templateUrl:'views/links/link-edit.html',
        controller:'LinkeditCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]        
    }).state('personnes',{
       url:'/personnes',
       templateUrl:'views/personnes/personnes.html',
       controller:'PersonnesCtrl',
       authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]       
    }).state('newPersonne',{
        url:'/personne/new',
        templateUrl:'views/personnes/personne-add.html',
        controller:'PersonnecreateCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]
    }).state('editPersonne',{
        url:'/personne/:id/edit',
        templateUrl:'views/personnes/personne-edit.html',
        controller:'PersonneeditCtrl',
        authorizedRoles : [USER_ROLES.admin, USER_ROLES.editor]        
    });

    $urlRouterProvider.otherwise('/login');

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
      if (nextState.name != 'login') {
        if (!Auth.isAuthorized(nextState.authorizedRoles))  { // SI l'user n'est pas autorisé
            console.log("Pas autorisé");
           event.preventDefault();
           if (Auth.isAuthenticated()) {
            console.log("Mais authentifié");
             $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
           } else {
            console.log("et pas authentifié");
              $state.go('login');
              $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
           }
         }
         else {
            console.log("Utilisateur Autorisé");
         }
     };
   });

});

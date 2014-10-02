'use strict';

angular.module('p2sApp',['ngResource','ngSanitize','ui.router','mgcrea.ngStrap']);

angular.module('p2sApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('home',{
        url:'/',
        templateUrl:'views/main.html',
        controller:'MainCtrl'
    }).state('theatres',{
       url:'/theatres',
       templateUrl:'views/theatres.html',
       controller:'TheatresCtrl'
    }).state('newTheatre',{
        url:'/theatre/new',
        templateUrl:'views/theatre-add.html',
        controller:'TheatrecreateCtrl'
    }).state('editTheatre',{
        url:'/theatre/:id/edit',
        templateUrl:'views/theatre-edit.html',
        controller:'TheatreeditCtrl'
    }).state('pieces',{
       url:'/pieces',
       templateUrl:'views/pieces.html',
       controller:'PiecesCtrl'
    }).state('newPiece',{
        url:'/piece/new',
        templateUrl:'views/piece-add.html',
        controller:'PiececreateCtrl'
    }).state('editPiece',{
        url:'/piece/:id/edit',
        templateUrl:'views/piece-edit.html',
        controller:'PieceeditCtrl'
    });
}).run(function($state){
   $state.go('home');
});

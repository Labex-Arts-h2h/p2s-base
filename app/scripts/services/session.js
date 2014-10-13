'use strict';

angular.module('p2sApp')
.service('Session', function($cookieStore){

  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
    $cookieStore.put('user', this);
  };
  this.get = function() {
    return $cookieStore.get('user');
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
    $cookieStore.remove('user');
    console.log('destroy');
  };

  return this;
});
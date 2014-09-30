'use strict';

describe('Controller: TheatreeditCtrl', function () {

  // load the controller's module
  beforeEach(module('p2sApp'));

  var TheatreeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheatreeditCtrl = $controller('TheatreeditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

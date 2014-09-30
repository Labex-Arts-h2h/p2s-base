'use strict';

describe('Controller: EdititemCtrl', function () {

  // load the controller's module
  beforeEach(module('p2sApp'));

  var EdititemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EdititemCtrl = $controller('EdititemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';
angular.module('p2sApp').directive('visNetwork', [function() {
  return {
    restrict: 'AE',
    scope: {
      data: '=data',
      options: '=options',
      event: '@event',
      callback: '&'
    },
    link: function(scope, element, attrs) {        
 	      var container = element[0], buildGraph = function(scope) {
        var graph = null;
        console.log(scope.data);
        graph = new vis.Network(container, scope.data, scope.options);
          return graph.on(scope.event, function(properties) {
            if (properties.nodes.length !== 0) { 
              scope.callback({params: properties});
            } 
        });
      };      
      scope.$watch('data', function(newval, oldval) {
        buildGraph(scope);
      }, true);        
    }
  };
}]);
'use strict';

angular.module('p2sApp')
  .factory('apiService', function ($resource) {
    return $resource('http://localhost:2403/theatres/:id', {}, 
      {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} 
      }
    })
  });


angular.module('p2sApp').factory('Api', ['$resource',
 function($resource) {
  var serviceBase = 'http://localhost:2403'
  return {
    Theatres: $resource(serviceBase+'/theatres/:id', {id: '@id'},
    {
      update: { method: 'PUT', params: {id: '@id'} }
    }),
    Pieces: $resource(serviceBase+'/pieces/:id', {id: '@id'},
    {
      update: { method: 'PUT', params: {id: '@id'} }
    }),    
    Links:  $resource(serviceBase+'/links/:id', {id: '@id'}),
    Personnes:  $resource(serviceBase+'/personnes/:id', {id: '@id'})
  };
}]);



// angular.module('p2sApp')
//   .factory('apiServices', function ($resource) {

//     var serviceBase = 'http://localhost:2403/'
//     var obj = {};
//     obj.getItems = function(){
//         return $http.get(serviceBase + 'customers');
//     }
//     obj.getItem = function(customerID){
//         return $http.get(serviceBase + 'customer?id=' + customerID);
//     }

//     obj.insertItem = function (customer) {
//         return $http.post(serviceBase + 'insertCustomer', customer).then(function (results) {
//             return results;
//         });
//     };

//     obj.updateItem = function (id,customer) {
//         return $http.post(serviceBase + 'updateCustomer', {id:id, customer:customer}).then(function (status) {
//             return status.data;
//         });
//     };

//     obj.deleteItem = function (id) {
//         return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function (status) {
//             return status.data;
//         });
//     };
//   });






// angular.module('movieApp.services',[]).factory('Movie',function($resource){
//     return $resource('http://movieapp-13434.onmodulus.net/api/movies/:id',
//       {id:'@_id'},
//       {update: { method: 'PUT'}
//     });
// }).service('popupService',function($window){
//     this.showPopup=function(message){
//         return $window.confirm(message);
//     }
// });

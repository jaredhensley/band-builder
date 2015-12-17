angular.module('myApp').service('searchService', function ($http, $q) {

  this.findNearby = function () {
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '',
      data: {


      }

    }).then(function (results) {
      dfd.resolve(results);
    });
    return dfd.promise;
  }

});
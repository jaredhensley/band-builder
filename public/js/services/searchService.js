angular.module('myApp').service('searchService', function ($http, $q) {

  this.findNearby = function (location) {
    console.log(location);
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/api/search',
      data: {
        search: location
      }

    }).then(function (results) {
      dfd.resolve(results);
    });
    return dfd.promise;
  }

});
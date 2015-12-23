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

  this.joinGroup = function (user, group) {
    console.log(23424234234234234242, user, group);
    return $http({
      method: 'POST',
      url: '/api/joinGroup',
      data: {
        user: user,
        group: group
      }
    }).then(function (result) {
      return result;
    });

  }

});
angular.module('myApp').controller('searchCtrl', function ($scope, searchService) {

  $scope.findNearby = function (location) {
    searchService.findNearby(location).then(function (results) {
      $scope.locations = results.data;
      console.log(results.data);
    });
  }

  $scope.joinGroup = function (user, group) {
    console.log('test', user);
    console.log('test2', group);
    searchService.joinGroup(user, group).then(function (result) {
      console.log(result);
      $scope.updateUser();
    });
  }

});
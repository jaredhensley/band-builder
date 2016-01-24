angular.module('myApp').controller('searchCtrl', function ($scope, searchService) {

  $scope.findNearby = function (location) {
    searchService.findNearby(location).then(function (results) {
      $scope.locations = results.data;
    });
  }

  $scope.joinGroup = function (user, group) {
    searchService.joinGroup(user, group).then(function (result) {
      $scope.updateUser();
    });
  }

});
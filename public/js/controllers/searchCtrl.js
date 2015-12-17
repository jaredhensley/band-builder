angular.module('myApp').controller('searchCtrl', function ($scope, searchService) {

  $scope.findNearby = function (location) {
    searchService.findNearby().then(function (results) {
      $scope.locations = results.data;
    });
  }

});
angular.module('myApp').controller('searchCtrl', function ($scope, searchService) {

  $scope.findNearby = function (location) {
    searchService.findNearby(location).then(function (results) {
      $scope.locations = results.data;
      console.log(results.data);
    });
  }

});
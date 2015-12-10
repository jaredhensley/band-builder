angular.module('myApp').controller('groupViewCtrl', function ($scope, MainService, $stateParams) {

  console.log($stateParams);
  console.log($stateParams.id);
  MainService.getGroup($stateParams.id).then(function (result) {
    $scope.group = result.data[0];
  });

});
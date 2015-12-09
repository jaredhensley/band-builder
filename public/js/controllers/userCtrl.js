angular.module('myApp').controller('userCtrl', function ($scope, MainService) {

  $scope.showGroupCreate = false;

  $scope.toggleGroupCreate = function () {
    $scope.showGroupCreate = !$scope.showGroupCreate;
  }

  $scope.createGroup = function (newGroup) {
    MainService.createGroup(newGroup).then(function (result) {
      console.log(result);
    });
  }

});
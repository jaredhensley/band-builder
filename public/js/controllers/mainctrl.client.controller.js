angular.module('myApp').controller('MainCtrl', function ($state, $stateParams, $scope, UserService, IdentityService) {

  // setter function or a getter function ??
  $scope.updateUser = function () {
    window.user = IdentityService.currentUser;
    $scope.user = IdentityService.currentUser;
  }

  $scope.user = IdentityService.currentUser;

});
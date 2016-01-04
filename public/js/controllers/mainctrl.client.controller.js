angular.module('myApp').controller('MainCtrl', function ($state, $stateParams, $scope, UserService, IdentityService) {

  $scope.loggedIn = window.user;

  if ($scope.loggedIn) {
    $scope.user = window.user;
  }

  // setter function or a getter function ??
  $scope.updateUser = function () {
    window.user = IdentityService.currentUser;
    $scope.user = IdentityService.currentUser;
    if ($scope.user) {
      $scope.loggedIn = true;
    } else {
      $scope.loggedIn = false;
    }
  }



});
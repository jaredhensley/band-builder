angular.module('myApp').controller('loginViewCtrl', function ($state, $scope, UserService, IdentityService) {

  $scope.login = function (credentials) {
    UserService.login(credentials).then(function (user) {
      IdentityService.currentUser = user;
      $scope.updateUser();
      $state.go('user');
    })
  }
});
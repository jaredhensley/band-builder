angular.module('myApp').controller('registerViewCtrl', function ($state, $scope, UserService, IdentityService) {

  $scope.registerUser = function (user) {
    UserService.registerUser(user).then(function (result) {
      IdentityService.currentUser = result;
      $scope.updateUser();
      $state.go('user');
    });
  };
});
angular.module('myApp').controller('logoutCtrl', function (UserService, $state, $scope, IdentityService) {
  UserService.logout().then(function (res) {
    IdentityService.currentUser = null;
    $scope.updateUser();
    $state.go('login');
  });
});
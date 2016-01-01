angular.module('myApp').controller('logoutCtrl', function (UserService, $state, $scope, IdentityService) {
  UserService.logout().then(function (res) {
    console.log('LOGING OUT');
    window.user = null;
    IdentityService.currentUser = res;
    $scope.updateUser();
    $state.go('login');
  });
});
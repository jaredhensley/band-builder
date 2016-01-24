angular.module('myApp').controller('editUserCtrl', function ($scope, UserService, $state, IdentityService) {

  $scope.editUser = function (userEdit) {
    UserService.editUser($scope.user._id, userEdit).then(function (response) {
      IdentityService.currentUser = response.data;
      $scope.updateUser();
      $state.go('user');
    });
  }

});
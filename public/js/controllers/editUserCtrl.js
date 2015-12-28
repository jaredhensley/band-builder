angular.module('myApp').controller('editUserCtrl', function ($scope, UserService, $state) {

  $scope.editUser = function (userEdit) {
    UserService.editUser($scope.user._id, userEdit).then(function (response) {
      $scope.updateUser();
      $state.go('user', {
        id: $scope.user._id
      });
    });
  }

});
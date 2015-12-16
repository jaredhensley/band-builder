angular.module('myApp').controller('editUserCtrl', function ($scope, MainService, UserService, $state, user) {
  $scope.user = user;
  $scope.editUser = function (userEdit) {
    console.log($scope.user._id);
    UserService.editUser($scope.user._id, userEdit).then(function (response) {

      console.log(response);
      console.log('test', $scope.user);
      $state.go('user', {
        id: $scope.user._id
      });
    });
  }

});
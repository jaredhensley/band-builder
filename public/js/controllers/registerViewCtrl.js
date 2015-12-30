angular.module('myApp').controller('registerViewCtrl', function ($state, $scope, UserService, IdentityService) {

  $scope.registerUser = function (user) {
    UserService.registerUser(user).then(function (result) {
      /*$scope.updateUser(result.data._id);*/
      $state.go('user', {
        /*id: result.data._id*/
        id: IdentityService.currentUser._id
      });
    });
  };
});
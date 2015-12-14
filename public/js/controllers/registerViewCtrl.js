angular.module('myApp').controller('registerViewCtrl', function ($state, $rootScope, $scope, MainService, UserService) {

  $scope.registerUser = function (user) {
    UserService.registerUser(user).then(function (result) {
      $scope.getUser(result.data._id);
      $state.go('user', {
        id: result.data._id
      });
    });
  };
});
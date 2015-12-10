angular.module('myApp').controller('registerViewCtrl', function ($state, $scope, MainService) {

  $scope.registerUser = function (user) {
    MainService.registerUser(user).then(function (result) {
      $scope.getUser(result.data._id);
      $state.go('user', {
        id: result.data._id
      });
    });
  };
});
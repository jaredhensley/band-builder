angular.module('myApp').controller('MainCtrl', function ($state, $stateParams, $scope, UserService) {

  $scope.updateUser = function () {
    return UserService.loggedin().then(function (user) {
      $scope.user = user;
      return user;
    });
  };

  /*$scope.updateUser();*/

  /*  $scope.currentUser = null;
    $scope.isAuthorized = AuthService.isAuthorized;
    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };*/

});
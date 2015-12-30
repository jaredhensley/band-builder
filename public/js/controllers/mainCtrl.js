angular.module('myApp').controller('MainCtrl', function ($state, $stateParams, $scope, UserService, IdentityService) {

  /*  $scope.updateUser = function () {
      return UserService.loggedin().then(function (user) {
        $scope.user = user;
        return user;
      });
    };*/
  // setter function or a getter function ??
  $scope.updateUser = function () {
    $scope.user = IdentityService.currentUser;
  }

  $scope.user = IdentityService.currentUser;
  /*$scope.updateUser();*/

  /*  $scope.currentUser = null;
    $scope.isAuthorized = AuthService.isAuthorized;
    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };*/

});
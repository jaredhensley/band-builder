angular.module('myApp').controller('MainCtrl', function ($rootScope, $state, $stateParams, $scope, MainService, UserService, GroupService) {

  $scope.updateUser = function () {
    return UserService.loggedin().then(function (user) {
      $scope.user = user;
      return user;
    });
  };

  $scope.updateUser();

});
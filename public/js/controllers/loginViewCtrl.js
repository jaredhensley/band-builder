angular.module('myApp').controller('loginViewCtrl', function ($rootScope, $scope, UserService) {

  $scope.login = function (user) {
    console.log(user);
    UserService.login(user).then(function (user) {
      $rootScope.currentUser = user;
      console.log($rootScope.currentUser);
    })
  }

});
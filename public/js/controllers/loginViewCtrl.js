angular.module('myApp').controller('loginViewCtrl', function ($state, $rootScope, $scope, UserService) {

  $scope.login = function (user) {
    console.log(user);
    UserService.login(user).then(function (user) {
      $rootScope.currentUser = user;
      $rootScope.groups = user.groups;
      console.log('CURRENT USER', $rootScope.currentUser);
      $state.go('user', {
        id: user._id
      });
    })
  }

});
angular.module('myApp').controller('loginViewCtrl', function ($state, $rootScope, $scope, UserService) {

  $scope.login = function (credentials) {
    console.log('fired');
    UserService.login(credentials).then(function (user) {
      console.log(credentials);
      console.log('user!!!!', user);
      $state.go('user', {
        id: user._id
      });
    })
  }
});
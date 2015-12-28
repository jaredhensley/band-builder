angular.module('myApp').controller('loginViewCtrl', function ($state, $scope, UserService) {

  $scope.login = function (credentials) {
    UserService.login(credentials).then(function (user) {
      console.log(credentials);
      console.log('user!!!!', user);
      //will be resolved before redirected
      $state.go('user', {
        id: user._id
      });
    })
  }
});
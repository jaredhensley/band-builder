angular.module('myApp').controller('loginViewCtrl', function ($state, $rootScope, $scope, UserService) {

  $scope.login = function (user) {
    console.log(user);
    UserService.login(user).then(function (user) {
      console.log('THIS IS THE INTERESTIN USER', user);
      $rootScope.currentUser = user;
      $rootScope.groups = user.groups;
      console.log('CURRENT USER', $rootScope.currentUser);
      console.log('CURRENT USER GROUPS', $rootScope.groups);
      $state.go('user', {
        id: user._id
      });
    })
  }

});
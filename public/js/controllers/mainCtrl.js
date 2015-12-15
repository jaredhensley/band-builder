angular.module('myApp').controller('MainCtrl', function ($rootScope, $state, $stateParams, $scope, MainService, UserService, GroupService) {

  console.log($rootScope.currentUser);
  /*$rootScope.$watch('currentUser', function (old, newUser) {
    console.log(11111, old);
    console.log(22222, newUser);
  });*/
  // temporarily hard coded to always populate user regardless of route on pageload
  $scope.getUser = function (userID) {
    var user = userID || '566ef56f94e80e105306cb2f';
    UserService.getUser(user).then(function (response) {
      $scope.user = response.data[0];
      // hacky and crapy line 9, temp for populate view
      //figure out way to referece groups off scope.user and not make two objects
      $scope.groups = $scope.user.groups;
      console.log('DEFAULT USER', $scope.user);
    });
  }

  // bootstraps app with a user
  $scope.getUser();

});
angular.module('myApp').controller('MainCtrl', function ($state, $stateParams, $scope, MainService) {

  $scope.getUser = function () {
    MainService.getUser('56672188e39becba2226f2cb').then(function (response) {
      $scope.user = response.data[0];
      console.log('in the callback 55555', $scope.user);
    });
  }

  $scope.getUser();

  $scope.user = {};

  $scope.registerUser = function (user) {
    console.log(user);
    MainService.registerUser(user).then(function (result) {
      console.log(result);
      $scope.user = result.data;
      $state.go('user', {
        id: result.data._id
      });
    });
  }

  $scope.editUser = function (userEdit) {
    console.log($scope.user._id);
    MainService.editUser($scope.user._id, userEdit).then(function (response) {
      console.log(response);
      console.log('CAKE');
      MainService.getUser($scope.user._id).then(function (response) {
        console.log('TEST');
        $scope.user = response.data[0];
        console.log('hey hey hey over here', $scope.user);
        $state.go('user', {
          id: $scope.user._id
        });
      })
    });
  }

});
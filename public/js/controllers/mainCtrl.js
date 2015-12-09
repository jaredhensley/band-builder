angular.module('myApp').controller('MainCtrl', function ($state, $stateParams, $scope, MainService) {

  // temporarily hard coded to always populate user regardless of route on pageload
  $scope.getUser = function (userID) {
    var user = userID || '56689e9aeadc01642a322d58';
    MainService.getUser(user).then(function (response) {
      $scope.user = response.data[0];
      console.log('DEFAULT USER', $scope.user);
    });
  }

  // bootstraps app with a user
  $scope.getUser();

  // initalizes user, perhaps unneccessary with above code
  $scope.user = {};

  // function to handle MainService call to POST user to server
  $scope.registerUser = function (user) {
    MainService.registerUser(user).then(function (result) {
      $scope.user = result.data;
      $state.go('user', {
        id: result.data._id
      });
    });
  }

  // function to handle MainService call to PUT user to server
  $scope.editUser = function (userEdit) {
    console.log($scope.user._id);
    MainService.editUser($scope.user._id, userEdit).then(function (response) {
      console.log(response);
      MainService.getUser($scope.user._id).then(function (response) {
        $scope.user = response.data[0];
        $state.go('user', {
          id: $scope.user._id
        });
      })
    });
  }

});
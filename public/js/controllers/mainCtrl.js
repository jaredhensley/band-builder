angular.module('myApp').controller('MainCtrl', function ($state, $stateParams, $scope, MainService, UserService, GroupService) {

  // temporarily hard coded to always populate user regardless of route on pageload
  $scope.getUser = function (userID) {
    var user = userID || '56689e9aeadc01642a322d58';
    UserService.getUser(user).then(function (response) {
      $scope.user = response.data[0];
      // hacky and crapy line 9, temp for populate view
      $scope.groups = $scope.user.groups;
      console.log('DEFAULT USER', $scope.user);
    });
  }

  // bootstraps app with a user
  $scope.getUser();

  // initalizes user, perhaps unneccessary with above code
  /*$scope.user = {};*/

  // function to handle MainService call to POST user to server
  /*  $scope.registerUser = function (user) {
      MainService.registerUser(user).then(function (result) {
        $scope.getUser(result.data._id);
        $state.go('user', {
          id: result.data._id
        });
      });
    }*/

  // function to handle MainService call to PUT user to server
  /*  $scope.editUser = function (userEdit) {
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
    }*/

});
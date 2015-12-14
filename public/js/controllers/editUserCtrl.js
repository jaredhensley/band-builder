angular.module('myApp').controller('editUserCtrl', function ($scope, MainService, UserService, $state) {

  $scope.editUser = function (userEdit) {
    console.log($rootScope.currentUser._id);
    UserService.editUser($rootScope.currentUser._id, userEdit).then(function (response) {
      console.log(response);
      UserService.getUser($rootScope.currentUser._id).then(function (response) {
        $rootScope.currentUser = response.data[0];
        $scope.getUser($rootScope.currentUser._id);
        console.log('test', $rootScope.currentUser);
        $state.go('user', {
          id: $rootScope.currentUser._id
        });
      })
    });
  }

});
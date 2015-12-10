angular.module('myApp').controller('editUserCtrl', function ($scope) {

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
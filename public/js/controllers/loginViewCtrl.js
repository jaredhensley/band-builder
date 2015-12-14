angular.module('myApp').controller('loginViewCtrl', function ($scope) {

  $scope.login = function (user) {
    console.log(user);
  }

});
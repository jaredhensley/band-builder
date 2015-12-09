angular.module('myApp').controller('userCtrl', function ($scope, MainService) {

  // initial state of ngShow of group creation panel
  $scope.showGroupCreate = false;

  // function to swap display state of group creation panel
  $scope.toggleGroupCreate = function () {
    $scope.showGroupCreate = !$scope.showGroupCreate;
  }

  // function to handle MainService call to POST new group to server
  $scope.createGroup = function (newGroup) {
    newGroup.admin = $scope.user._id;
    MainService.createGroup(newGroup).then(function (result) {
      console.log('this is result from creating group', result);
    });
  }

});
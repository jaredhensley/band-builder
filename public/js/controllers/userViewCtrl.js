angular.module('myApp').controller('userViewCtrl', function ($scope, MainService, GroupService, user) {
  console.log(user);
  $scope.user = user;
  // initial state of ngShow of group creation panel
  $scope.showGroupCreate = false;
  $scope.showGroup = false;
  $scope.test = false;

  // function to swap display state of group creation panel
  $scope.toggleGroupCreate = function () {
    $scope.showGroupCreate = !$scope.showGroupCreate;
  }

  $scope.toggleGroups = function () {
    $scope.showGroup = !$scope.showGroup;
  }

  $scope.toggleTest = function () {
    $scope.test = !$scope.test;
  }

  // function to handle MainService call to POST new group to server
  $scope.createGroup = function (newGroup) {
    newGroup.admin = $scope.user._id;
    GroupService.createGroup(newGroup).then(function (result) {
      console.log('this is result from creating group', result);
      console.log('user ID in create group ctrl function', $scope.user._id);
      // change getUser to use passport login req.user object
      /*$scope.getUser($scope.user._id);*/
      $scope.toggleGroupCreate();
    });
  }



});
angular.module('myApp').controller('userViewCtrl', function ($scope, MainService, GroupService, UserService, user) {
  console.log(user);
  $scope.user = user;
  console.log('RESOLVED VALUE', user);
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
      //making a new call to logged in endpoint, which will query database off of loggedin userId and reassign scope.user to the updated user document associated with loggedin userId 
      UserService.loggedin().then(function (user) {
        $scope.user = user;
      })
      $scope.toggleGroupCreate();
    });
  }



});
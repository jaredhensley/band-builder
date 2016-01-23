angular.module('myApp').controller('userViewCtrl', function ($scope, GroupService, IdentityService, UserService) {
  $scope.IdentityService = IdentityService.currentUser;
  console.log('USER FROM IDENTITY SERVICE', $scope.IdentityService);
  /*$scope.updateUser();*/
  //    $scope.user = user;
  /*
    console.log('RESOLVED VALUE', user);
  */

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
      UserService.getCurrentUser().then(function (user) {
        console.log(user);
        $scope.updateUser();
        $scope.toggleGroupCreate();
      });

    });
  }



});
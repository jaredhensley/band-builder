angular.module('myApp').controller('groupViewCtrl', function ($scope, MainService, $stateParams) {

  console.log($stateParams);
  console.log($stateParams.id);
  MainService.getGroup($stateParams.id).then(function (result) {
    $scope.group = result.data;
  });

  $scope.editGroup = function (group) {
    group._id = $scope.group._id;
    MainService.editGroup(group).then(function (res) {
      console.log(res);
      MainService.getGroup(res.data._id).then(function (result) {
        $scope.group = result.data;
      });

    });
  }

});
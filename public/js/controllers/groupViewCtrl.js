angular.module('myApp').controller('groupViewCtrl', function ($scope, MainService, $stateParams) {

  MainService.getGroup($stateParams.id).then(function (result) {
    $scope.group = result.data;
    console.log($scope.group);
  });

  $scope.editGroup = function (group) {
   /* if (group.needs) {
   group.needs = group.needs.split(',');
 }
 if (group.genre) {
   group.genre = group.genre.split(',');
 }*/
    console.log($scope.group.needs, $scope.group.genre);
    group._id = $scope.group._id;
    console.log('BEFORE EDIT CALL', group);
    MainService.editGroup(group).then(function (res) {
      console.log(res);
      MainService.getGroup(res.data._id).then(function (result) {
        console.log(result);
        $scope.group = result.data;
        console.log(result.data);
      });
    });
  }



});
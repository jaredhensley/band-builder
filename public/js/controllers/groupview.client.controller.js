angular.module('myApp').controller('groupViewCtrl', function ($scope, GroupService, $stateParams) {

  GroupService.getGroup($stateParams.id).then(function (result) {
    $scope.group = result.data;
    console.log($scope.group.pendingUsers);
  });

  var splitText = function (str) {
    return str.split(', ');
  }

  var createUpdateObj = function (editsObj) {
    var updateObj = {};
    for (item in editsObj) {
      if (editsObj[item]) {
        updateObj[item] = editsObj[item];
      }
    }
    if (updateObj.public) {
      if (updateObj.public === 'public') {
        updateObj.public = true;
      } else {
        updateObj.public = false;
      }
    }

    return updateObj;

  };

  var filterUpdate = function (old, update) {
    var arr = splitText(update);
    var newArr = old.slice();
    arr.forEach(function (value, index) {
      if (newArr.indexOf(value) === -1) {
        newArr.push(value);
      }
    });
    return newArr;
  }

  $scope.deleteTag = function (item, from) {

    var obj = {};
    obj[from] = $scope.group[from];

    $scope.group[from].forEach(function (value, index) {
      if (value === item) {
        $scope.group[from].splice(index, 1);
      }
    });

    var obj = {};
    obj[from] = $scope.group[from];
    $scope.editGroup(obj);
  }



  $scope.editGroup = function (group) {
    var updateObj = createUpdateObj(group);
    if (updateObj.genre && typeof updateObj.genre === 'string') {
      updateObj.genre = filterUpdate($scope.group.genre, updateObj.genre);
    }
    if (updateObj.needs && typeof updateObj.needs === 'string') {
      updateObj.needs = filterUpdate($scope.group.needs, updateObj.needs);
    }
    console.log('updateObj', updateObj);
    GroupService.editGroup($scope.group._id, $scope.group.admin, updateObj).then(function (group) {
      $scope.group = group;
      console.log('result', group);
      console.log(group);
    });
  };

  $scope.approveUser = function (user) {
    console.log(555555, user);
    console.log($scope.group);
    var userObj = {
      userID: user,
      groupID: $scope.group._id
    }
    GroupService.approveUser(userObj).then(function (user) {
      console.log(666666, user);
      GroupService.getGroup($stateParams.id).then(function (result) {
        $scope.group = result.data;
      });
    });
  }


});
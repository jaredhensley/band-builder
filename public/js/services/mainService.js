angular.module('myApp').service('MainService', function ($http) {

  this.registerUser = function (user) {
    return $http({
      method: 'POST',
      url: 'http://localhost:9001/api/users',
      data: user
    });
  }

  this.getUser = function (user) {
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/api/users/' + user,
      data: user
    }).then(function (user) {
      return user;
    });
  }

  this.editUser = function (userID, userEdit) {
    return $http({
      method: 'PUT',
      url: '/api/users/' + userID,
      data: userEdit
    });
  }

  this.createGroup = function (newGroup) {
    return $http({
      method: 'POST',
      url: '/api/groups/',
      data: newGroup
    });
  }

});
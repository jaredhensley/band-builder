angular.module('myApp').service('UserService', function ($http, $q) {

  // user CRUDS

  // user POST
  this.registerUser = function (user) {
    return $http({
      method: 'POST',
      url: 'http://localhost:9001/api/users',
      data: user
    });
  }

  // user GET
  this.getUser = function (user) {
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/api/users/' + user,
      data: user
    }).then(function (user) {
      return user;
    });
  }

  // user PUT
  this.editUser = function (userID, userEdit) {
    return $http({
      method: 'PUT',
      url: '/api/users/' + userID,
      data: userEdit
    });
  }
});
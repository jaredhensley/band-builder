angular.module('myApp').factory('GroupService', function ($http, $q) {

  var getGroup = function (id) {
    return $http({
      method: 'GET',
      url: '/api/groups/' + id
    });
  };

  return {

    createGroup: function (newGroup) {
      return $http({
        method: 'POST',
        url: '/api/groups/',
        data: newGroup
      })
    },

    getGroup: getGroup,

    editGroup: function (id, admin, group) {
      group.admin = admin;
      var dfd = $q.defer();
      $http({
        method: 'PUT',
        url: '/api/groups/' + id,
        data: group
      }).then(function (group) {
        getGroup(id).then(function (response) {
          dfd.resolve(response.data);
        });
      });
      return dfd.promise;
    },

    approveUser: function (userObj) {
      return $http({
        method: 'POST',
        url: "/api/groups/approveUser",
        data: userObj
      });
    }

  }

});
angular.module('myApp').factory('GroupService', function ($http, $q) {

  var getGroup = function (id) {
    return $http({
      method: 'GET',
      url: '/api/groups/' + id
    });
  };

  // group CRUDS

  // group POST

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
      console.log("ADMIN", admin);
      console.log("group", group);
      group.admin = admin;
      console.log(id);
      var dfd = $q.defer();
      console.log(group);
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

    approveUser: function (userID) {
      console.log(userID);
      return $http({
        method: 'POST',
        url: "/api/groups/approveUser",
        data: userID
      });
    }

  }

});
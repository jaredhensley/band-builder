angular.module('myApp').factory('IdentityService', function () {

  return {
    currentUser: window.user,
    isAuthenticated: function () {
      return !!currentUser;
    }
  }
});
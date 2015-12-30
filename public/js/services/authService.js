angular.module('myApp').factory('AuthService', ['$q', '$timeout', '$http', 'IdentityService',
  function ($q, $timeout, $http, IdentityService) {

    // create user variable
    var user = null;

    function isLoggedIn() {
      if (user) {
        return true;
      } else {
        return false;
      }
    }

    function getUserStatus() {
      return user;
    }



    function login(credentials) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http({
          method: 'POST',
          url: '/api/login',
          data: credentials
        })
        // handle success
        .success(function (data, status) {
          if (status === 200 && data.status) {
            user = true;
            IdentityService.currentUser = data.data
            deferred.resolve(data.data);
          } else {
            user = false;
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function logout() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get('/api/logout')
        // handle success
        .success(function (data) {
          user = false;
          deferred.resolve(data);
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }


    function register(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http({
          method: 'POST',
          url: '/api/users',
          data: user
        })
        // handle success
        .success(function (data, status) {
          if (status === 200 && data.status) {
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }
    // return available functions for use in controllers
    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });
}]);
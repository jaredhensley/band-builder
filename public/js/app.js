angular.module('myApp', ['ui.router', 'ui.bootstrap'])


.config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../templates/homeTmpl.html',
    })
    .state('login', {
      url: '/login',
      templateUrl: '../templates/loginTmpl.html',
      controller: 'loginViewCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: '../templates/registerTmpl.html',
      controller: 'registerViewCtrl'
    })
    .state('user', {
      url: '/user/:id',
      templateUrl: '../templates/userTmpl.html',
      controller: 'userViewCtrl',
      resolve: {
        logincheck: checkLoggedin
      }
    })
    .state('editUser', {
      url: '/editUser/:id',
      templateUrl: '../templates/editUserTmpl.html',
      controller: 'editUserCtrl'
    })
    // todo  
    .state('groupView', {
      url: '/group/:id',
      templateUrl: '../templates/groupTmpl.html',
      controller: 'groupViewCtrl'
    });
});

var checkLoggedin = function ($q, $timeout, $http, $state, $rootScope) {

  var dfd = $q.defer();

  $http.get('/api/loggedin').success(function (user) {
    $rootScope.errorMessage = null;
    if (user !== '0') {
      $rootScope.currentUser = user;
      dfd.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      console.log('errrrrror');
      dfd.reject();
      $state.go('login');
    }
  });
  return dfd.promise;
}
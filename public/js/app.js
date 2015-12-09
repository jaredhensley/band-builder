angular.module('myApp', ['ui.router'])


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
      /*controller: 'favCtrl'*/
    })
    .state('register', {
      url: '/register',
      templateUrl: '../templates/registerTmpl.html',
      controller: 'registerCtrl'
    })
    .state('user', {
      url: '/user/:id',
      templateUrl: '../templates/userTmpl.html',
      controller: 'userCtrl'
    })
    .state('editUser', {
      url: '/editUser/:id',
      templateUrl: '../templates/editUserTmpl.html'
        /*controller: 'signupCtrl'*/
    })
    .state('editGroup', {
      url: '/editGroup',
      templateUrl: '../templates/editUserGroup.html'
    });
});
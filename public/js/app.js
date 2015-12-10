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
      /*controller: 'favCtrl'*/
    })
    .state('register', {
      url: '/register',
      templateUrl: '../templates/registerTmpl.html',
      controller: 'registerViewCtrl'
    })
    .state('user', {
      url: '/user/:id',
      templateUrl: '../templates/userTmpl.html',
      controller: 'userViewCtrl'
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
angular.module('myApp', ['ui.router'])


.config(function ($urlRouterProvider, $stateProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  /*    .state('home', {
        url: '/',
        templateUrl: '../templates/homeTmpl.html',
      })*/
    .state('login', {
    url: '/',
    templateUrl: '../templates/loginTmpl.html',
    controller: 'loginViewCtrl'
  })

  .state('register', {
      url: '/register',
      templateUrl: '../templates/registerTmpl.html',
      controller: 'registerViewCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: 'logoutCtrl'
    })
    .state('user', {
      url: '/user/:id',
      templateUrl: '../templates/userTmpl.html',
      controller: 'userViewCtrl',
      /*  resolve: {
          //returns logged in user to controller to be put on scope
          user: function (UserService) {
            return UserService.loggedin();
          }
        }*/
    })
    .state('search', {
      url: '/search',
      templateUrl: '../templates/searchTmpl.html',
      controller: 'searchCtrl'
    })
    .state('editUser', {
      url: '/editUser/:id',
      templateUrl: '../templates/editUserTmpl.html',
      controller: 'editUserCtrl'
    })
    .state('groupView', {
      url: '/group/:id',
      templateUrl: '../templates/groupTmpl.html',
      controller: 'groupViewCtrl'
    });

});
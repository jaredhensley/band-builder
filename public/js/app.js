angular.module('myApp', ['ui.router', 'ui.bootstrap'])


.config(function ($urlRouterProvider, $stateProvider, $httpProvider) {

  /*$urlRouterProvider.otherwise('/');*/

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
    .state('logout', {
      url: '/logout',
      controller: 'logoutCtrl'
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
      controller: 'searchCtrl',
      /*  resolve: {
          //returns logged in user to controller to be put on scope
          user: function (UserService) {
            return UserService.loggedin();
          }
        }*/
    })
    .state('editUser', {
      url: '/editUser/:id',
      templateUrl: '../templates/editUserTmpl.html',
      controller: 'editUserCtrl',
      /* resolve: {
         //returns logged in user to controller to be put on scope
         user: function (UserService) {
           return UserService.loggedin();
         }
       }*/
    })
    .state('groupView', {
      url: '/group/:id',
      templateUrl: '../templates/groupTmpl.html',
      controller: 'groupViewCtrl'
    });

});
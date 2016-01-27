'use strict';

angular.module('nuc', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute' ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller:  'MainCtrl as main'
      })
      .when('/about', {
        templateUrl: 'app/main/main.html',
        controller:  'MainCtrl as main'
      })
      .when('/home', {
        templateUrl: 'app/main/main.html',
        controller:  'MainCtrl as main'
      })
      .when('/collections', {
        templateUrl: 'app/main/main.html',
        controller:  'MainCtrl as main'
      })
      .when('/collections/:collId', {
        templateUrl: 'app/main/main.html',
        controller:  'MainCtrl as main'
      })
      .when('/contact', {
        templateUrl: 'app/main/main.html',
        controller:  'MainCtrl as main'
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
      //$locationProvider.html5Mode(true).hashPrefix('!');
      $locationProvider.html5Mode(false);
  })
;

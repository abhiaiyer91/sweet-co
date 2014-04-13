'use strict';

var app = angular
  .module('sweetcoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl'
      })
      .when('/products/:productSku', {
        templateUrl: 'views/product.html',
        controller: 'StoreCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/shoppingCart.html',
        controller: 'StoreCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

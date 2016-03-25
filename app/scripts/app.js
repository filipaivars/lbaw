'use strict';

/**
 * @ngdoc overview
 * @name lbawApp
 * @description
 * # lbawApp
 *
 * Main module of the application.
 */
angular
  .module('lbawApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question'
      })
      .when('/searchResults',{
        templateUrl: 'views/searchResults.html',
        controller: 'searchResultsCtrl',
        controllerAs: 'searchResults'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('todoApp', ['ngRoute']).config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'sections/landing/landing.html',
      controller: 'LandingCtrl',
      controllerAs: 'lCtrl'
    })
});

angular.module("appRoutes", [])
.config(['$routeProvider', '$locationProvider',
 function ($routeProvider, locationProvider) {

     $routeProvider
     .when('/', { templateUrl: 'app/home/home.html' })
     .when('/games', { templateUrl: 'app/games/games.html' })
     .when('/about', { templateUrl: 'app/about/about.html' })
     .when('/gameArt', {templateUrl: 'app/gameArt/gameArt.html' });

     // $locationProvider.html5Mode(true)

 }]);
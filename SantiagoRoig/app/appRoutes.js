angular.module("appRoutes", [])
.config(['$routeProvider', '$locationProvider',
 function ($routeProvider, locationProvider) {

     $routeProvider
     .when('/', {
         templateUrl: 'app/home/home.html'
     });

     // $locationProvider.html5Mode(true)

 }]);
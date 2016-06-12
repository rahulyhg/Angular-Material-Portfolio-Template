var MyApp = angular.module("MyApp", ["ngRoute", "ngResource", "appRoutes",
    "ngMaterial", "ngMessages", "ngSanitize", "ngAnimate",'ngMessages'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('light-blue')
          .accentPalette('orange');
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });
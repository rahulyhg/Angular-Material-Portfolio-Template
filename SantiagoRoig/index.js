MyApp.controller('IndexController', function ($scope, $location) {

    $scope.clicked = function (url) {
        $location.path(url);
    }
});
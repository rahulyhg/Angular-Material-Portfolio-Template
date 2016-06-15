MyApp.controller('IndexController', function ($scope, $location) {

    $scope.clicked = function () {
        $location.path('/about')
    }
});
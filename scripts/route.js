var app = angular.module("postApp");

app.config(function($routeProvider) {
    $routeProvider.when('/view1', {
            controller: 'viewCtrl',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2', {
            controller: 'viewCtrl',
            templateUrl: 'partials/view2.html'
        })
        .when('/view3', {
            controller: 'viewCtrl',
            templateUrl: 'partials/view3.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

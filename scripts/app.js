var app = angular.module('postApp', ['ngRoute']);

app.directive ('post', function(){
  return {
      restrict: 'AE',
      templateUrl: 'templates/post.html',
      replace: false
  };
});

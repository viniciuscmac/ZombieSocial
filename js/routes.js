(function(){
  angular.module('zombieSocial')

  .config(function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
              });
  $routeProvider
  .when("/", {
      templateUrl : "templates/home.html"
  })
  .when("/new", {
      templateUrl : "templates/newSurvivor.html"
  })
  .when("/login", {
      templateUrl : "templates/login.html"

  })
  .when("/stats", {
      templateUrl : "templates/stats.html"
  }).otherwise({
          redirectTo : '/'
        });

});

})();

(function() {
var app = angular.module('zombieSocial', ['ngRoute']);
app.config(function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
          });
  $routeProvider
  .when("/", {
      templateUrl : "templates/home.html"
  })
  .when("/new", {
      templateUrl : "templates/newSurvivor.html",
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

app.controller('SurvivorsController', function(){
    this.people = survivors;
  });

app.controller('FormController', function(){
    this.forms = {};

    this.addUser = function() {
      this.forms = {}

    }
  });

  /*app.controller('SurvivorsController', function(){
    this.people = survivors;
  });

  app.controller('TabController', function(){
     this.tab = 1;

     this.setTab = function(newValue){
       this.tab = newValue;
     };

     this.isSet = function(tabName){
       return this.tab === tabName;
     };
   });

*/
var survivors =[{
     name:'Vini',
     age: 24,
     gender:'Male',
     location: 'Goiania',
     water: 1,
     food: 5,
     medication: 12,
     ammunation: 24,
     infected: true
   },{
     name:'HAHAHA',
     age: 123,
     gender:'asdasd',
     location: 'asda',
     water: 123,
     food: 123,
     medication: 123,
     ammunation:12,
     infected: false
   }];

})();

(function() {
  var app = angular.module('zombieSocial', []);

  app.controller('SurvivorsController', function(){
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


   var survivors =[{
     name:'Vini',
     age: 24,
     gender:'Male',
     location: 'Goiania',
     water: 1,
     food: 5,
     medication: 12,
     ammunation: 24
   },{
     name:'HAHAHA',
     age: 123,
     gender:'asdasd',
     location: 'asda',
     water: 123,
     food: 123,
     medication: 123,
     ammunation:12
   }];
   
})();

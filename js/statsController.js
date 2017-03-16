(function() {
  angular.module('zombieSocial').controller('StatsController', StatsController);

  StatsController.$inject = ['Survivor'];

  function StatsController(Survivor) {
  	var vm = this;

    vm.infected = 0;
    vm.genderM = 0;
    vm.genderF=0;
    vm.people = Survivor.query().$promise.then(function(array){
        vm.total = array.length;
        console.log(array);
        for (var i = 0; i < array.length; i++) {
          if (array[i]["infected?"]==true) {
            vm.infected++;
          }
          if (array[i].gender=="M") {
            vm.genderM++;
          }
          else {
            vm.genderF++;
          }
          vm.percentageNotInfected = (vm.infected/vm.total)*100;

        }
      });
  }
})();

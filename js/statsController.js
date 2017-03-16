(function() {
  angular.module('zombieSocial').controller('StatsController', StatsController);

  StatsController.$inject = ['Survivor'];

  function StatsController(Survivor) {
  	var vm = this;

    vm.people = Survivor.query();

    console.log(vm.people);
  }
})();

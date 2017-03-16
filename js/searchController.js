(function() {
  angular.module('zombieSocial').controller('SearchController', SearchController);

  SearchController.$inject = ['Survivor'];

  function SearchController(Survivor) {
  	var vm = this;
    var string = "c496900e-8a2b-4fdb-b0be-4a1f90ac39e9";
    vm.person = Survivor.query({id:string});

    console.log(vm.person);
  }
})();

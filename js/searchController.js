(function() {
  angular.module('zombieSocial').controller('SearchController', SearchController);

  SearchController.$inject = ['Survivor'];

  function SearchController(Survivor) {

  	var vm = this;
    vm.valid = false;
    vm.getData = getData;

   function getData(){
     vm.data = Survivor.get({ id: vm.id });
     vm.valid = true;
   }
 }
})();

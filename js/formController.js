(function() {
  angular.module('zombieSocial').controller('FormController',FormController);

  FormController.$inject = ['Survivor','$window'];

  function FormController(Survivor, $window) {
  	var vm = this;

    vm.newSurvivor = new Survivor();
    vm.add = add;

    function add(){
      vm.newSurvivor.lonlat = "POINT("+vm.lat+","+vm.lng+")";
      vm.newSurvivor.items = "Water:" + vm.water + ";Food:" + vm.food + ";Medication:" + vm.medication + ";Ammunition:" + vm.ammunition;
      vm.newSurvivor.$save(function(result){
        vm.survivorData = result;
        console.log(result);
        $window.alert("Your id is: "+result.id+"");
        vm.water="";
        vm.food="";
        vm.medication="";
        vm.ammunition="";
        vm.newSurvivor = {};
        vm.lat= "";
        vm.lng="";
      })

    }

  }
})();

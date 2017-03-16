(function() {
  angular.module('zombieSocial').controller('FormController', FormController);

  FormController.$inject = ['Survivor'];

  function FormController(FormController) {
  	var vm = this;

    vm.title = "zombieSocial API"


  }
})();

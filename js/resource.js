(function() {
  angular.module('zombieSocial').factory('Survivor', Survivor);

  Survivor.$inject = ['$resource'];

  function Survivor($resource){
    var res = $resource('http://zssn-backend-example.herokuapp.com/api/people/:id');
    return res;
  }
})();

(function() {
  angular.module('zombieSocial').factory('AllSurvivors', AllSurvivors);

  AllSurvivors.$inject = ['$resource'];

  function AllSurvivors($resource){
    var res = $resource('http://zssn-backend-example.herokuapp.com/api/people.json');
    return res;
  }
})();

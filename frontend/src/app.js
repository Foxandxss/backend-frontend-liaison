import angular from 'angular';

angular.module('app', []).controller('MainCtrl', function($http) {
  var vm = this;

  $http.get('/api/foo').then(function(result) {
    vm.data = result.data;
  })
});
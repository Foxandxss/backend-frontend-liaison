import angular from 'angular';
import uirouter from 'angular-ui-router';

angular.module('app', [uirouter])
  .config(configUiRouter)
  .controller('MainCtrl', MainCtrl);

function configUiRouter($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    template: 'Hello, data from server: {{vm.data}}',
    controller: 'MainCtrl',
    controllerAs: 'vm'
  });
}

function MainCtrl($http) {
  var vm = this;

  $http.get('/api/foo').then(function(result) {
    vm.data = result.data;
  })
}
(function(){

  angular.module('myApp',['ui.router', 'ngCookies', 'ngAnimate', 'ngTouch']) 
  
  .run(function($rootScope){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.stateName = toState.name;
    })
  })

  .config(['$stateProvider', 
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, 
      $urlRouterProvider,
      $locationProvider){

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
      });

      $stateProvider
      .state('welcome', {
        url:'/',
        templateUrl: 'start.html',
        controller: ['$cookies', '$state', '$scope', function($cookies, $state, $scope){
          $scope.swipeLeft = function() {
            $state.go('register');
          }
          $cookies.putObject('mars_user', undefined);
        }],
        controllerAs: 'welcome'
      })
      .state('register', {
        url:'/register',
        templateUrl: 'who.html',
        controller: 'RegisterFormCtrl',
        resolve:{
          user: ['$cookies', function($cookies){
            if($cookies.getObject('mars_user')) {
              $state.go('encounters');
            }
          }]
        }
      })
      .state('encounters', {
        url:'/encounters',
        templateUrl: 'recent.html',
        controller: 'encountersCtrl',
      })
      .state('reports', {
        url:'/reports',
        templateUrl: 'report.html',
        controller: 'ReportFormCtrl'
      })

    }])

.controller('RegisterFormCtrl', ['$scope', '$state', '$http', '$cookies', function($scope, $state, $http, $cookies) {

  var API_URL_GET_JOBS = "https://red-wdp-api.herokuapp.com/api/mars/jobs";
  var API_URL_CREATE_COLONIST = "https://red-wdp-api.herokuapp.com/api/mars/colonists"; 

  $scope.colonists = {};

  $http.get(API_URL_GET_JOBS).then(function(response){
    $scope.jobs = response.data.jobs;
  })

  $scope.showValidation = false;
  $scope.submitRegistration = function(e, form) {
    e.preventDefault();
    console.log(form);

    if ($scope.myForm.$invalid) {
      $scope.showValidation = true;
    } else {

      $http({
        method: 'POST',
        url: API_URL_CREATE_COLONIST,
        data: { colonist: $scope.colonist }
      }).then(function(response){
        
        $cookies.putObject('mars_user', response.data.colonist);
        $state.go('encounters');
      })
    }
  }
}])


.controller('encountersCtrl', [ '$scope','$http', function($scope, $http){
  var ENCOUNTERS_API_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
  $http.get(ENCOUNTERS_API_URL).then(function(response){
    $scope.encounters=response.data.encounters;
      // debugger;
    })

}])


.controller('ReportFormCtrl', ['$scope', '$state', function($scope, $state) {

  $scope.showValidation = false;

  $scope.submitReport = function(e, form) {
    e.preventDefault();
    console.log(form);

    if ($scope.myReportForm.$invalid) {
      $scope.showValidation = true;
    } else {
      alert('Your report has been filed');
    }
  }
}]) 

})();


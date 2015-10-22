(function(){

angular.module('myApp', ['ui.router']) 

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
                    templateUrl: 'start.html'
                })
                .state('register', {
                    url:'/register',
                    templateUrl: 'who.html',
                    controller: 'RegisterFormCtrl'
                })
                .state('encounters', {
                    url:'/encounters',
                    templateUrl: 'recent.html',
                })
                .state('reports', {
                    url:'/reports',
                    templateUrl: 'report.html',
                    controller: 'ReportFormCtrl'
                })

                // .state('page3', {
                //     url:'/page3',
                //     templateUrl: 'recent.html'
                // }).state('page4', {
                //     url:'/g',
                //     templateUrl: 'report.html'
                // })


}])
  // .run(['$rootScope', function($rootScope){

  // }])
  .controller('RegisterFormCtrl', ['$scope', '$state', function($scope, $state) {

  $scope.showValidation = false;

  $scope.submitRegistration = function(e, form) {
        e.preventDefault();
        console.log(form);
  
  if ($scope.myForm.$invalid) {
      $scope.showValidation = true;
    } else {
      $state.go('encounters');
      }
    }
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

    // .controller('ReportFormCtrl', ['$scope', function($scope) {

    //   $scope.submitReport = function(e, form) {
    //     e.preventDefault();
    //     console.log(form);



    //   }

     //  $scope.enter = function(e, myForm) {
     //  e.preventDefault(); 

     // if ($scope.myForm.$invalid) {
     //  $scope.showValidation = true;

     //  }


// }]);

   //  $scope.enter = function(e) {
   //    e.preventDefault(); 

   //   if ($scope.myForm.$invalid) {
   //    $scope.showValidation = true;

   //    }

   // } 
 })();
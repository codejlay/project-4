(function(){

angular.module('myApp', []) 
  // .run(['$rootScope', function($rootScope){

  // }])
  .controller('RegisterFormCtrl', ['$scope', function($scope){

  $scope.showValidation = false;

    $scope.enter = function(e) {
      e.preventDefault(); 

     if ($scope.myForm.$invalid) {
      $scope.showValidation = true;
      alert('hola');

      }

      // $scope.submitRegistration = function(e, form) {
      //   e.preventDefault();
      //   console.log(form);
        
    }// }

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
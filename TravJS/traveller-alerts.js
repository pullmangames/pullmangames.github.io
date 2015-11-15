alertModule = angular.module('travellerAlerts', []); //declare the module for handling alerts

alertModule.controller('alertsController', ['$scope', 'alertsService', function($scope, alertsService) {
   $scope.alerts = alertsService.alerts;
   
   $scope.clearAlert = alertsService.deleteAlert;
}]);

alertModule.service('alertsService', ['$window', function($window) {
   this.alerts = [];
   
   this.addAlert = function(alertType, alertMessage) {
      this.alerts.push({type: alertType, msg: alertMessage})
      $window.scrollTo(0,0);
   }
   
   this.deleteAlert = function(index) {
      this.alerts.splice(index, 1);
   }
}]);

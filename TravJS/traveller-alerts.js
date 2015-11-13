alertModule = angular.module('travellerAlerts', []); //declare the module for handling alerts

alertModule.controller('alertsController', ['$scope', 'alertsService', function($scope, alertsService) {
   $scope.alerts = alertsService.alerts;
   
   $scope.clearAlert = alertsService.deleteAlert;
}]);

alertModule.service('alertsService', [function() {
   this.alerts = [];
   
   this.addAlert = function(alertType, alertMessage) {
      this.alerts.push({type: alertType, msg: alertMessage})
   }
   
   this.deleteAlert = function(index) {
      this.alerts.splice(index, 1);
   }
}]);

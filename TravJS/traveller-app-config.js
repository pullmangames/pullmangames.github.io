configModule = angular.module('travAppConfig', []); //declare the module for handling alerts

configModule.controller('configController', ['$scope', 'dataStorageService', function($scope, dataStorageService) {
   $scope.exportAll = dataStorageService.exportAll;
   $scope.importAll = function(inputElementList) {
      var inputElement = inputElementList[0];
      dataStorageService.importAll(inputElement.files[0]);
      inputElement.value = '';
   };
}]);

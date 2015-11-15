dmSelectorTestModule = angular.module('travellerDmSelectorTest', []); //declare the module for handling alerts

dmSelectorTestModule.controller('dmSelectorTestController', ['$scope', 'skillsService', function($scope, skillsService) {
   $scope.dmResult = {};
}]);

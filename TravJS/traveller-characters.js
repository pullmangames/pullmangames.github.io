charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters
      
charModule.controller('charactersController', ['$scope', 'charactersService', function($scope, charactersService) {
   $scope.char1 = charactersService.firstCharacter;
   $scope.skillList = charactersService.firstCharacter.skills.fullList;
}]);

charModule.factory('character', ['skills', function(skills) {
   var character = function() {
      this.skills = new skills();
   };
   return character;
}]);

charModule.service('charactersService', ['character', function(character) {
   this.firstCharacter = new character();
}]);

charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters
      
charModule.controller('charactersController', ['$scope', 'charactersService', function($scope, charactersService) {
   $scope.char1 = charactersService.firstCharacter;
   $scope.skillList = charactersService.firstCharacter.skills.fullList;
   $scope.setSkillFocus = function(name)
   {
      window.setTimeout(function() {document.getElementById(name).focus()}, 0);
   };
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

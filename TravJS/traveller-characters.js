charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters
      
charModule.controller('charactersController', ['charactersService', function(charactersService) {
   this.char1 = charactersService.firstCharacter;
}]);

charModule.factory('Character', [function() {
   var Character = function() {};
   return Character;
}]);

charModule.service('charactersService', ['Character', function(Character) {
   this.firstCharacter = new Character();
}]);

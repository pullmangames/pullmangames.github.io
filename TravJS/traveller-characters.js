charModule = angular.module('travellerCharacters', []) //declare the module for handling chracters
      
charModule.controller('charactersController', ['Character', function(Character) {
   this.char1 = new Character();
}]);

charModule.factory('Character', [function() {
   var Character = function() {};
   return Character;
}]);
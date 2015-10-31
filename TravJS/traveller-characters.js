charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters
      
charModule.controller('charactersController', ['$scope', 'charactersService', function($scope, charactersService) {
   $scope.characterList = charactersService.characters;

   $scope.setSkillFocus = function(name)
   {
      window.setTimeout(function() {document.getElementById(name).focus()}, 0);
   };

   $scope.selectCharacter = function(id)
   {
      $scope.selectedCharacter = $scope.characterList[id];
      $scope.skillList = $scope.selectedCharacter.skills.fullList;
   }
   
   $scope.addCharacter = function()
   {
      $scope.selectCharacter(charactersService.addCharacter());
   }
   
   $scope.deleteCharacter = function(id)
   {
      charactersService.deleteCharacter(id);
      $scope.selectCharacter(0);
   }
   
   $scope.isActive = function(id)
   {
      return (id === $scope.selectedCharacter.id);
   }
   
   if ($scope.characterList.length)
   {
      $scope.selectCharacter(0);
   }
}]);

charModule.factory('character', ['skills', function(skills) {
   var character = function() {
      this.skills = new skills();
   };
   return character;
}]);

charModule.service('charactersService', ['character', function(character) {
   this.characters = [];
   _newCharsCreated = 0;
   _recalcIds = function(arrayToRecalc)
   {
      len = arrayToRecalc.length
      for (var i = 0; i < len; i++)
      {
         arrayToRecalc[i].id = i;
      }
   };

   this.addCharacter = function()
   {
      var newChar = new character();
      _newCharsCreated++;
      newChar.name = "New Character #" + _newCharsCreated;
      var id = this.characters.push(newChar) - 1;
      newChar.id = id;
      return id;
   };
   
   this.deleteCharacter = function(id)
   {
      this.characters.splice(id, 1);
      _recalcIds(this.characters);
   };
}]);

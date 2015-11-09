charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters
      
charModule.controller('charactersController', ['$scope', 'charactersService', function($scope, charactersService) {
   $scope.characterList = charactersService.characters;

   $scope.selectCharacter = function(id)
   {
      $scope.selectedCharacter = $scope.characterList[id];
      $scope.skillList = $scope.selectedCharacter.skills.fullList;
      var len = $scope.characterList.length;
      for (var i = 0; i < len; i++)
      {
         if (i === id)
         {
            $scope.characterList[i].active = true;
         }
         else
         {
            $scope.characterList[i].active = false;
         }
      }
      
   }
   
   $scope.exportAll = function()
   {
      var len = $scope.characterList.length;
      for (var i = 0; i < len; i++)
      {
         $scope.characterList[i].exportToJson();
      }
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
      this.exportToJson = function()
      {
         var jsonified = angular.toJson(this, 3);
         var element = document.createElement('a');
         element.setAttribute('href', 'data:application/json,' + encodeURIComponent(jsonified));
         element.setAttribute('download', this.name + '.json');
         element.style.display = 'none';
         document.body.appendChild(element);
         element.click();
         document.body.removeChild(element);
      }
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

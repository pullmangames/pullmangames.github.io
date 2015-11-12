charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters

charModule.controller('charactersController', ['$scope', 'charactersService', function($scope, charactersService) {
   $scope.characterList = charactersService.characters;
   
   $scope.selectCharacter = function(id)
   {
      if ($scope.characterList.length === 0)
      {
         $scope.selectedCharacter = null;
         $scope.skills = null;
         return;
      }

      $scope.selectedCharacter = $scope.characterList[id];
      $scope.skills = $scope.selectedCharacter.skills;
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

   $scope.importCharacter = function(inputElementList)
   {
      var inputElement = inputElementList[0];
      charactersService.importCharacter(inputElement.files[0], $scope.selectCharacter);
      inputElement.value = '';
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

   var _skillBeingEdited = "";
   var _backupValue = 0;
   
   $scope.skillValueBeingEdited = function(skill) {
      return (_skillBeingEdited === skill.name);
   }

   $scope.editSkillValue = function(skill) {
      if (!(skill.value === undefined || skill.value === null))
      {
         _backupValue = skill.value;
      }
      _skillBeingEdited = skill.name;
   }
   
   $scope.skillValueEditingComplete = function(skill) {
      if (skill.value === undefined || skill.value === null)
      {
         skill.value = _backupValue;
      }
      _skillBeingEdited = "";
   }

   if ($scope.characterList.length)
   {
      $scope.selectCharacter(0);
   }
}]);

charModule.factory('character', ['skills', function(skills) {
   var character = function() {
      this.skills = new skills();
      this.formatVersion = 1;
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

charModule.service('charactersService', ['$rootScope', 'character', 'skill', 'alertsService', function($rootScope, character, skill, alertsService) {
   this.characters = [];
   _newCharsCreated = 0;
   _recalcIds = function(arrayToRecalc) {
      len = arrayToRecalc.length
      for (var i = 0; i < len; i++)
      {
         arrayToRecalc[i].id = i;
      }
   };

   this.addCharacter = function() {
      var newChar = new character();
      _newCharsCreated++;
      newChar.name = "New Character #" + _newCharsCreated;
      var id = this.characters.push(newChar) - 1;
      newChar.id = id;
      return id;
   };

   this.importCharacter = function(fileToRead, selectCharacter) {
      var reader = new FileReader();
      var charList = this.characters;
      reader.onload = function(e) {
         $rootScope.$apply(function() {
            var newChar = new character();

            try {
               var charFromJson = angular.fromJson(e.target.result);
            } catch (err) {
               alertsService.addAlert("warning", "The file you tried to load does not appear to be a character sheet");
            }
            
            if (   !charFromJson.formatVersion
                || charFromJson.formatVersion != 1)
            {
               alertsService.addAlert("warning", "The character sheet you loaded has in invalid version number");
               return;
            }

            //Skills on a saved character may not match the skills from a new
            //character, so build a skill list that matches
            var jsonSkillList = charFromJson.skills.skillList;
            newChar.skills.skillList = [];
            for (var i = 0; i < jsonSkillList.length; i++)
            {
               newChar.skills.addSkill(new skill(jsonSkillList[i].name));
            }

            angular.merge(newChar, charFromJson);
            charList.push(newChar);
            _recalcIds(charList);
            selectCharacter(charList.length - 1);
      })};

      try {
         reader.readAsText(fileToRead);
      } catch (err) {
         alertsService.addAlert("warning", "Unable to read " + fileToRead.name)
      }
   }

   this.deleteCharacter = function(id) {
      this.characters.splice(id, 1);
      _recalcIds(this.characters);
   };
}]);

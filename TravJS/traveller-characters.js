charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters

charModule.controller('charactersController', ['$scope', 'charactersService', function($scope, charactersService) {
   $scope.characterList = charactersService.characters;

   $scope.charTabActive = {};

   $scope.indexOfSelectedChar = null;

   $scope.selectCharacter = function(index)
   {
      if ($scope.characterList.length === 0)
      {
         $scope.selectedCharacter = null;
         $scope.skills = null;
         return;
      }

      $scope.selectedCharacter = $scope.characterList[index];
      $scope.skills = $scope.selectedCharacter.skills;
      $scope.charTabActive = {};
      $scope.charTabActive[index] = true;
      $scope.indexOfSelectedChar = index;
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

   $scope.deleteCharacter = function(index)
   {
      charactersService.deleteCharacter(index);
      $scope.selectCharacter(0);
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

/* Sort the skills.
 * Skills that are not specialties should appear in standard alphabetical order.
 * Skills that are specialties should come immediately after their parent skill.
 * A skill's specialties should be sorted alphabetically. */
charModule.filter('skillSorter', ['skillsService', function(skillsService) {
   return function(items, field) {
      var sorted = [];
      angular.forEach(items, function(item) {
         sorted.push(item);
      });
      sorted.sort(function(a, b) {
         var skillDataA = skillsService.lookupDefaultSkill(a.name);
         var skillDataB = skillsService.lookupDefaultSkill(b.name);
         if (skillDataA && skillDataA.parent) //a is a specialty
         {
            if (skillDataB && skillDataB.parent) //both are specialties
            {
               if (skillDataA.parent.localeCompare(skillDataB.parent) === 0) //specialties with same parent
               {
                  return a.name.localeCompare(b.name);
               }
               return skillDataA.parent.localeCompare(skillDataB.parent); //specialties with different parents
            }
            else //a is a specialty, b is not
            {
               if (skillDataA.parent.localeCompare(b.name) === 0) //b is a's parent
               {
                  return 1;
               }
               return skillDataA.parent.localeCompare(b.name); //b is not a's parent
            }
         }
         else //a is not a specialty
         {
            if (skillDataB && skillDataB.parent) //a is not a specialty, b is
            {
               if (a.name.localeCompare(skillDataB.parent) === 0) //a is b's parent
               {
                  return -1;
               }
               return a.name.localeCompare(skillDataB.parent) //a is not b's parent
            }
            else //neither a nor b is a specialty
            {
               return a.name.localeCompare(b.name);
            }
         }
      });
      return sorted;
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

   this.addCharacter = function() {
      var newChar = new character();
      _newCharsCreated++;
      newChar.name = "New Character #" + _newCharsCreated;
      return this.characters.push(newChar) - 1;
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
            selectCharacter(charList.length - 1);
      })};

      try {
         reader.readAsText(fileToRead);
      } catch (err) {
         alertsService.addAlert("warning", "Unable to read " + fileToRead.name)
      }
   }

   this.deleteCharacter = function(index) {
      this.characters.splice(index, 1);
   };
}]);

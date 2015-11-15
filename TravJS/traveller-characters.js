charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters

charModule.controller('charactersController', ['$scope', '$uibModal', 'charactersService', 'skillsService', 'skill', 'alertsService', function($scope, $uibModal, charactersService, skillsService, skill, alertsService) {
   $scope.characterList = charactersService.characters;
   
   $scope.characteristics = charactersService.characteristics;

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

   $scope.saveToLocalStorage = function()
   {
      localStorage.setItem("characterList", angular.toJson($scope.characterList));
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

   $scope.openAddTradeSkillModal = function() {
      var modalInstance = $uibModal.open({
         templateUrl: 'addTradeSkillModal.view',
         controller: 'addTradeSkillModalController',
         size: 'sm'
      });

      modalInstance.result.then(
         function(newTradeSkillName) {
            if (!newTradeSkillName)
            {
               alertsService.addAlert("danger", "Cannot add trade skill: invalid name");
               return;
            }
            else if ($scope.selectedCharacter.skills.findSkill(newTradeSkillName))
            {
               alertsService.addAlert("danger", "Cannot add trade skill \"" + newTradeSkillName + "\": a skill with that name already exists");
               return;
            }
            
            var newSkill = new skill(newTradeSkillName, true);
            newSkill.hasBeenLearned = true;
            newSkill.value = 0;
            $scope.selectedCharacter.skills.addSkill(newSkill);
         }
      );
   };
   
   $scope.openDeleteTradeSkillModal = function() {
      var modalInstance = $uibModal.open({
         templateUrl: 'deleteTradeSkillModal.view',
         controller: 'deleteTradeSkillModalController',
         size: 'sm',
         resolve: {
            tradeSkills: function() {
               var tradeSkills = [];
               var skillList = $scope.selectedCharacter.skills.skillList;
               var len = skillList.length;
               for (var i = 0; i < len; i++)
               {
                  if (skillList[i].isTradeSkill)
                  {
                     tradeSkills.push({index: i, skill: skillList[i]});
                  }
               }
               tradeSkills.sort(function(a,b) {return a.skill.name.localeCompare(b.skill.name);});
               return tradeSkills;
            }
         }
      });

      modalInstance.result.then(
         function(index) {
            $scope.selectedCharacter.skills.deleteSkill(index);
         }
      );
   };
   
   $scope.getSkillClass = function(skill) {
      if (skill.name === "Trade")
      {
         return "skillIsTrade";
      }
      var skillData = skillsService.lookupDefaultSkill(skill.name);
      if (   (skillData && skillData.parent)
          || skill.isTradeSkill)
      {
         return "specialtySkill";
      }
      return "nonSpecialtySkill";
   }
   
   if ($scope.characterList.length)
   {
      $scope.selectCharacter(0);
   }
}]);

charModule.controller('addTradeSkillModalController', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
   $scope.addTradeSkillModalOk = function() {
      $uibModalInstance.close($scope.newTradeSkillName);
   };

   $scope.addTradeSkillModalCancel = function() {
      $uibModalInstance.dismiss('cancel');
   };
}]);

charModule.controller('deleteTradeSkillModalController', ['$scope', '$uibModalInstance', 'tradeSkills', function ($scope, $uibModalInstance, tradeSkills) {
   $scope.tradeSkills = tradeSkills;
   $scope.selectedSkill = tradeSkills[0];

   $scope.deleteTradeSkillModalOk = function() {
      $uibModalInstance.close($scope.selectedSkill.index);
   };

   $scope.deleteTradeSkillModalCancel = function() {
      $uibModalInstance.dismiss('cancel');
   };
}]);

//Determine all characters' DM for a chosen skill and set of characteristics. One character may then be selected to perform the roll.
//The selected character will be stored in the object passed to the directive via ng-model
//Example: <traveller-skill-dm ng-model="dmResult"></traveller-skill-dm>
//In the example, the chosen character will be saved in a scope variable named dmResult
//The bound object will have the following properties:
//  character: the selected character
//  dm:        selected character's dice modifier
charModule.directive('travellerSkillDm', [function() {
   var controller = ['$scope', 'charactersService', 'skillsService', function($scope, charactersService, skillsService) {

      $scope.skills = skillsService.usableSkills;
      $scope.characteristics = charactersService.characteristics;
      $scope.selected = {};
      $scope.results = [];
      $scope.selectedResultIndex = -1;

      $scope.selectResult = function(index)
      {
         $scope.selectedResultIndex = index;
         $scope.ngModel = $scope.results[index];
      };
      
      $scope.clearSelections = function()
      {
         $scope.selected.skill = undefined;
         $scope.selected.characteristics = undefined;
         $scope.updateCharList();
      }

      $scope.updateCharList = function() {
         $scope.results = [];
         $scope.selectedResultIndex = -1;
         $scope.ngModel = {};
         var characters = charactersService.characters;
         var selectedSkill = $scope.selected.skill;
         var selectedStats = $scope.selected.characteristics;

         if (!selectedSkill && (!selectedStats || selectedStats.length === 0))
         {
            return;
         }

         var len = characters.length;
         for (var i = 0; i < len; i++)
         {
            var character = characters[i];
            var dm = 0;
            
            if (selectedSkill)
            {
               var skill = character.skills.findSkill(selectedSkill.name);
               if (skill.hasOwnProperty('value')) //User has the skill
               {
                  dm += skill.value;
               }
               else
               {
                  //If the user doesn't have the skill, see if there's a bonus from Jack of all Trades
                  var jackOfAllTrades = character.skills.findSkill("Jack of all Trades");
                  if (jackOfAllTrades.hasOwnProperty('value'))
                  {
                     dm += (jackOfAllTrades.value - 3);
                  }
                  else //No bonus - default DM of -3
                  {
                     dm -= 3;
                  }
               }
            }
            if (selectedStats)
            {
               var bestStat = Number.NEGATIVE_INFINITY;
               var len2 = selectedStats.length;
               for (var j = 0; j < len2; j++)
               {
                  var statName = selectedStats[j].name;
                  var statVal = 0; //If use hasn't filled out the characteristic, default to a score of 0
                  if (character.hasOwnProperty(statName))
                  {
                     statVal = character[statName];
                  }
                  if (statVal > bestStat)
                  {
                     bestStat = statVal;
                  }
               }
               if (!(bestStat === Number.NEGATIVE_INFINITY))
               {
                  dm += charactersService.dmFromCharacteristic(bestStat);
               }
            }
            $scope.results.push({
               character: character,
               dm:        dm
            });
         }
      };
   }];

   return {
      restrict: 'E',
      scope: {
         ngModel: "="
      },
      templateUrl: 'travellerSkillDm.view',
      controller: controller
   };
}])

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
         if (a.isTradeSkill) //a is a trade skill
         {
            if (b.isTradeSkill) //both are trade skills (specialties with same parent)
            {
               return a.name.localeCompare(b.name);
            }
            else if (skillDataB && skillDataB.parent) //a is a trade skill, b is a specialty (specialties with different parents)
            {
               return "Trade".localeCompare(skillDataB.parent);
            }
            else if (b.name === "Trade") //a is a trade skill, b is "Trade"
            {
               return 1; //b is a's parent
            }
            else //a is a trade skill, b is not a specialty
            {
               return "Trade".localeCompare(b.name); //b is not a's parent
            }
         }
         else if (b.isTradeSkill)
         {
            if (skillDataA && skillDataA.parent) //a is a specialty, b is a trade skill (specialties with different parents)
            {
               return skillDataA.parent.localeCompare("Trade");
            }
            else if (a.name === "Trade") //a is "Trade", b is a trade skill
            {
               return -1; //a is b's parent
            }
            else //a is not a specialty, b is a trade skill
            {
               return a.name.localeCompare("Trade"); //a is not b's parent
            }
         }
         else if (skillDataA && skillDataA.parent) //a is a specialty
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

   var _newCharsCreated = 0;
   var _storedChars;

   var _buildCharFromJsonChar = function(jsonChar, errorMsg)
   {
      var newChar = new character();

      if (   !jsonChar.formatVersion
          || jsonChar.formatVersion != 1)
      {
         if (errorMsg)
         {
            alertsService.addAlert("danger", errorMsg);
         }
         return null;
      }

      //Skills on a saved character may not match the skills from a new
      //character, so build a skill list that matches
      var jsonSkillList = jsonChar.skills.skillList;
      newChar.skills.skillList = [];
      for (var j = 0; j < jsonSkillList.length; j++)
      {
         newChar.skills.addSkill(new skill(jsonSkillList[j].name));
      }

      angular.merge(newChar, jsonChar);
      return newChar;
   };

   try
   {
      _storedChars = angular.fromJson(localStorage.getItem("characterList"));
   }
   catch (err) { }

   if (_storedChars)
   {
      var storedCount = _storedChars.length;
      for (var i = 0; i < storedCount; i++)
      {
         var newChar = _buildCharFromJsonChar(_storedChars[i], "Saved character sheet has in invalid version number");
         if (newChar)
         {
            this.characters.push(newChar);
         }
      }
   }

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
            try {
               var charFromJson = angular.fromJson(e.target.result);
            } catch (err) {
               alertsService.addAlert("danger", "The file you tried to import does not appear to be a character sheet");
               return;
            }

            var newChar = _buildCharFromJsonChar(charFromJson, "The character sheet you imported has in invalid version number");

            charList.push(newChar);
            selectCharacter(charList.length - 1);
      })};

      try {
         reader.readAsText(fileToRead);
      } catch (err) {
         alertsService.addAlert("danger", "Unable to read " + fileToRead.name)
      }
   }

   this.deleteCharacter = function(index) {
      this.characters.splice(index, 1);
   };
   
   this.characteristics = [
      { name: "Str", order: 0},
      { name: "Dex", order: 1},
      { name: "End", order: 2},
      { name: "Int", order: 3},
      { name: "Edu", order: 4},
      { name: "Soc", order: 5}
   ];
   
   this.dmFromCharacteristic = function(value) {
      if (value <= 0)
      {
         return -3;
      }
      else if (value <= 2)
      {
         return -2;
      }
      else if (value <=5)
      {
         return -1;
      }
      else if (value <= 8)
      {
         return 0;
      }
      else if (value <= 11)
      {
         return 1;
      }
      else if (value <= 14)
      {
         return 2;
      }
      else
      {
         return 3;
      }
   };
}]);

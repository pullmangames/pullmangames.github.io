rollModule = angular.module('diceRoller', []); //declare the module for dice rolls


rollModule.controller('RollController', ['$scope', 'travRollService', 'charactersService', function($scope, travRollService, charactersService) {
		var roller = this;
		roller.sides=6;
		roller.numdice=1;
		roller.result={ total:0, rolls:[] };
		roller.throwresult={};
		roller.dms=[];
		roller.dmtext="Poor lighting";
		roller.dmvalue=-2;
		roller.currentdifficulty={name: "average" ,value: 0};
		roller.difficulties = travRollService.difficulties;
		roller.throwresults=[]//holds previous dice rolls
		
		
		
		roller.roll = function() {
			roller.result=rawroll(roller.numdice, roller.sides);
		};		
		
		roller.d66 = function() {
			roller.result=rolld66();
		};
		
		roller.dicethrow = function() {
			var dmvalues=[]
			
			//yeah, let's extract the values for DMs that are checked in the least straightforward way
			angular.forEach(roller.dms, function(dm) {	
				if (dm.include===true) dmvalues.push(dm.value);
			});		
			
			roller.throwresult=dicethrow(roller.currentdifficulty.value, dmvalues);
			roller.throwresult.desc=""+PASS_STRINGS[roller.throwresult.pass]+": "+MAGNITUDE_STRINGS[roller.throwresult.magnitude];
			roller.throwresult.color=RESULT_COLORS[roller.throwresult.pass][roller.throwresult.magnitude]
			roller.throwresults.unshift(roller.throwresult);
			
		};
		
		//create a new dice modifier type and add it to the list
		roller.addDM = function() {    	
			roller.dms.push({desc: roller.dmtext, value:roller.dmvalue, include:true}); //push new item from form to list
			roller.dmtext = '';					//clear web form text item
		};
		
		//clear list of previous throws
		roller.clearThrows = function() {
			roller.throwresults=[];
			};

      //ng-model object for the travSkillCheckDm test
      $scope.dmResult = {};
}]);

//Determine all characters' DM for a chosen skill and set of characteristics. One character may then be selected to perform the roll.
//The selected character will be stored in the object passed to the directive via ng-model
//Example: <traveller-skill-dm ng-model="dmResult"></traveller-skill-dm>
//In the example, the chosen character will be saved in a scope variable named dmResult
//The bound object will have the following properties:
//  character: the selected character
//  dm:        selected character's dice modifier
rollModule.directive('travSkillCheckDm', [function() {
   var controller = ['$scope', '$timeout', '$uibModal', 'charactersService', 'skillsService', 'travRollService', function($scope, $timeout, $uibModal, charactersService, skillsService, travRollService) {

      $scope.updateCharList = function() {
         $scope.results = [];
         $scope.selectedCharacterIndex = -1;
         if ($scope.requireAll && !allSelected())
         {
            return;
         }
         var characters = charactersService.characters;
         var selectedSkill = $scope.selected.skill;
         var selectedStats = $scope.selected.characteristics;
         var selectedDifficulty = $scope.selected.difficulty;
         var selectedExtFactors = $scope.selected.extFactors;

         if (!selectedSkill && (!selectedStats || selectedStats.length === 0))
         {
            return;
         }

         var len = characters.length;
         for (var i = 0; i < len; i++)
         {
            var character = characters[i];
            var dm = 0;
            
            for (var j = 0; j < selectedExtFactors.length; j++)
            {
               dm += selectedExtFactors[j].value;
            }
            
            if (selectedSkill)
            {
               var skill = character.skills.findSkill(selectedSkill.name);
               var jackOfAllTrades = character.skills.findSkill("Jack of all Trades");

               var effectiveSkill = -3;
               if (jackOfAllTrades.hasOwnProperty('value') && jackOfAllTrades.value - 3 > effectiveSkill)
               {
                  effectiveSkill = jackOfAllTrades.value - 3;
               }
               if (skill.hasOwnProperty('value') && skill.value > effectiveSkill)
               {
                  effectiveSkill = skill.value;
               }
               dm += effectiveSkill;
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
            if (selectedDifficulty)
            {
               dm += selectedDifficulty.value;
            }

            $scope.results.push({
               character: character,
               dm:        dm
            });
         }
         //Sort by DM, highest to lowest
         $scope.results.sort(function(a,b){return b.dm-a.dm});
      };

      $scope.selectCharToRoll = function(index)
      {
         $scope.selectedCharacterIndex = index;
      };
      
      $scope.allowRoll = function() {
         return ($scope.results && $scope.results.length && $scope.selectedCharacterIndex >= 0 && $scope.selectedCharacterIndex < $scope.results.length)
      }

      $scope.roll = function()
      {
         var roll = dicethrow(0, [$scope.results[$scope.selectedCharacterIndex].dm], $scope.timeDice);
         $scope.ngModel = {
            roll:roll,
            character:$scope.results[$scope.selectedCharacterIndex].character,
            skill:$scope.selected.skill
         };
         $scope.selectedCharacterIndex = -1;
         if ($scope.onRoll)
         {
            $timeout(function() {
               $scope.onRoll({});
            });
         }
      }

      $scope.clearSelections = function()
      {
         if (!$scope.locked.skills)
         {
            $scope.selected.skill = undefined;
         }
         $scope.skillChanged();
      }

      $scope.skillChanged = function() {
         if (!$scope.locked.characteristics)
         {
            $scope.selected.characteristics = undefined;
         }
         if (!$scope.locked.difficulty)
         {
            $scope.selected.difficulty = undefined;
         }
         updateExtFactorsList(); //Don't need to call updateCharList here - updateExtFactorsList does it for us.
      };

      var updateSkillList = function() {
         $scope.selectableSkills = [];
         $scope.selected.skill = undefined;
         if ($scope.skills)
         {
            for (var i = 0; i < $scope.skills.length; i++)
            {
               var skillToAdd = skillsService.lookupDefaultSkill($scope.skills[i]);
               if (skillToAdd)
               {
                  $scope.selectableSkills.push(skillToAdd);
               }
               else
               {
                  throw "Invalid skill: " + $scope.skills[i];
               }
            }
         }
         
         if (!$scope.selectableSkills || !$scope.selectableSkills.length)
         {
            $scope.selectableSkills = skillsService.usableSkills;
         }

         if ($scope.selectableSkills.length === 1)
         {
            $scope.selected.skill = $scope.selectableSkills[0];
            $scope.locked.skills = true;
         }
         else
         {
            $scope.locked.skills = false;
         }
      
         $scope.updateCharList();
      };

      var updateCharacteristicsList = function() {
         $scope.selected.characteristics = [];
         $scope.locked.characteristics = false;
         if ($scope.characteristics)
         {
            for (var i = 0; i < $scope.characteristics.length; i++)
            {
               var characteristicToSelect = charactersService.lookupCharacteristic($scope.characteristics[i]);
               if (characteristicToSelect)
               {
                  $scope.selected.characteristics.push(characteristicToSelect);
                  $scope.locked.characteristics = true;
               }
               else
               {
                  throw "Invalid characteristic: " + $scope.characteristics[i];
               }
            }
         }
         
         $scope.updateCharList();
      };

      var updateDifficultyList = function() {
         $scope.selected.difficulty = undefined;
         $scope.locked.difficulty = false;
         if ($scope.difficulty)
         {
            var difficultyToSelect = travRollService.lookupDifficulty($scope.difficulty);
            if (difficultyToSelect)
            {
               $scope.selected.difficulty = difficultyToSelect;
               $scope.locked.difficulty = true;
            }
            else
            {
               throw "Invalid difficulty: " + $scope.difficulty;
            }
         }

         $scope.updateCharList();
      };

      var updateExtFactorsList = function() {
         $scope.selected.extFactors = [];
         if ($scope.extFactors)
         {
            for (var i = 0; i < $scope.extFactors.length; i++)
            {
               if ($scope.extFactors[i] && $scope.extFactors[i].externalFactor !== undefined && $scope.extFactors[i].value !== undefined)
               {
                  $scope.selected.extFactors.push($scope.extFactors[i]);
               }
            }
         }

         $scope.updateCharList();
      }

      $scope.extFactorLocked = function(ef) {
         return $scope.extFactors.indexOf(ef) !== -1;
      }

      var allSelected = function() {
         return $scope.selected.skill && $scope.selected.characteristics && $scope.selected.characteristics.length && $scope.selected.difficulty;
      }

      $scope.selectableCharacteristics = charactersService.characteristics;
      $scope.externalFactors = skillsService.skillExternalFactors;
      $scope.selectableDifficulties = travRollService.difficulties;
      $scope.selected = {};
      $scope.selected.extFactors = [];
      $scope.results = [];
      $scope.selectedCharacterIndex = -1;
      $scope.locked = {};
      updateSkillList();
      updateCharacteristicsList();
      updateDifficultyList();
      $scope.$watch('skills', updateSkillList);
      $scope.$watch('characteristics', updateCharacteristicsList);
      $scope.$watch('difficulty', updateDifficultyList);
      $scope.$watch('requireAll', $scope.updateCharList);
      $scope.$watch('extFactors', updateExtFactorsList);

      //Modal for adding external factors ('other' +/- to DMs) to skills
      var addExtFactorModalController = ['$scope', '$uibModalInstance', 'skillName', function($scope, $uibModalInstance, skill) {
         $scope.skillNameIncludingParent = skill.nameIncludingParent;

         $scope.addExtFactorModalOk = function() {
            $uibModalInstance.close({name:$scope.newExternalFactorName, value:$scope.newExternalFactorValue});
         };

         $scope.addExtFactorModalCancel = function() {
            $uibModalInstance.dismiss('cancel');
         };
      }];

      $scope.openAddExtFactorModal = function() {
         var modalInstance = $uibModal.open({
            templateUrl: 'addExtFactorModal.view',
            controller: addExtFactorModalController,
            resolve: {
               skillName: function () {
                  return $scope.selected.skill;
               }
            }
         });

         modalInstance.result.then(
            function(ef) {
               skillsService.addSkillExternalFactor($scope.selected.skill.name, ef.name, ef.value);
            }
         );
      }
   }];

   return {
      restrict: 'E',
      scope: {
         ngModel: "=",
         skills: "=",
         characteristics: "=",
         difficulty: "=",
         extFactors: "=",
         requireAll: "@",
         timeDice: "@",
         onRoll: "&"
      },
      templateUrl: 'travellerSkillDm.view',
      controller: controller
   };
}]);

rollModule.service('travRollService', [function() {
   this.difficulties = [
      {name: "Simple",         value: 6 },
      {name: "Easy",           value: 4 },
      {name: "Routine",        value: 2 },
      {name: "Average",        value: 0 },
      {name: "Difficult",      value: -2},
      {name: "Very Difficult", value: -4},
      {name: "Formidable",     value: -6}
   ];
   
   var _difficultiesDict = {};
   for (var i = 0; i < this.difficulties.length; i++)
   {
      _difficultiesDict[this.difficulties[i].name.toLowerCase()] = this.difficulties[i];
   }
   
   this.lookupDifficulty = function(name)
   {
      return _difficultiesDict[name.toLowerCase()];
   }
}]);

//------------------Raw JS (no Angular junk) below this line ----------------
function rawroll(numdice, sides){	
		var rollresult = { total:0, rolls:[] }
	
		rollresult.rolls = new Uint32Array(numdice);
		window.crypto.getRandomValues(rollresult.rolls);
		
		for (var i=0; i<numdice; i++)
		{
			rollresult.rolls[i] = Math.floor(rollresult.rolls[i]%sides)+1;
			rollresult.total += rollresult.rolls[i];
			//rollresult.rolls.push(temproll);
		}
	
		return rollresult;
}	
		
function rolld66(){
	var rollresult = rawroll(2,6);
	rollresult.total=rollresult.rolls[0]*10+rollresult.rolls[1];
	return rollresult;
	
	}
	
function dicethrow(difficulty, DMs, timeDice){
	var rollresult = rawroll(2,6);
	var dmtotal = 0;

	for(var i=0,n=DMs.length; i<n; ++i)
	{
	    dmtotal += DMs[i];
	}
	
	rollresult.effect = rollresult.total+difficulty+dmtotal-8;
	
	//sure would be nice if I could use an object and a loop for the below

	if (rollresult.effect <= -6) 							{rollresult.pass=P_FAILURE; rollresult.magnitude=M_EXCEPTIONAL;}
	if (rollresult.effect >-6 && rollresult.effect <= -2) 	{rollresult.pass=P_FAILURE; rollresult.magnitude=M_AVERAGE;}
	if (rollresult.effect ==-1) 							{rollresult.pass=P_FAILURE; rollresult.magnitude=M_MARGINAL;}
	if (rollresult.effect ==0)  							{rollresult.pass=P_SUCCESS; rollresult.magnitude=M_MARGINAL;}
	if (rollresult.effect >=1 && rollresult.effect <= 5) 	{rollresult.pass=P_SUCCESS; rollresult.magnitude=M_AVERAGE;}
	if (rollresult.effect >= 6) 							{rollresult.pass=P_SUCCESS; rollresult.magnitude=M_EXCEPTIONAL;}

   rollresult.passString = PASS_STRINGS[rollresult.pass];
   rollresult.magnitudeString = MAGNITUDE_STRINGS[rollresult.magnitude];
   rollresult.summary = rollresult.magnitudeString + " " + rollresult.passString;

   if (timeDice === undefined) {
      timeDice = 1;
   }
   rollresult.timing = rawroll(timeDice, 6).total;
	return rollresult;
	
	}	

//------------------Constants and such below this line ----------------

const P_FAILURE=0;
const P_SUCCESS=1;

const M_MARGINAL=0;
const M_AVERAGE=1;
const M_EXCEPTIONAL=2;

const PASS_STRINGS=["Failure", "Success"];
const MAGNITUDE_STRINGS=["Marginal", "Average", "Exceptional"]

const RESULT_COLORS = [["warning", "danger", "danger"],['info','primary','success']]

/* --not in use?
const SIMPLE = 6;
const EASY = 4;
const ROUTINE = 2;
const AVERAGE = 0;
const DIFFICULT = -2;
const VERYDIFFICULT = -4;
const FORMIDABLE = -6;

var diff = {	simple:6,
				easy:4,
				routine:2,
				average:0,
				difficult:-2,
				verydifficult:-4,
				formidable: -6
			}
*/
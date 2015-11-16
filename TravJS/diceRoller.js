rollModule = angular.module('diceRoller', []); //declare the module for dice rolls


rollModule.controller('RollController', ['$scope', 'charactersService', function($scope, charactersService) {
		var roller = this;
		roller.sides=6;
		roller.numdice=1;
		roller.result={ total:0, rolls:[] };
		roller.throwresult={};
		roller.dms=[];
		roller.dmtext="Poor lighting";
		roller.dmvalue=-2;
		roller.currentdifficulty={name: "average" ,value: 0};
		roller.difficulties=[
							{name: "simple" ,value: 6},
							{name: "easy" ,value: 4},
							{name: "routine" ,value: 2},
							{name: "average" ,value: 0},
							{name: "difficult" ,value: -2},
							{name: "very difficult" ,value: -4},
							{name: "formidable" ,value:  -6}
							]
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
         //Sort by DM, highest to lowest
         $scope.results.sort(function(a,b){return b.dm-a.dm});
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

//------------------Raw JS (no Angular junk) below this line ----------------
function rawroll(numdice, sides){	
		var rollresult = { total:0, rolls:[] }
	
		for (var i=0; i<numdice; i++)
		{
			var temproll = Math.floor(Math.random()*sides)+1;
			rollresult.total += temproll;
			rollresult.rolls.push(temproll);
		}
	
		return rollresult;
}	
		
function rolld66(){
	var rollresult = rawroll(2,6);
	rollresult.total=rollresult.rolls[0]*10+rollresult.rolls[1];
	return rollresult;
	
	}
	
function dicethrow(difficulty, DMs){
	var rollresult = rawroll(2,6);
	var dmtotal = 0;

	for(var i=0,n=DMs.length; i<n; ++i)
	{
	    dmtotal += DMs[i];
	}
	
	rollresult.effect = rollresult.total+difficulty+dmtotal-8;
	
	//sure would be nice if I could use an object and a loop for the below
	/*
	if (rollresult.effect <= -6) rollresult.desc="Failure: Exceptional";
	if (rollresult.effect >-6 && rollresult.effect <= -2) rollresult.desc="Failure: Average";
	if (rollresult.effect ==-1) rollresult.desc="Failure: Marginal";
	if (rollresult.effect ==0)  rollresult.desc="Success: Marginal";
	if (rollresult.effect >=1 && rollresult.effect <= 5) rollresult.desc="Success: Average";
	if (rollresult.effect >= 6) rollresult.desc="Success: Exceptional";
	*/
	if (rollresult.effect <= -6) 							{rollresult.pass=P_FAILURE; rollresult.magnitude=M_EXCEPTIONAL;}
	if (rollresult.effect >-6 && rollresult.effect <= -2) 	{rollresult.pass=P_FAILURE; rollresult.magnitude=M_AVERAGE;}
	if (rollresult.effect ==-1) 							{rollresult.pass=P_FAILURE; rollresult.magnitude=M_MARGINAL;}
	if (rollresult.effect ==0)  							{rollresult.pass=P_SUCCESS; rollresult.magnitude=M_MARGINAL;}
	if (rollresult.effect >=1 && rollresult.effect <= 5) 	{rollresult.pass=P_SUCCESS; rollresult.magnitude=M_AVERAGE;}
	if (rollresult.effect >= 6) 							{rollresult.pass=P_SUCCESS; rollresult.magnitude=M_EXCEPTIONAL;}
	
	rollresult.timing=rawroll(1,6).total;
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
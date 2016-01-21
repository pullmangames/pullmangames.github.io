combatModule = angular.module('combatModule', []); //declare the module for dice rolls


combatModule.controller('combatController', ['$scope', 'travRollService', 'charactersService', function($scope, travRollService, charactersService) {
	var combat = this;
		
	//var combat.characters = charactersService.characters;
		
	var resetCombat = function(){
			var foo=0;
			//todo	
	};
	
	var initializeCharacterForCombat = function(character){
		character.combatInfo.range=0;
		character.combatInfo.initiative=0;//todo
	};
	
	combat.theDebug = function(){
		console.log("FOO");
		console.log(charactersService.characters);
	};
	
	
}]);


function rollInitiative(character){
	return charactersService.dmFromCharacteristic(character.Dex)//todo
};
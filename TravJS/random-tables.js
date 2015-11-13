rndModule = angular.module('randomModule', []); //declare the module for dice rolls


rndModule.controller('randomController', ['charactersService', function(charactersService) {
		var rnd = this;
		
		rnd.patrontext="";
		
		
		
		//generate a random patron mission
		//subtable param is what type of patron, 0 for random
		rnd.randomPatron=function(subtable){
			var missiond66;
			var tens=subtable===0?rawroll(1,6).total:subtable;
			var ones=rawroll(1,6).total;
			rnd.patrontype=PatronTable[""+tens+ones];
			rnd.patronoccupation=NPCOccupationsTable[""+rolld66().total];
			rnd.patrontraits=NPCTraitsTable[""+rolld66().total];
			
			rnd.patronmission=PatronMissionTable[""+rolld66().total];
			rnd.patronmissiontext=rnd.patronmission.mission;
			//Negative values in table indicate special handling, ignore for now
			//HACK: what a horrible way to say "are -2 or -1 in the array?"
			if (( rnd.patronmission.targettypes.indexOf(-2)>=0) || ( rnd.patronmission.targettypes.indexOf(-1)>=0))
			{
				rnd.patrontargettext="SPECIAL";
				console.log("SPECIAL");
			}
			
			else
				{
					console.log("NORMAL");
					//roll a die to determine which target type, set as new tens
					tens=rnd.patronmission.targettypes[rawroll(1,rnd.patronmission.targettypes.length).total - 1];
					ones=rawroll(1,6).total;
					rnd.patronmissiontargetroll=""+tens+ones;
					rnd.patronmissiontarget=PatronMissionTargetTable[rnd.patronmissiontargetroll];
					//TODO: roll for more specific targets?
					
					rnd.patrontargettext=rnd.patronmissiontarget;
					//some targets say "roll over there", so let's do that
					//HACK: what a horrible way to say "is the roll 42,43, or 44?"
					if ( ["42","43","41"].indexOf(rnd.patronmissiontargetroll)>=0)
						{
							var ptype=rnd.patrontype=PatronTable[""+rolld66().total];
							var pocc=NPCOccupationsTable[""+rolld66().total];
							var ptrait=NPCTraitsTable[""+rolld66().total];
							rnd.patrontargettext=ptype+", "+pocc+", "+ptrait;
						}
					if ( ["45","46","44"].indexOf(rnd.patronmissiontargetroll)>=0)
						{
							rnd.patrontargettext=PatronMissionOppositionTable[""+rolld66().total];
						}
				}
			rnd.patronopposition=PatronMissionOppositionTable[""+rolld66().total];
		};
		
		rnd.randomEncounter=function(thetable){ 
			rnd.encountertext=encountersTables[thetable][""+rolld66().total];
			//TODO: Add more supporting rolls as necessary?

		}
		
}]);
//console.log("Loaded");
//alert("Loaded");

//alert(window.clipboardData.getData("text"));
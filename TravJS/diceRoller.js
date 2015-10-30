rollModule = angular.module('diceRoller', []); //declare the module for dice rolls


rollModule.controller('RollController', function() {
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
			
		};
		
		roller.addDM = function() {    	
			roller.dms.push({desc: roller.dmtext, value:roller.dmvalue, include:true}); //push new item from form to list
			roller.dmtext = '';					//clear web form text item
		};
});



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
	if (rollresult.effect <= -6) rollresult.desc="Exceptional Failure";
	if (rollresult.effect >-6 && rollresult.effect <= -2) rollresult.desc="Average Failure";
	if (rollresult.effect ==-1) rollresult.desc="Marginal Failure";
	if (rollresult.effect ==0)  rollresult.desc="Marginal Success";
	if (rollresult.effect >=1 && rollresult.effect <= 5) rollresult.desc="Average Success";
	if (rollresult.effect >= 6) rollresult.desc="Exceptional Success";
	
	rollresult.timing=rawroll(1,6).total;
	return rollresult;
	
	}	


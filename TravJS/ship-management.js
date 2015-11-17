shipManModule = angular.module('shipManagement', []); //declare the module for managing the ship
      
shipManModule.controller('shipManagementController', function ($scope) {
	var smm=this;
	
	var theShip={}
	theShip.size=200;
	theShip.maxfuel=44;
	theShip.maxcargo=64;
	theShip.maxpassengers=5;
	theShip.maxlow=6;
	theShip.crew=10;
	theShip.computer=5;
	theShip.Jump=2;
	theShip.fuelprocessors=2;
	theShip.streamlined=true;
	theShip.staterooms=10;
	theShip.newprice=99999999;
	theShip.discounted=.6;
	theShip.principal=theShip.newprice*theShip.discounted;
	theShip.monthlypayment=theShip.principal/240;
	theShip.annualmaint=theShip.newprice*.001;
	
	
	smm.partyShip=theShip;
		
	smm.log=[];
	smm.log.status={};
	smm.log.status.today=001;
	smm.log.status.year=1105;
	smm.log.status.fuel=0;
	smm.log.status.cargo=[{"type":"demo", "detail":"some deets", "tons":10},{"type":"demo2", "detail":"some deets", "tons":20}] //todo remove demo cargo
	smm.log.status.midpass=0;
	smm.log.status.highpass=0;
	smm.log.status.lowpass=0;
	smm.log.status.cash=0;
	smm.log.status.maintFund=0;
	smm.log.status.totalCargo = function(){
		var total=0;
		for (var i=0;i<this.cargo.length;i++)
		{
			total+=this.cargo[i].tons;
		}
		return total;
	};
	
	
	smm.log.entries=[];
	
	smm.inputYear=smm.log.status.year;
	smm.inputDate=smm.log.status.today;
	
	
	//cargo on the ship looks like this:
	//type, detail, tons, price paid, Risk DM, Danger DM, purchase DM, sale DM,
	
	//cargo for sale also has max risk dm, base price, max tons
	
	
	smm.manualLog=function(){
		smm.logEntry(smm.inputYear,smm.inputDate,smm.inputTimeElapsed,smm.logText);
	};
	

	smm.manualCargoAdd=function(){
		var newcargo=cargoFactory();
		newcargo.type=smm.addCargoType;
		newcargo.tons=smm.addCargoTons;
		smm.log.status.cargo.push(newcargo);
		smm.logEntry(smm.log.status.year, smm.log.status.today, smm.inputTimeElapsed, "[manual] loaded " + smm.addCargoType + ": "  +smm.addCargoTons + " dT");
	};
	
	smm.manualCredits=function(){
	smm.log.status.cash += smm.addMoney;
	smm.logEntry(smm.log.status.year, smm.log.status.today, smm.inputTimeElapsed, "[manual] " + smm.addMoneyDesc + ": " + smm.addMoney + " = " +smm.log.status.cash);
	}
	
	smm.logEntry=function(newyear, newdate, newelapsed, newtext){
		smm.logEntryRaw({"year":newyear, "startDate":newdate, "elapsed":newelapsed, "text":newtext});
		};

	smm.logEntryRaw=function(newEntry) {
		smm.log.push(newEntry)
	};

});



var cargoFactory = function(){
	return {"type":"", "detail":"", "tons":0};
}



/* overall sequence

	0. Determine jobs/patrons/rumors/etc
	1. Determine Possible Destiniations
		for each:
		2. Determine Freight
		3. Determine Mail
		4. Determine Passengers
	5. Determine Trade goods/sellers/etc.
		a. buy if wanted
	6. Finalize ship loadout
	7. Buy life support, fuel, pay berthing costs
	8. Depart: Pilot check?
	9. Encounter check: near port
	10. Skim?
		a. pilot check
		b. encounter check
	11. Encounter check: near jump point?
	12. Jump checks
		a. Astrogation check
		b. Engine power check
		c. jump check
	13. Determine jump time
	14. Arrival: encounter check
	15. Skim?
		a. pilot check
		b. encounter check
	16. Approach port: encounter check?
	17. Land/Dock - Pilot check
	18. Unload
		a. Collect Freight pay
		b. collect mail pay
		c. collect passenger pay
	19. Sell trade goods (find buyer, etc)
	20. Pay Tax
		
Above is main sequence, but should be organized flexibly ( ship could go out to skim at any time, for example)

Ongoing: Encounters for time spent at port
			encounters for time spent in space
		For each activity, determine participants, track time.
		
	*/
	
//--------------------------------------------------------------------
// Freight Section



// Steps:
// 	Find a source
		//Diplomat, Investigate, Streetwise (Average). Effect is days taken or wasted. 
		//Attempts per month = pop/3
// 	determine cargo specs
		//lot sizes:  Major = 1d6x10, Minor = 1d6x5, incidental = 1, no splitting
		//Trade Traffic = Destination Pop + table modifiers
		//lot count=table for traffic value
// 	determine time table
		//determine how many "days away" it is.  Referee fiat?
// 	negotiate fees
		//base 500= 20% per extra parsec (Added or multiplied?)
		//Negotiate?
			//Hire broker? consult broker table
			//Broker or persuade check vs see table for difficulty. Effect changes price.
			//If bail, no freight searches for one month
// 	travel
		//Risk vs. reward rules have halved transit hazard rules (round down)
		//I guess we have to check for transit hazards?
// 	collect
	//get paid, reduce fee by late table
	//tax?



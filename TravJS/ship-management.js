shipManModule = angular.module('shipManagement', []); //declare the module for handling chracters
      
shipManModule.controller('shipManagementController', ['$http',function($http) {
  /*var shipMan=this;
  
  shipMan.tradetables=[]
  
  $http.get("/tradetables.json").success(function(data){
  	shipMan.tradetables = data;
  	}) ;
  	*/
}]);

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
		
		
Ongoing: Encounters for time spent at port
			encounters for time spent in space
		For each activity, determine participants, track time.
	
	
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



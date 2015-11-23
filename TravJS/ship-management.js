shipManModule = angular.module('shipManagement', []); //declare the module for managing the ship
      
shipManModule.controller('shipManagementController', ['$scope', '$http', 'dataStorageService', 'alertsService', function ($scope, $http, dataStorageService, alertsService) {
	var smm=this;
	
   smm.accordionData = [
      { name: "Manual Log Entry/Adjustment",                htmlTemplate: "shipman.accordion.manualOps.view" },
      { name: "Hunt for jobs/patrons/rumors/etc.",          htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Enter Destination(s)",                       subSteps: [
         { name: "Freight for Destination 1",               htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Mail for Destination 1",                  htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Passengers for Destination 1",            htmlTemplate: "shipman.accordion.destinations.passengers.view" },
         { name: "Other for Destination 1",                 htmlTemplate: "shipman.accordion.TBD.view" }]},
      { name: "Buy Trade Goods",                            htmlTemplate: "shipman.accordion.buyTradeGoods.view" },
      { name: "Finalize ship loadout",                      htmlTemplate: "shipman.accordion.finalizeLoadout.view" },
      { name: "Buy life support, fuel, pay berthing costs", htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Depart Port",                                htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Port Encounter",                             htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Visit Gas Giant",                            subSteps: [
         { name: "Gas Giant Encounter",                     htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Skimming",                                htmlTemplate: "shipman.accordion.TBD.view" }]},
      { name: "Jump Point Encounter",                       htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Jump",                                       subSteps: [
         { name: "Astrogation check",                       htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Engine power check",                      htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Jump check",                              htmlTemplate: "shipman.accordion.TBD.view" }]},
      { name: "JumpSpace",                                  htmlTemplate: "shipman.accordion.jumpSpace.view" },
      { name: "Exit Jump - Encounter",                      htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Visit Gas Giant",                            subSteps: [
         { name: "Gas Giant Encounter",                     htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Skimming",                                htmlTemplate: "shipman.accordion.TBD.view" }]},
      { name: "Port Arrival - Encounter",                   htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Land/Dock",                                  htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Unload",                                     subSteps: [
         { name: "Freight",                                 htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Mail",                                    htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Passengers",                              htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Other",                                   htmlTemplate: "shipman.accordion.TBD.view" }]},
      { name: "Find a trade goods buyer",                   htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Tax",                                        htmlTemplate: "shipman.accordion.TBD.view" },
   ];
   
	var theShip={}
	theShip.name="Chameleon";
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
	theShip.newprice=57885500;
	theShip.discounted=.5;
	theShip.principal=theShip.newprice*theShip.discounted;
	theShip.monthlypayment=Math.ceil(theShip.principal/240);
	theShip.financedtotalprice=theShip.monthlypayment*480; //paid off after 480 payments
	theShip.annualmaint=Math.ceil(theShip.newprice*.001);
	theShip.monthlymaint=Math.ceil(theShip.annualmaint/12);
	theShip.purchasedate=dateFactory(1105,001);
	theShip.lastmaint=theShip.purchasedate;

	smm.partyShip=theShip;

   function shipLog()
   {
      this.formatVersion = 1;
      this.status={};
      this.status.date=dateFactory(1105,001);
      this.status.fuel=0;
      this.status.cargo=[] //example: {"type":"demo", "detail":"some deets", "paid":100, "tons":10},{"type":"demo2", "paid":10000, "detail":"some deets", "tons":20}
      this.status.midpass=0;
      this.status.highpass=0;
      this.status.lowpass=0;
      this.status.cash=0;
      this.status.totalpayments=0;
      this.status.maintFund=0;
      this.status.totalCargo = function(){
         var total=0;
         for (var i=0;i<this.cargo.length;i++)
         {
            total+=this.cargo[i].tons;
         }
         return total;
      };
      this.status.totalCargoValue = function(){
         var total=0;
         for (var i=0;i<this.cargo.length;i++)
         {
            total+= (this.cargo[i].tons * this.cargo[i].paid);
         }
         return total;
      };
      this.status.dueDate = function(){
      	return calculateDueDate(smm.partyShip.monthlypayment, this.totalpayments, smm.partyShip.purchasedate);
      };
      this.status.daysUntilMortgage = function(){
      	return this.date.daysaway(this.dueDate());
      };
      
      this.status.maintDate = function(){
      	return smm.partyShip.lastmaint.cloneandincrement(365);
      };
      this.status.daysUntilMaint = function(){
      	return this.date.daysaway(this.maintDate());
      };

      this.entries=[];
   }

   smm.log = new shipLog();
   $scope.shipLog = smm.log;
   
   var _buildShipLogFromJsonLog = angular.bind(this, function(jsonLog)
   {
      if (jsonLog)
      {
         if (   !jsonLog.formatVersion
             || jsonLog.formatVersion != 1)
         {
            alertsService.addAlert("danger", "Ship's log has invalid format. Unable to load.");
         }
         this.log.entries.length = 0;
         angular.merge(this.log, jsonLog);
      }
   });
   
   dataStorageService.register($scope, 'shipLog', _buildShipLogFromJsonLog);
	
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
		newcargo.detail=smm.addCargoType;
		newcargo.type="MANUAL";
		newcargo.tons=smm.addCargoTons;
		newcargo.paid=smm.addPrice;
		smm.log.status.cargo.push(newcargo);
		smm.logEntry(smm.log.status.year, smm.log.status.today, smm.inputTimeElapsed, "[manual] loaded " + smm.addCargoType + ": "  +smm.addCargoTons + " dT");
	};
   
   smm.manualCargoDelete = function() {
      var cargo = smm.log.status.cargo;
      cargo.splice(cargo.indexOf(smm.cargoToDelete, 1));
      smm.cargoToDelete = undefined;
   };
	
	smm.manualCredits=function(){
      smm.log.status.cash += smm.addMoney;
      smm.logEntry(smm.log.status.year, smm.log.status.today, smm.inputTimeElapsed, "[manual] " + smm.addMoneyDesc + ": " + smm.addMoney + " = " +smm.log.status.cash);
	}
	
	smm.logEntry=function(newyear, newdate, newelapsed, newtext){
		smm.logEntryRaw({"year":newyear, "startDate":newdate, "elapsed":newelapsed, "text":newtext});
		};

	smm.logEntryRaw=function(newEntry) {
		smm.log.entries.push(newEntry);
	};
	
	smm.manualSetDate=function(){
		 smm.log.status.date=dateFactory(smm.inputYear,smm.inputDate);
	};

   smm.tripData = {};
   smm.departureWorlds = [];
   smm.refreshDepartureWorlds = function(worldName) {
      var params = {q: worldName};
      return $http.get('http://travellermap.com/api/search', {params: params})
      .then(function(response) {
         smm.departureWorlds = response.data.Results.Items;
      });
   };

   smm.tripData.arrivalWorlds = [];
   smm.refreshArrivalWorlds = function() {
      smm.tripData.arrivalWorld = {};
      if (smm.tripData.departureWorldSearchResults)
      {
         var dw = smm.tripData.departureWorldSearchResults.World;
         var params = {sx:dw.SectorX, sy:dw.SectorY, hx:dw.HexX, hy:dw.HexY, jump:smm.partyShip.Jump};
         return $http.get('http://travellermap.com/api/jumpworlds', {params: params})
         .then(function(response) {
            smm.tripData.arrivalWorlds = response.data.Worlds;
            for (var i = 0; i < smm.tripData.arrivalWorlds.length; i++)
            {
               if (smm.tripData.arrivalWorlds[i].Name === smm.tripData.departureWorldSearchResults.World.Name)
               {
                  smm.tripData.departureWorld = smm.tripData.arrivalWorlds[i];
                  smm.tripData.arrivalWorlds.splice(i, 1);
                  break;
               }
            }
         });
      }
      else
      {
         smm.tripData.arrivalWorlds = smm.tripData.arrivalWorlds.splice(0, smm.tripData.arrivalWorlds.length);
      }
   };
   
   var _buildTripDataFromJsonTrip = function(jsonTrip) {
      if (jsonTrip)
      {
         smm.tripData.departureWorld = jsonTrip.departureWorld;
         smm.tripData.departureWorldSearchResults = jsonTrip.departureWorldSearchResults;
         if (jsonTrip.departureWorldSearchResults)
         {
            smm.tripData.arrivalWorlds = jsonTrip.arrivalWorlds;
            smm.tripData.arrivalWorld = {};
            if (jsonTrip.arrivalWorlds && jsonTrip.arrivalWorld)
            {
               for (var i = 0; i < jsonTrip.arrivalWorlds.length; i++)
               {
                  if (jsonTrip.arrivalWorlds[i].Name === jsonTrip.arrivalWorld.Name)
                  {
                     smm.tripData.arrivalWorld = jsonTrip.arrivalWorlds[i];
                     break;
                  }
               }
            }
         }
         //add some decoded data
         smm.tripData.departureWorld.UWPsplit=uwpsplit(smm.tripData.departureWorld.UWP);
         //when should this happen? smm.tripData.arrivalWorld.UWPsplit=uwpsplit(smm.tripData.arrivalWorld.UWP);
         
      }
   }
   
   dataStorageService.register(smm, 'tripData', _buildTripDataFromJsonTrip);
   
   smm.buyTradeGoods = {};
   smm.buyTradeGoods.supplier = {};
   smm.buyTradeGoods.suppliers = {
      standard:      {name:"Supplier",                 skillCheck:{skills:['Broker'],                    characteristics:['edu', 'soc'], difficulty: 'Average'   },  timeDice:1, timeScale:'d'},
      commonGoods:   {name:"Common-Goods Supplier",    skillCheck:{skills:['Broker'],                    characteristics:['edu', 'soc'], difficulty: 'Easy'      },  timeDice:1, timeScale:'d'},
      blackMarket:   {name:"Black Market Supplier",    skillCheck:{skills:['Streetwise'],                characteristics:['edu', 'soc'], difficulty: 'Average'   },  timeDice:1, timeScale:'d'},
      morallyNeutral:{name:"Morally Neutral Supplier", skillCheck:{skills:['Streetwise', 'Investigate'], characteristics:['edu', 'soc'], difficulty: 'Difficult' },  timeDice:2, timeScale:'d'},
      online:        {name:"Online Supplier",          skillCheck:{skills:['Computers'],                 characteristics:['edu'],        difficulty: 'Average'   },  timeDice:1, timeScale:'h'}
   };

}]);



var cargoFactory = function(){
	return {"type":"", "detail":"", "tons":0};
}

var dateFactory = function(newyear, newday){
	var newdate={};
	newdate.year=newyear;
	newdate.day=newday;
	
	newdate.toString=function(){
		return this.year+":"+new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format(this.day);
	};
	
	newdate.diffdays=function(otherdate){
		return (otherdate.year - this.year) * 365 + (otherdate.day - this.day); 		
	};
	
	newdate.daysaway=function(otherdate){
		var numdays=this.diffdays(otherdate);
		if (numdays<0) return ""+Math.abs(numdays)+" days ago";
		else return ""+numdays+" days away";
	};
	
	newdate.increment=function(daystochange){
		var result=this.incrementinternaluse(daystochange);
		this.year=result[0];
		this.day=result[1];
	};
	
	newdate.cloneandincrement=function(daystochange){
		var result=this.incrementinternaluse(daystochange)
		return dateFactory(result[0],result[1]);
	};
	
	//for the other two increments
	newdate.incrementinternaluse=function(daystochange){
		var currentdays=(this.year*365)+this.day-1; //The -1 and +1 are to remove day 0, but it's a weird hack and I don't like it.
		var newdays=currentdays+daystochange;
		var calcyear=Math.trunc(newdays/365);
		var calcday=newdays%365+1;
		return [calcyear,calcday];
	};
	


	return newdate;	
};

var calculateDueDate = function(monthly, currentpaid, purchasedate){
	//check total mortgage paid vs. total financed price to see which payment we're on
	var totalprice=monthly*480;
	var paymentsmade=currentpaid/monthly +1 ; //+1 because otherwise it'll be the purchase date for first payment
	return purchasedate.cloneandincrement(paymentsmade*28);
	
}

var uwpsplit = function(uwp){
	var splituwp=uwp.split("");
	var decoded={'starport':splituwp[0],
				 'size':splituwp[1],
				 'atmosphere':splituwp[2],
				 'hydrosphere':splituwp[3],
				 'population':splituwp[4],
				 'government':splituwp[5],
				 'law':splituwp[6],
				 'TL':splituwp[8]  //skip the dash
				}
	return decoded;
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



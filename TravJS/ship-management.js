shipManModule = angular.module('shipManagement', []); //declare the module for managing the ship

shipManModule.controller('shipManagementController', ['$scope', '$http', '$filter', 'dataStorageService', 'alertsService', function ($scope, $http, $filter, dataStorageService, alertsService) {
   var smm=this;

   smm.accordionData = [
      { name: "Manual Log Entry/Adjustment",                htmlTemplate: "shipman.accordion.manualOps.view" },
      { name: "Hunt for jobs/patrons/rumors/etc.",          htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Find cargos and passengers",                 subSteps: [
         { name: "Freight",                                    htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Mail",                                       htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Passengers",                                 htmlTemplate: "shipman.accordion.destinations.passengers.view" },
         { name: "Other",                                      htmlTemplate: "shipman.accordion.TBD.view" }]},
      { name: "Buy Trade Goods",                            htmlTemplate: "shipman.accordion.buyTradeGoods.view" },
      { name: "Finalize ship loadout",                      htmlTemplate: "shipman.accordion.finalizeLoadout.view" },
      { name: "Buy life support, fuel, pay berthing costs", htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Depart Port",                                htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Port Encounter",                             htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Visit Gas Giant",                            subSteps: [
         { name: "Gas Giant Encounter",                     	htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Skimming",                                	htmlTemplate: "shipman.accordion.visitGasGiant.skim.view" }]},
      { name: "Jump Point Encounter",                       htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Jump",                                       subSteps: [
         { name: "Astrogation check",                       	htmlTemplate: "shipman.accordion.jump.astrogation.view" },
         { name: "Engine power check",                      	htmlTemplate: "shipman.accordion.jump.divertpower.view" },
         { name: "Jump check",                              	htmlTemplate: "shipman.accordion.TBD.view" }]},
      { name: "JumpSpace",                                  htmlTemplate: "shipman.accordion.jumpSpace.view" },
      { name: "Exit Jump - Encounter",                      htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Visit Gas Giant",                            subSteps: [
         { name: "Gas Giant Encounter",                     	htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Skimming",                                   htmlTemplate: "shipman.accordion.visitGasGiant.skim.view" }]},
      { name: "Port Arrival - Encounter",                   htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Land/Dock",                                  htmlTemplate: "shipman.accordion.TBD.view" },
      { name: "Unload",                                     subSteps: [
         { name: "Freight",                                 	htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Mail",                                    	htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Passengers",                              	htmlTemplate: "shipman.accordion.TBD.view" },
         { name: "Other",                                   	htmlTemplate: "shipman.accordion.TBD.view" }]},
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
   theShip.numstaterooms=10;
   theShip.newprice=57885500;
   theShip.discounted=.5;
   theShip.principal=theShip.newprice*theShip.discounted;
   theShip.monthlypayment=Math.ceil(theShip.principal/240);
   theShip.financedtotalprice=theShip.monthlypayment*480; //paid off after 480 payments
   theShip.annualmaint=Math.ceil(theShip.newprice*.001);
   theShip.monthlymaint=Math.ceil(theShip.annualmaint/12);
   theShip.purchasedate=dateFactory(1105,001);
   //theShip.lastmaint=theShip.purchasedate;

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
      this.status.lastmaint=smm.partyShip.purchasedate;
      this.status.stateroomsused=smm.partyShip.crew/2 + this.status.highpass + this.status.midpass;
      this.status.staterooms=[];
      this.status.lowBerths=[];

      for (var i=0; i<smm.partyShip.numstaterooms; i++) {
         var stateRoom = {};
         stateRoom.occupants = [];
         stateRoom.stateOn = 'glyphicon-unchecked';
         stateRoom.stateOff = 'glyphicon-ok-circle';
      	this.status.staterooms.push(stateRoom);
      	//intent is for occupied staterooms to have an array of passengers
      }
	  for (var i=0; i<smm.partyShip.maxlow; i++) {
	     var stateRoom = [];
	     stateRoom.occupants = [];
	     stateRoom.stateOn = 'glyphicon-inbox';
	     stateRoom.stateOff = 'glyphicon-ok-circle';
	     this.status.lowBerths.push(stateRoom);
      	//intent is for occupied staterooms to have an array of passengers
      }



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
         return  this.lastmaint.cloneandincrement(365);
      };
      this.status.daysUntilMaint = function(){
         return this.date.daysaway(this.maintDate());
      };

      this.entries=[];
   }

   $scope.smmPersistent = {};
   smm.log = new shipLog();
   $scope.smmPersistent.shipLog = smm.log;
   smm.tripData = {};
   $scope.smmPersistent.tripData = smm.tripData;

   //Calculate the expected sale multiplier
   var _updateExpectedProfit = function (inventory) {
      var arrivalTradeCodes = [];
      if (smm.tripData.arrivalWorld && smm.tripData.arrivalWorld.Remarks) {
         arrivalTradeCodes = smm.tripData.arrivalWorld.Remarks.split(" ");
      }

      for (var i = 0; i < inventory.length; i++) {
         var purchaseDm = undefined;
         var saleDm = undefined;

         //Find the largest sale DM
         for (var j = 0; j < arrivalTradeCodes.length; j++) {
            if (inventory[i].type.saleDM[arrivalTradeCodes[j]]
                && (saleDm === undefined
                    || inventory[i].type.saleDM[arrivalTradeCodes[j]] > saleDm)) {
               saleDm = inventory[i].type.saleDM[arrivalTradeCodes[j]];
            }
         }
         //Find the largest purchase DM
         for (var j = 0; j < arrivalTradeCodes.length; j++) {
            if (inventory[i].type.purchaseDM[arrivalTradeCodes[j]]
               && (purchaseDm === undefined
                  || inventory[i].type.purchaseDM[arrivalTradeCodes[j]] > purchaseDm)) {
               purchaseDm = inventory[i].type.purchaseDM[arrivalTradeCodes[j]];
            }
         }

         if (!purchaseDm) {
            purchaseDm = 0;
         }
         if (!saleDm) {
            saleDm = 0;
         }
         var totalSaleDm = smm.buyTradeGoods.haggleResult.dm + 18 + saleDm - purchaseDm;

         var saleMult;
         if (totalSaleDm < 0) {
            saleMult = 0.25;
         } else if (totalSaleDm > 38) {
            saleMult = 4;
         } else {
            saleMult = smm.buyTradeGoods.expectedSellModifierByDm[totalSaleDm];
         }

         inventory[i].expectedProfit = (inventory[i].good.basePrice * saleMult) - inventory[i].pricePerTon;
      }
   }

   var _initializeBuyTradeGoods = function () {
      smm.buyTradeGoods = {};
      if ($scope.smmPersistent.buyTradeGoods) {
         smm.buyTradeGoods.persistent = $scope.smmPersistent.buyTradeGoods;
      } else {
         smm.buyTradeGoods.persistent = {};
         smm.buyTradeGoods.persistent.suppliersFound = {};
      }

      smm.buyTradeGoods.externalFactors = {};
      smm.buyTradeGoods.externalFactors.findSupplier = {};
      smm.buyTradeGoods.externalFactors.findSupplier.suppliersFound = {};

      smm.buyTradeGoods.setFoundSuppliersExtFactor = function() {
         if (smm.tripData.departureWorld && smm.buyTradeGoods.persistent.suppliersFound) {
            cleanUpFoundSuppliers();
            if (smm.buyTradeGoods.persistent.suppliersFound[smm.tripData.departureWorld.Hex]) {
               var len = smm.buyTradeGoods.persistent.suppliersFound[smm.tripData.departureWorld.Hex].length;
               if (!smm.buyTradeGoods.externalFactors.findSupplier) {
                  smm.buyTradeGoods.externalFactors.findSupplier = {};
               }
               var plural = len > 1 ? "s" : "";
               smm.buyTradeGoods.externalFactors.findSupplier.suppliersFound = {
                  externalFactor: len + " supplier" + plural + " found in past month",
                  value: len * -1
               };
            } else {
               smm.buyTradeGoods.externalFactors.findSupplier.suppliersFound = {};
            }
         }
      }

      smm.buyTradeGoods.externalFactors.findSupplier.starport = {
         a:{externalFactor:"Class A Starport", value:6},
         b:{externalFactor:"Class B Starport", value:4},
         c:{externalFactor:"Class C Starport", value:2}
      };
      smm.buyTradeGoods.externalFactors.findSupplier.assistant = {
         contact:{externalFactor:"Contact in Local Area", value:1},
         ally:   {externalFactor:"Ally in Local Area",    value:2}
      };

      smm.buyTradeGoods.supplier = {};
      smm.buyTradeGoods.suppliers = {
         standard:      {name:"Standard Supplier",        skillCheck:{skills:['Broker'],                    characteristics:['edu', 'soc'], difficulty: 'Average'   },  goods:['common', 'legal'           ], guideCanFind:true,  guideBaseCost:100, timeDice:1, timeScale:'d'},
         commonGoods:   {name:"Common-Goods Supplier",    skillCheck:{skills:['Broker'],                    characteristics:['edu', 'soc'], difficulty: 'Easy'      },  goods:['common'                    ], guideCanFind:true,  guideBaseCost:50,  timeDice:1, timeScale:'d'},
         blackMarket:   {name:"Black Market Supplier",    skillCheck:{skills:['Streetwise'],                characteristics:['edu', 'soc'], difficulty: 'Average'   },  goods:[                   'illegal'], guideCanFind:true,  guideBaseCost:500, timeDice:1, timeScale:'d'},
         morallyNeutral:{name:"Morally Neutral Supplier", skillCheck:{skills:['Streetwise', 'Investigate'], characteristics:['edu', 'soc'], difficulty: 'Difficult' },  goods:['common', 'legal', 'illegal'], guideCanFind:false, guideBaseCost:0,   timeDice:2, timeScale:'d'},
         online:        {name:"Online Supplier",          skillCheck:{skills:['Computers'],                 characteristics:['edu'],        difficulty: 'Average'   },  goods:['common', 'legal           '], guideCanFind:false, guideBaseCost:0,   timeDice:1, timeScale:'h'}
      };

      smm.buyTradeGoods.priceAdjustment = [
         3, 2, 1.75, 1.5, 1.35, 1.25, 1.2, 1.15, 1.1, 1.05, 1, .95, .9, .85, .8, .75, .7, .65, .6, .55, .5, .45, .4, .3
      ];

      //How to use this table:
      //Take the total DM for selling the item, add 18 to it, and use it as an offset into this table, unless:
      //  The result is < 0, in which case use 0.25
      //  The result is > 38, in which case use 4
      smm.buyTradeGoods.expectedSellModifierByDm = [
         0.250231481, 0.251388889, 0.254398148, 0.260416667,
         0.270833333, 0.287268519, 0.31087963,  0.341666667,
         0.379166667, 0.422453704, 0.470138889, 0.52037037,
         0.571527778, 0.622916667, 0.674074074, 0.724768519,
         0.775,       0.825,       0.875,       0.925231481,
         0.976388889, 1.030092593, 1.088888889, 1.159722222,
         1.253935185, 1.381944444, 1.552546296, 1.771527778,
         2.041666667, 2.352314815, 2.679398148, 3,
         3.293055556, 3.540740741, 3.728472222, 3.855324074,
         3.934027778, 3.976851852, 3.99537037
      ];

      //Set the default supplier type
      smm.buyTradeGoods.supplier = smm.buyTradeGoods.suppliers['standard'];

      smm.buyTradeGoods.changeSupplier = function() {
         delete smm.buyTradeGoods.useGuideResult;
         delete smm.buyTradeGoods.findSupplierResult;
         smm.buyTradeGoods.supplierLocationMethod = null;
         smm.buyTradeGoods.supplierFound = false;
      }

      smm.buyTradeGoods.onFindSupplierRoll = function () {
         if (smm.buyTradeGoods.findSupplierResult.roll.pass) {
            //Record a successful supplier search on this world: -1 for additional searches in the next 30 days
            var suppliersFound = smm.buyTradeGoods.persistent.suppliersFound[smm.tripData.departureWorld.Hex];
            if (!suppliersFound)
            {
               suppliersFound = [];
               smm.buyTradeGoods.persistent.suppliersFound[smm.tripData.departureWorld.Hex] = suppliersFound;
            }
            suppliersFound.push(smm.log.status.date);
            smm.buyTradeGoods.setFoundSuppliersExtFactor();
            smm.buyTradeGoods.supplierFound = true;
         }
      };

      smm.buyTradeGoods.cachedGuideResults = {};

      smm.buyTradeGoods.findGuideToFindSupplier = function() {
         smm.buyTradeGoods.guideAccepted = false;

         if (!smm.buyTradeGoods.cachedGuideResults[smm.buyTradeGoods.supplier.name]) {
            smm.buyTradeGoods.cachedGuideResults[smm.buyTradeGoods.supplier.name] = {
               cost: rawroll(1, 6).total * smm.buyTradeGoods.supplier.guideBaseCost
            }
         }
         smm.buyTradeGoods.useGuideResult = smm.buyTradeGoods.cachedGuideResults[smm.buyTradeGoods.supplier.name];
      };

      smm.buyTradeGoods.acceptGuideToFindSupplier = function () {
         smm.buyTradeGoods.guideAccepted = true;
         smm.buyTradeGoods.cachedGuideResults = {};
         smm.buyTradeGoods.supplierFound = true;
      };

      smm.buyTradeGoods.generateGoods = function (supplier) {
         //Utility function - add to dest[] the elements of src[] that aren't already present in dst[]
         var addUnique = function(src, dest) {
            for (var k = 0; k < src.length; k++) {
               if (dest.indexOf(src[k]) < 0) {
                  dest.push(src[k]);
               }
            }
         };

         //Check if the supplier has common goods
         var availableGoods = [];
         if (supplier.goods.indexOf("common") >= 0) {
            findAllCommonGoods(availableGoods);
         }

         var tradeCodes = smm.tripData.departureWorld.Remarks.split(" ");
         var moreGoods;
         var i;

         //Check if the supplier has legal goods
         if (supplier.goods.indexOf("legal") >= 0) {
            moreGoods = [];
            //Get the legal goods always available for this world's trade codes
            for (i = 0; i < tradeCodes.length; i++) {
               findAllAvailableLegalGoods(moreGoods, tradeCodes[i]);
            }
            addUnique(moreGoods, availableGoods);
         }

         //Check if the supplier has illegal goods
         if (supplier.goods.indexOf("illegal") >= 0) {
            moreGoods = [];
            //Get the illegal goods always available for this world's trade codes
            for (i = 0; i < tradeCodes.length; i++) {
               findAllAvailableIllegalGoods(moreGoods, tradeCodes[i]);
            }
            addUnique(moreGoods, availableGoods);
         }

         //Figure out what additional goods the supplier has
         var numExtraGoods = rawroll(1, 6).total;
         for (i = 0; i < numExtraGoods; i++) {
            findRandomGood(availableGoods, supplier.goods);
         }

         //Figure out the defined trade goods and how much of each is available
         var availableDefinedGoods = {};
         for (i = 0; i < availableGoods.length; i++) {
            //Use availableDefinedGoods as a hash (key: name of the parent good) of hahes (key: name of the defined trade good) to make lookup easier
            if (!availableDefinedGoods[availableGoods[i].type]) {
               availableDefinedGoods[availableGoods[i].type] = {};
               availableDefinedGoods[availableGoods[i].type].type = availableGoods[i];
            }
            //Get a set of defined trade goods for the given good
            var newDefinedGoods = enumerateDefinedTradeGoods(availableGoods[i]);
            for (var j = 0; j < newDefinedGoods.length; j++)
            {
               //Add the defined trade goods to our hash of hashes and record how much is available
               if (!availableDefinedGoods[availableGoods[i].type][newDefinedGoods[j].good.name]) {
                  availableDefinedGoods[availableGoods[i].type][newDefinedGoods[j].good.name] = { good: newDefinedGoods[j].good, type: availableGoods[i], tons: 0 };
               }
               availableDefinedGoods[availableGoods[i].type][newDefinedGoods[j].good.name].tons += newDefinedGoods[j].tons;
            }
         }
         return availableDefinedGoods;
      };

      smm.buyTradeGoods.haggleResult = null;
      smm.buyTradeGoods.priceList = [];
      smm.buyTradeGoods.priceListAvailable = false;

      smm.buyTradeGoods.onHaggleRoll = function () {
         var available = smm.buyTradeGoods.generateGoods(smm.buyTradeGoods.supplier);
         var tradeCodes = smm.tripData.departureWorld.Remarks.split(" ");
         var inventory = [];
         var i;
         //Now that we have the appropriate DM, we can generate the prices
         for (var type in available) {
            if (available.hasOwnProperty(type)) {
               //Find the largest purchase DM
               var purchaseDm = undefined;
               for (i = 0; i < tradeCodes.length; i++) {
                  if (   available[type].type.purchaseDM[tradeCodes[i]]
                      && (   purchaseDm === undefined
                          || available[type].type.purchaseDM[tradeCodes[i]] > purchaseDm)) {
                     purchaseDm = available[type].type.purchaseDM[tradeCodes[i]];
                  }
               }
               //Find the largest sale DM
               var saleDm = undefined;
               for (i = 0; i < tradeCodes.length; i++) {
                  if (   available[type].type.saleDM[tradeCodes[i]]
                      && (   saleDm === undefined
                          || available[type].type.saleDM[tradeCodes[i]] > saleDm)) {
                     saleDm = available[type].type.saleDM[tradeCodes[i]];
                  }
               }

               if (!purchaseDm) {
                  purchaseDm = 0;
               }
               if (!saleDm) {
                  saleDm = 0;
               }
               var totalDm = smm.buyTradeGoods.haggleResult.dm + purchaseDm - saleDm;

               var rollTotal = rawroll(3, 6).total + totalDm;
               var priceMultiplier;
               if (rollTotal < 0) {
                  priceMultiplier = 4;
               } else if (rollTotal >= 24) {
                  priceMultiplier = 0.25;
               } else {
                  priceMultiplier = smm.buyTradeGoods.priceAdjustment[rollTotal];
               }

               //We're done with the type - it causes problems in this loop, so just delete it
               delete available[type].type;
               for (var definedGood in available[type]) {
                  if (available[type].hasOwnProperty(definedGood)) {
                     available[type][definedGood].pricePerTon = Math.round(available[type][definedGood].good.basePrice * priceMultiplier);
                     inventory.push(available[type][definedGood]);
                  }
               }

            }
         }
         _updateExpectedProfit(inventory);
         smm.buyTradeGoods.priceList.splice(0, smm.buyTradeGoods.priceList.length);
         for (i = 0; i < inventory.length; i++) {
            inventory[i].tonsToBuy = 0;
            smm.buyTradeGoods.priceList.push(inventory[i]);
         }
         smm.buyTradeGoods.priceListAvailable = true;
      }

      smm.buyTradeGoods.totalCost = function() {
         var totalCost = 0;
         for (var i = 0; i < smm.buyTradeGoods.priceList.length; i++) {
            totalCost += (smm.buyTradeGoods.priceList[i].tonsToBuy * smm.buyTradeGoods.priceList[i].pricePerTon);
         }
         return totalCost;
      }

      smm.buyTradeGoods.totalTons = function() {
         var totalTons = 0;
         for (var i = 0; i < smm.buyTradeGoods.priceList.length; i++) {
            totalTons += smm.buyTradeGoods.priceList[i].tonsToBuy;
         }
         return totalTons;
      }

      smm.buyTradeGoods.totalExpectedProfit = function() {
         var totalExpectedProfit = 0;
         for (var i = 0; i < smm.buyTradeGoods.priceList.length; i++) {
            totalExpectedProfit += (smm.buyTradeGoods.priceList[i].tonsToBuy * smm.buyTradeGoods.priceList[i].expectedProfit);
         }
         return totalExpectedProfit;
      }

      smm.buyTradeGoods.onBuy = function() {
         var totalTons = 0;
         var i;
         for (i = 0; i < smm.buyTradeGoods.priceList.length; i++) {
            totalTons += smm.buyTradeGoods.priceList[i].tonsToBuy;
         }
         var tonsRemaining = smm.partyShip.maxcargo - smm.log.status.totalCargo();
         if (totalTons > tonsRemaining) {
            alertsService.addAlert("warning", "Unable to buy " + totalTons + " tons of cargo. Ship only has " + tonsRemaining + " tons of cargo space remaining.");
         } else {
            for (i = 0; i < smm.buyTradeGoods.priceList.length; i++) {
               if (smm.buyTradeGoods.priceList[i].tonsToBuy > 0) {
                  var good = smm.buyTradeGoods.priceList[i];
                  var cargo = cargoFactory();
                  cargo.type = good.type.type;
                  cargo.detail = good.good.name;
                  cargo.tons = good.tonsToBuy;
                  cargo.paid = good.pricePerTon;
                  cargo.isGood = true;
                  cargo.good = smm.buyTradeGoods.priceList[i].good;
                  good.tons -= good.tonsToBuy;
                  good.tonsToBuy = 0;
                  smm.log.status.cargo.push(cargo);
                  smm.logNow("Purchased " + cargo.tons + " dT " + cargo.type + " (" + cargo.detail + ") @ Cr. " + $filter('number')(good.pricePerTon, 0) + "/dT", 0);
               }
            }
         }
      }
   };

   _initializeBuyTradeGoods();
   $scope.smmPersistent.buyTradeGoods = smm.buyTradeGoods.persistent;

   var _buildSmmPersistentDataFromJson = angular.bind(this, function(json)
   {
      if (json)
      {
         if (json.shipLog)
         {
            if (   !json.shipLog.formatVersion
                || json.shipLog.formatVersion != 1)
            {
               alertsService.addAlert("danger", "Ship's log has invalid format. Unable to load.");
            }
            this.log.entries.length = 0;
            angular.merge(this.log, json.shipLog);
         }
         if (json.tripData)
         {
            smm.tripData.departureWorld = json.tripData.departureWorld;
            smm.tripData.departureWorldSearchResults = json.tripData.departureWorldSearchResults;
            if (json.tripData.departureWorldSearchResults)
            {
               if (!smm.tripData.arrivalWorlds)
               {
                  smm.tripData.arrivalWorlds = [];
               }
               smm.tripData.arrivalWorlds.length = 0;
               Array.prototype.push.apply(smm.tripData.arrivalWorlds, json.tripData.arrivalWorlds);
               smm.tripData.arrivalWorld = {};
               if (json.tripData.arrivalWorlds && json.tripData.arrivalWorld)
               {
                  for (var i = 0; i < json.tripData.arrivalWorlds.length; i++)
                  {
                     if (json.tripData.arrivalWorlds[i].Name === json.tripData.arrivalWorld.Name)
                     {
                        smm.tripData.arrivalWorld = json.tripData.arrivalWorlds[i];
                        break;
                     }
                  }
               }
            }
         }
         if (json.buyTradeGoods)
         {
            if (json.buyTradeGoods.suppliersFound)
            {
               for (var name in json.buyTradeGoods.suppliersFound)
               {
                   if (json.buyTradeGoods.suppliersFound.hasOwnProperty(name))
                   {
                      var len = json.buyTradeGoods.suppliersFound[name].length;
                      for (var i = 0; i < len; i++)
                      {
                         json.buyTradeGoods.suppliersFound[name][i] = dateFactory(json.buyTradeGoods.suppliersFound[name][i].year, json.buyTradeGoods.suppliersFound[name][i].day);
                      }
                   }
               }
            }
            angular.merge(smm.buyTradeGoods.persistent, json.buyTradeGoods);
            smm.buyTradeGoods.setFoundSuppliersExtFactor();
         }
      }
   });

   var cleanUpFoundSuppliers = function() {
      for (var name in smm.buyTradeGoods.persistent.suppliersFound)
      {
          if (smm.buyTradeGoods.persistent.suppliersFound.hasOwnProperty(name))
          {
             var len = smm.buyTradeGoods.persistent.suppliersFound[name].length;
             for (var i = len - 1; i >= 0; i--)
             {
                if (smm.buyTradeGoods.persistent.suppliersFound[name][i].diffdays(smm.log.status.date) > 30)
                {
                   smm.buyTradeGoods.persistent.suppliersFound[name].splice(i, 1);
                }
             }
             if (!smm.buyTradeGoods.persistent.suppliersFound[name].length)
             {
                delete smm.buyTradeGoods.persistent.suppliersFound[name];
             }
          }
      }
   };

   dataStorageService.register($scope, 'smmPersistent', _buildSmmPersistentDataFromJson);

   smm.inputYear = smm.log.status.date.year;
   smm.inputDate = smm.log.status.date.day;


   //cargo on the ship looks like this:
   //type, detail, tons, price paid, Risk DM, Danger DM, purchase DM, sale DM,

   //cargo for sale also has max risk dm, base price, max tons



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

   smm.manualPassenger=passengerFactory();

   smm.manualPassengerAdd = function() {
      addPassenger(smm.manualPassenger, smm.log.status.staterooms, smm.activeStateroom - 1, 'glyphicon-check');
      smm.logNow("[manual] Added " + smm.manualPassenger.name + "[" + smm.manualPassenger.type + "] in stateroom " + smm.activeStateroom, smm.inputTimeElapsed);
      smm.manualPassenger = passengerFactory();
      //console.log(smm.log.status.staterooms);
   };

   smm.manualLowPassengerAdd = function() {
      addPassenger(smm.manualPassenger, smm.log.status.lowBerths, smm.activeStateroom - 1, 'glyphicon-hdd');
      smm.logNow("[manual] Added " + smm.manualPassenger.name + "[" + smm.manualPassenger.type + "] in Low Berth " + smm.activeStateroom, smm.inputTimeElapsed);
      smm.manualPassenger = passengerFactory();
      //console.log(smm.log.status.lowBerths);
   };


   	 smm.passengerExplode=function(berthArray){
   		var passengers=[];
   		for (var i=0; i < berthArray.length; i++) {
		      var occupants = berthArray[i].occupants;
		      for (var j = 0; j < occupants.length; j++)
   			{
		         if (!(occupants[j])) continue; //bug now fixed?
   				//console.log(i);
   				//console.log(j);
   				//console.log(smm.log.status.staterooms[i][j]);
		         passengers.push(occupants[j]);
   				//console.log(passengers);
   				passengers[passengers.length-1].berthNum=i;
   				passengers[passengers.length-1].occupantNum=j;
   			}
   		}
   		//console.log(passengers)
   		return passengers;
   	};

   	smm.passengersForBerth=function(berthArray){
   		var passengers=[];
   		for (var i=0; i < berthArray.length; i++)
   		{
   			var berthstring='';
   			for (var j=0; j < berthArray[i].length; j++)
   			{
   				berthstring+=berthArray[i][j].name + ": "+berthArray[i][j].type	+"\n"
   			}

   			passengers.push(berthstring);
   		}

   		return passengers;

   	};


   smm.manualPassengerDelete = function() {
      //console.log(smm.passengerToDelete);

      smm.logNow("[manual] Removed " + smm.log.status.staterooms[smm.passengerToDelete[0]].name + "[" + smm.log.status.staterooms[smm.passengerToDelete[0]].type + "] in stateroom " + smm.passengerToDelete[0], smm.inputTimeElapsed);
      removePassenger(smm.log.status.staterooms, smm.passengerToDelete[0], smm.passengerToDelete[1], 'glyphicon-unchecked');
   };

   smm.manualLowPassengerDelete = function() {
      //console.log(smm.passengerToDelete);

      smm.logNow("[manual] Removed " + smm.log.status.lowBerths[smm.lowPassengerToDelete[0]].name + "[" + smm.log.status.lowBerths[smm.lowPassengerToDelete[0]].type + "] in Low Berth " + smm.lowPassengerToDelete[0], smm.inputTimeElapsed);
      removePassenger(smm.log.status.lowBerths, smm.lowPassengerToDelete[0], smm.lowPassengerToDelete[1], 'glyphicon-inbox');
   };



   smm.manualCredits=function(){
      smm.log.status.cash += smm.addMoney;
      smm.logEntry(smm.log.status.year, smm.log.status.today, smm.inputTimeElapsed, "[manual] " + smm.addMoneyDesc + ": " + smm.addMoney + " = " +smm.log.status.cash);
   }


   smm.manualLog=function(){
      smm.logEntry(smm.inputYear,smm.inputDate,smm.inputTimeElapsed,smm.logText);
   };

   smm.logEntry=function(newyear, newdate, newelapsed, newtext){
      smm.logEntryRaw({"year":newyear, "startDate":newdate, "elapsed":newelapsed, "text":newtext});
   };

   smm.logEntryRaw=function(newEntry) {
      smm.log.entries.push(newEntry);
   };

   smm.logNow=function(newtext, newelapsed) {
   	 smm.logEntry(smm.log.status.date.year, smm.log.status.date.day, newelapsed, newtext);
   };

   smm.manualSetDate=function(){
       smm.log.status.date=dateFactory(smm.inputYear,smm.inputDate);
       //The date has changed - some suppliers we found may now have been > 30 days ago
       smm.buyTradeGoods.setFoundSuppliersExtFactor();
   };

   smm.departureWorlds = [];
   smm.refreshDepartureWorlds = function(worldName) {
      var params = {q: worldName};
      return $http.get('https://travellermap.com/api/search', {params: params})
      .then(function(response) {
         smm.departureWorlds = response.data.Results.Items;
      });
   };

   smm.refreshArrivalWorlds = function () {
      _initializeBuyTradeGoods();
      smm.tripData.arrivalWorld = {};
      if (smm.tripData.departureWorldSearchResults)
      {
         var dw = smm.tripData.departureWorldSearchResults.World;
         var params = {sx:dw.SectorX, sy:dw.SectorY, hx:dw.HexX, hy:dw.HexY, jump:smm.partyShip.Jump};
         return $http.get('https://travellermap.com/api/jumpworlds', {params: params})
         .then(function(response) {
            if (!smm.tripData.arrivalWorlds)
            {
               smm.tripData.arrivalWorlds = [];
            }
            smm.tripData.arrivalWorlds.length = 0;
            Array.prototype.push.apply(smm.tripData.arrivalWorlds, response.data.Worlds);
            var indexToSplice;
            for (var i = 0; i < smm.tripData.arrivalWorlds.length; i++)
            {
               //Decode each world's UWP data
               smm.tripData.arrivalWorlds[i].UWPsplit = uwpsplit(smm.tripData.arrivalWorlds[i].UWP);
               //One of the arrival worlds returned by travellermap.com will actually be the departure world, but with more data. Save it.
               if (smm.tripData.arrivalWorlds[i].Name === smm.tripData.departureWorldSearchResults.World.Name)
               {
                  smm.tripData.departureWorld = smm.tripData.arrivalWorlds[i];
                  indexToSplice = i;
               }
            }
            if (indexToSplice !== undefined)
            {
                smm.tripData.arrivalWorlds.splice(indexToSplice, 1);
            }
            for (var i = 0; i < smm.tripData.arrivalWorlds.length; i++)
            {
               smm.tripData.arrivalWorlds[i].distance = parsecDistance(smm.tripData.departureWorld, smm.tripData.arrivalWorlds[i]);
            }
            //Refresh number of suppliers found in past month for the new world we're on
            smm.buyTradeGoods.setFoundSuppliersExtFactor();
         });
      }
      else
      {
         smm.tripData.arrivalWorlds = smm.tripData.arrivalWorlds.splice(0, smm.tripData.arrivalWorlds.length);
      }
   };

   smm.arrivalWorldChanged = function () {
      _updateExpectedProfit(smm.buyTradeGoods.priceList);
   }

   smm.passengers = {};
   smm.passengers.roundupModifier = 0;

   smm.passengers.roundupCallback = function() {
	   smm.passengers.roundupModifier=Math.trunc(smm.passengers.roundupResult.roll.effect/2);
	   smm.logNow(smm.passengers.roundupResult.roll.timing, ""+smm.passengers.roundupResult.character.name+" searched for passengers ("+ smm.passengers.roundupResult.skill.name +", "+smm.passengers.roundupModifier+")");
   };


smm.passengers={};
smm.passengers.roundupModifier=0;

smm.passengers.roundupCallback = function() {
	smm.passengers.roundupModifier=Math.trunc(smm.passengers.roundupResult.roll.effect/2);
	 smm.logNow(""+smm.passengers.roundupResult.character.name+" searched for passengers ("+ smm.passengers.roundupResult.skill.name +", "+smm.passengers.roundupModifier+")", smm.passengers.roundupResult.roll.timing);
};

smm.passengers.generateAvailable=function() {
		/*
		 Roll on the Available Passengers table
			   TODO: modified by events
			   done: modified by source population
			   done: modified by trade code table
			   done: modified by TL difference (max 5)
			TODO: Every group of 6 passengers taken, 4+ means one is special, roll on passenger table
		*/
		if (!smm.passengers.showHuntForPassengersBox) smm.passengers.roundupModifier = 0;
		smm.availablePassengers = calculatePassengers(smm.tripData.departureWorld,smm.tripData.arrivalWorld, smm.passengers.roundupModifier);
		}

}]);

var calculatePassengers=function(departureWorld,arrivalWorld,roundupModifier){


	var departremarksmod=modifiersPerTradeCode(PassengersByTradeType.departure, departureWorld.Remarks, departureWorld.Zone);
	var arrivalremarksmod=modifiersPerTradeCode(PassengersByTradeType.arrival, arrivalWorld.Remarks, departureWorld.Zone);

	var AvailablePassengersEntry = departureWorld.UWPsplit["population"]
									+ departremarksmod + arrivalremarksmod
									- Math.min(Math.abs(departureWorld.UWPsplit["TL"]-arrivalWorld.UWPsplit["TL"]),5)
									+ roundupModifier;
									//TODO + events table

	AvailablePassengersEntry=Math.min(16,Math.max(0,AvailablePassengersEntry)); //values to 0-16 only
	var passengers={"low":AvailablePassengers.low[AvailablePassengersEntry](),
					"mid":AvailablePassengers.mid[AvailablePassengersEntry](),
					"high":AvailablePassengers.high[AvailablePassengersEntry]()}

	return passengers;
};

var addPassenger = function(newpassenger, locationArray, berthNumber, icon) {
    //console.log("loc:");
	//console.log(locationArray)
	//console.log("berth:");
	//console.log(berthNumber);
	locationArray[berthNumber].occupants.push(newpassenger);
	locationArray[berthNumber].stateOn = icon;
};

var removePassenger = function(locationArray, berthNumber, passengerNumber, icon){
    //console.log("attempting to delete " + berthNumber + "," + passengerNumber + "from:");
	//console.log(locationArray);
	locationArray[berthNumber].occupants.splice(passengerNumber, 1);
	if (!locationArray[berthNumber].occupants.length) {
	   locationArray[berthNumber].stateOn = icon;
	}
	//console.log("POST-DELETE:")
	//console.log(locationArray);
};


var cargoFactory = function(){
	return {"type":"", "detail":"", "tons":0};
};

var passengerFactory = function(){
	return {"name":"A Person", "type":"crew"};
};

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
		var newdays = currentdays + daystochange;
	   var func = newdays > 0 ? Math.floor : Math.ceil;
		var calcyear=func(newdays/365);
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

var uwpsplit = function(uwp) {
   var splituwp=uwp.split("");
   return {
      'starport':   splituwp[0].toLowerCase(),
      'size':       parseInt(splituwp[1], 36),
      'atmosphere': parseInt(splituwp[2], 36),
      'hydrosphere':parseInt(splituwp[3], 36),
      'population': parseInt(splituwp[4], 36),
      'government': parseInt(splituwp[5], 36),
      'law':        parseInt(splituwp[6], 36),
      'TL':         parseInt(splituwp[8], 36)  //skip the dash
   };
}

var modifiersPerTradeCode = function(table, remarks, zone){
   var total=0;
   var remarklist=remarks.split(" ");

   if (zone=='R') remarklist.push("Rz");
   if (zone=='A') remarklist.push("Az");

   for (var i=0;i<remarklist.length;i++){
      if (remarklist[i] in table)
         total+=table[remarklist[i]];
   }
   return total;
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
//    Find a source
      //Diplomat, Investigate, Streetwise (Average). Effect is days taken or wasted.
      //Attempts per month = pop/3
//    determine cargo specs
      //lot sizes:  Major = 1d6x10, Minor = 1d6x5, incidental = 1, no splitting
      //Trade Traffic = Destination Pop + table modifiers
      //lot count=table for traffic value
//    determine time table
      //determine how many "days away" it is.  Referee fiat?
//    negotiate fees
      //base 500= 20% per extra parsec (Added or multiplied?)
      //Negotiate?
         //Hire broker? consult broker table
         //Broker or persuade check vs see table for difficulty. Effect changes price.
         //If bail, no freight searches for one month
//    travel
      //Risk vs. reward rules have halved transit hazard rules (round down)
      //I guess we have to check for transit hazards?
//    collect
   //get paid, reduce fee by late table
   //tax?

//IMPORTANT NOTE: This only works within sectors! Crossing a sector boundary will break this!
var parsecDistance = function(world1, world2)
{
   if (world1.Sector !== world2.Sector)
   {
      throw "Worlds must be in same sector to calculate parsec disatnce";
   }
   var coords1 = hexToCoords(world1.Hex);
   var coords2 = hexToCoords(world2.Hex);

   var func;
   if (   (coords1.x % 2 === 0 && coords2.y < coords1.y)
       || (coords1.x % 2 === 1 && coords1.y < coords2.y))
   {
      func = Math.floor;
   }
   else
   {
      func = Math.ceil;
   }

   return (  Math.abs(coords1.x - coords2.x)
           + Math.max(Math.abs(coords1.y - coords2.y) - func(Math.abs(coords1.x - coords2.x) / 2),
                      0));
}

var hexToCoords = function(hex)
{
   var x = (parseInt(hex.charAt(0)) * 10) + parseInt(hex.charAt(1));
   var y = (parseInt(hex.charAt(2)) * 10) + parseInt(hex.charAt(3));
   return {x:x, y:y};
}

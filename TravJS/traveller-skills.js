skillsModule = angular.module('travellerSkills', []); //declare the module for handling skills
      
skillsModule.factory('skills', [function() {
   var skills = function() {
      var _skillLookup = {};
      
      var _displayMe = function() {
         if (   !this.parent
             || _skillLookup[this.parent].hasBeenLearned)
         {
            return true;
         }
         return false;
      };

      var _togglePlainSkill = function() {
         if (this.hasOwnProperty("value"))
         {
            this.hasBeenLearned = false;
            delete this.value;
         }
         else
         {
            this.hasBeenLearned = true;
            this.value = 0;
         }
      };
      
      var _toggleParentSkill = function() {
         if (!this.hasBeenLearned)
         {
            this.hasBeenLearned = true;
            for (var i = 0; i < this.specialties.length; i++)
            {
               _skillLookup[this.specialties[i]].hasBeenLearned = true;
               _skillLookup[this.specialties[i]].value = 0;
            }
         }
         else
         {
            this.hasBeenLearned = false;
            for (var i = 0; i < this.specialties.length; i++)
            {
               _skillLookup[this.specialties[i]].hasBeenLearned = false;
               delete _skillLookup[this.specialties[i]].value;
            }
         }
      };
      
      var _toggleChildSkill = function() {};

      var _showValueParentSkill = function() {
         return false;
      };
      
      var _showValuePlainOrChildSkill = function() {
         return this.hasBeenLearned;
      };
      
      this.fullList = [
         { name:"Admin",                                                       specialties:[] },
         { name:"Advocate",                                                    specialties:[] },
         { name:"Animals",                                                     specialties:["Riding", "Veterinary", "Training", "Farming"] },
         { name:"Riding",                          parent:"Animals",           specialties:[] },
         { name:"Veterinary",                      parent:"Animals",           specialties:[] },
         { name:"Training",                        parent:"Animals",           specialties:[] },
         { name:"Farming",                         parent:"Animals",           specialties:[] },
         { name:"Athletics",                                                   specialties:["Co-ordination", "Endurance", "Strength", "Flying"] },
         { name:"Co-ordination",                   parent:"Athletics",         specialties:[] },
         { name:"Endurance",                       parent:"Athletics",         specialties:[] },
         { name:"Strength",                        parent:"Athletics",         specialties:[] },
         { name:"Flying",                          parent:"Athletics",         specialties:[] },
         { name:"Art",                                                         specialties:["Acting", "Dance", "Holography", "Instrument", "Sculpting", "Writing"] },
         { name:"Acting",                          parent:"Art",               specialties:[] },
         { name:"Dance",                           parent:"Art",               specialties:[] },
         { name:"Holography",                      parent:"Art",               specialties:[] },
         { name:"Instrument",                      parent:"Art",               specialties:[] },
         { name:"Sculpting",                       parent:"Art",               specialties:[] },
         { name:"Writing",                         parent:"Art",               specialties:[] },
         { name:"Astrogation",                                                 specialties:[] },
         { name:"Battle Dress",                                                specialties:[] },
         { name:"Broker",                                                      specialties:[] },
         { name:"Carouse",                                                     specialties:[] },
         { name:"Comms",                                                       specialties:[] },
         { name:"Computers",                                                   specialties:[] },
         { name:"Deception",                                                   specialties:[] },
         { name:"Diplomat",                                                    specialties:[] },
         { name:"Drive",                                                       specialties:["Mole", "Tracked", "Wheeled"] },
         { name:"Mole",                            parent:"Drive",             specialties:[] },
         { name:"Tracked",                         parent:"Drive",             specialties:[] },
         { name:"Wheeled",                         parent:"Drive",             specialties:[] },
         { name:"Engineer",                                                    specialties:["Manoeuver Drive (M-Drive)", "Jump Drive (J-Drive)", "Electronics (Engineer)", "Life Support", "Power"] },
         { name:"Manoeuver Drive (M-Drive)",       parent:"Engineer",          specialties:[] },
         { name:"Jump Drive (J-Drive)",            parent:"Engineer",          specialties:[] },
         { name:"Electronics (Engineer)",          parent:"Engineer",          specialties:[] },
         { name:"Life Support",                    parent:"Engineer",          specialties:[] },
         { name:"Power",                           parent:"Engineer",          specialties:[] },
         { name:"Explosives",                                                  specialties:[] },
         { name:"Flyer",                                                       specialties:["Grav", "Rotor", "Wing"] },
         { name:"Grav",                            parent:"Flyer",             specialties:[] },
         { name:"Rotor",                           parent:"Flyer",             specialties:[] },
         { name:"Wing",                            parent:"Flyer",             specialties:[] },
         { name:"Gambler",                                                     specialties:[] },
         { name:"Gunner",                                                      specialties:["Turrets", "Ortillery", "Screens", "Capital Weapons"] },
         { name:"Turrets",                         parent:"Gunner",            specialties:[] },
         { name:"Ortillery",                       parent:"Gunner",            specialties:[] },
         { name:"Screens",                         parent:"Gunner",            specialties:[] },
         { name:"Capital Weapons",                 parent:"Gunner",            specialties:[] },
         { name:"Gun Combat",                                                  specialties:["Slug Rifle", "Slug Pistol", "Shotgun", "Energy Rifle", "Energy Pistol"] },
         { name:"Slug Rifle",                      parent:"Gun Combat",        specialties:[] },
         { name:"Slug Pistol",                     parent:"Gun Combat",        specialties:[] },
         { name:"Shotgun",                         parent:"Gun Combat",        specialties:[] },
         { name:"Energy Rifle",                    parent:"Gun Combat",        specialties:[] },
         { name:"Energy Pistol",                   parent:"Gun Combat",        specialties:[] },
         { name:"Heavy Weapons",                                               specialties:["Launchers", "Man Portable Artillery", "Field Artillery"] },
         { name:"Launchers",                       parent:"Heavy Weapons",     specialties:[] },
         { name:"Man Portable Artillery",          parent:"Heavy Weapons",     specialties:[] },
         { name:"Field Artillery",                 parent:"Heavy Weapons",     specialties:[] },
         { name:"Investigate",                                                 specialties:[] },
         { name:"Jack of all Trades",                                          specialties:[] },
         { name:"Language",                                                    specialties:["Anglic", "Vilani", "Zdetl", "Oynprith"] },
         { name:"Anglic",                          parent:"Language",          specialties:[] },
         { name:"Vilani",                          parent:"Language",          specialties:[] },
         { name:"Zdetl",                           parent:"Language",          specialties:[] },
         { name:"Oynprith",                        parent:"Language",          specialties:[] },
         { name:"Leadership",                                                  specialties:[] },
         { name:"Life Sciences",                                               specialties:["Biology", "Cybernetics", "Genetics", "Psionicology"] },
         { name:"Biology",                         parent:"Life Sciences",     specialties:[] },
         { name:"Cybernetics",                     parent:"Life Sciences",     specialties:[] },
         { name:"Genetics",                        parent:"Life Sciences",     specialties:[] },
         { name:"Psionicology",                    parent:"Life Sciences",     specialties:[] },
         { name:"Mechanic",                                                    specialties:[] },
         { name:"Medic",                                                       specialties:[] },
         { name:"Melee",                                                       specialties:["Unarmed Combat", "Blade", "Bludgeon", "Natural Weapons"] },
         { name:"Unarmed Combat",                  parent:"Melee",             specialties:[] },
         { name:"Blade",                           parent:"Melee",             specialties:[] },
         { name:"Bludgeon",                        parent:"Melee",             specialties:[] },
         { name:"Natural Weapons",                 parent:"Melee",             specialties:[] },
         { name:"Navigation",                                                  specialties:[] },
         { name:"Persuade",                                                    specialties:[] },
         { name:"Pilot",                                                       specialties:["Small Craft", "Spacecraft", "Capital Ships"] },
         { name:"Small Craft",                     parent:"Pilot",             specialties:[] },
         { name:"Spacecraft",                      parent:"Pilot",             specialties:[] },
         { name:"Capital Ships",                   parent:"Pilot",             specialties:[] },
         { name:"Physical Sciences",                                           specialties:["Physics", "Chemistry", "Electronics (Physical Sciences)"] },
         { name:"Physics",                         parent:"Physical Sciences", specialties:[] },
         { name:"Chemistry",                       parent:"Physical Sciences", specialties:[] },
         { name:"Electronics (Physical Sciences)", parent:"Physical Sciences", specialties:[] },
         { name:"Recon",                                                       specialties:[] },
         { name:"Remote Operations",                                           specialties:[] },
         { name:"Seafarer",                                                    specialties:["Sail", "Submarine", "Ocean Ships", "Motorboats"] },
         { name:"Sail",                            parent:"Seafarer",          specialties:[] },
         { name:"Submarine",                       parent:"Seafarer",          specialties:[] },
         { name:"Ocean Ships",                     parent:"Seafarer",          specialties:[] },
         { name:"Motorboats",                      parent:"Seafarer",          specialties:[] },
         { name:"Sensors",                                                     specialties:[] },
         { name:"Social Sciences",                                             specialties:["Archeology", "Economics", "History", "Linguistics", "Philosophy", "Psychology", "Sophontology"] },
         { name:"Archeology",                      parent:"Social Sciences",   specialties:[] },
         { name:"Economics",                       parent:"Social Sciences",   specialties:[] },
         { name:"History",                         parent:"Social Sciences",   specialties:[] },
         { name:"Linguistics",                     parent:"Social Sciences",   specialties:[] },
         { name:"Philosophy",                      parent:"Social Sciences",   specialties:[] },
         { name:"Psychology",                      parent:"Social Sciences",   specialties:[] },
         { name:"Sophontology",                    parent:"Social Sciences",   specialties:[] },
         { name:"Space Sciences",                                              specialties:["Planetology", "Robotics", "Xenology"] },
         { name:"Planetology",                     parent:"Space Sciences",    specialties:[] },
         { name:"Robotics",                        parent:"Space Sciences",    specialties:[] },
         { name:"Xenology",                        parent:"Space Sciences",    specialties:[] },
         { name:"Stealth",                                                     specialties:[] },
         { name:"Steward",                                                     specialties:[] },
         { name:"Streetwise",                                                  specialties:[] },
         { name:"Survival",                                                    specialties:[] },
         { name:"Tactics",                                                     specialties:["Military Tactics", "Naval Tactics"] },
         { name:"Military Tactics",                parent:"Tactics",           specialties:[] },
         { name:"Naval Tactics",                   parent:"Tactics",           specialties:[] },
         { name:"Trade",                                                       specialties:[] },
         { name:"Vacc Suit",                                                   specialties:[] },
         { name:"Zero-G",                                                      specialties:[] }
      ];
      
      for (var i = 0, len = this.fullList.length; i < len; i++)
      {
         _skillLookup[this.fullList[i].name] = this.fullList[i];

         this.fullList[i].displayMe = _displayMe;

         this.fullList[i].editing = false;

         this.fullList[i].editingInProgress = function() {
            return this.editing;
         };
         this.fullList[i].startEditing = function() {
            this.backupValue = this.value;
            this.editing = true;
         };
         this.fullList[i].stopEditing = function() {
            if (this.value === undefined)
            {
               this.value = this.backupValue;
            }
            this.editing = false;
         };

         if (this.fullList[i].parent) //child skill
         {
            this.fullList[i].toggleMe = _toggleChildSkill;
            this.fullList[i].isSpecialty = true;
            this.fullList[i].showValue = _showValuePlainOrChildSkill;
         }
         else if (   this.fullList[i].specialties
                  && this.fullList[i].specialties.length > 0) //parent skill
         {
            this.fullList[i].toggleMe = _toggleParentSkill;
            this.fullList[i].isSpecialty = false;
            this.fullList[i].showValue = _showValueParentSkill;
         }
         else //neither parent nor child
         {
            this.fullList[i].toggleMe = _togglePlainSkill;
            this.fullList[i].isSpecialty = false;
            this.fullList[i].showValue = _showValuePlainOrChildSkill;
         }
      };
   };

   return skills;
}]);

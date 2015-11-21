skillsModule = angular.module('travellerSkills', []); //declare the module for handling skills

skillsModule.factory('skill', ['skillsService', function(skillsService) {
   var skill = function(name, isTradeSkill) {
      this.name = name;
      if (isTradeSkill)
      {
         this.isTradeSkill = true;
      }

      this.displayMe = function() {
         var matchingSkill = skillsService.lookupDefaultSkill(this.name);
         if (   !matchingSkill //custom skill - assumed to be plain skill
             || !matchingSkill.parent //has no parent - is a parent or a plain skill
             || this.hasBeenLearned) //specialty that has been learned
         {
            return true;
         }
         return false;
      };

      this.isSpecialty = function() {
         var matchingSkill = skillsService.lookupDefaultSkill(this.name);

         if (   (matchingSkill && matchingSkill.parent) //child skill (specialty)
             || this.isTradeSkill) //trade skills act like children
         {
            return true;
         }
         return false;
      };

      this.showValue = function() {
         var matchingSkill = skillsService.lookupDefaultSkill(this.name);

         if (   (   matchingSkill
                 && matchingSkill.specialties
                 && matchingSkill.specialties.length > 0) //parent skill - never show value
             || this.name === "Trade") //Trade acts like a parent skill
         {
            return false;
         }
         else
         {
            return this.hasBeenLearned; //otherwise, show value if the skill has been learned
         }
      };
   };

   return skill;
}]);

skillsModule.factory('skills', ['skillsService', 'skill', function(skillsService, skill) {
   var skills = function() {
      var _skillDict = {};

      this.toggleSkill = function(skill) {
         //Trade is a special case. We don't want it to be toggle-able
         if (skill.name === "Trade" || skill.isTradeSkill)
         {
            return;
         }

         var skill = _skillDict[skill.name];
         var skillData = skillsService.lookupDefaultSkill(skill.name);

         if (skillData)
         {
            if (skillData.parent) //child skill (specialty)
            {
               //don't need to toggle a specialty on or off - it's automatically toggled when its parent is toggled
               return;
            }
            else if (   skillData.specialties
                     && skillData.specialties.length > 0) //parent skill)
            {
               _toggleParentSkill(skill, skillData);
               return;
            }
         }
         _togglePlainSkill(skill); //plain skill or custom skill
      };

      var _togglePlainSkill = function(skill) {
         if (skill.hasOwnProperty("value"))
         {
            skill.hasBeenLearned = false;
            delete skill.value;
         }
         else
         {
            skill.hasBeenLearned = true;
            skill.value = 0;
         }
      };

      var _toggleParentSkill = function(skill, skillDetails) {
         if (!skill.hasBeenLearned)
         {
            skill.hasBeenLearned = true;
            //toggle all of the skill's specialties, too
            for (var i = 0; i < skillDetails.specialties.length; i++)
            {
               var specialty = _skillDict[skillDetails.specialties[i]];
               specialty.hasBeenLearned = true;
               specialty.value = 0;
            }
         }
         else
         {
            skill.hasBeenLearned = false;
            //toggle all of the skill's specialties, too
            for (var i = 0; i < skillDetails.specialties.length; i++)
            {
               var specialty = _skillDict[skillDetails.specialties[i]];
               specialty.hasBeenLearned = false;
               delete specialty.value;
            }
         }
      };

      this.numTradeSkills = 0;
      this.skillList = [];
      this.addSkill = function(skillToAdd)
      {
         if (skillToAdd.isTradeSkill)
         {
            this.numTradeSkills++;
            _skillDict["Trade"].hasBeenLearned = true;
         }
         this.skillList.push(skillToAdd);
         _skillDict[skillToAdd.name] = skillToAdd;
      }

      this.deleteSkill = function(index)
      {
         var skillToDelete = this.skillList[index];
         if (skillToDelete.isTradeSkill)
         {
            this.numTradeSkills--;
            if (!this.numTradeSkills)
            {
               _skillDict["Trade"].hasBeenLearned = false;
            }
         }
         this.skillList.splice(index, 1);
         delete _skillDict[skillToDelete.name];
      }
      
      this.findSkill = function(skillName) {
         return _skillDict[skillName];
      }

      for (var i = 0, len = skillsService.defaultSkillList.length; i < len; i++)
      {
         this.addSkill(new skill(skillsService.defaultSkillList[i].name));
      }
   };

   return skills;
}]);

skillsModule.service('skillsService', ['dataStorageService', function(dataStorageService) {
   this.defaultSkillList = [
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

   var _defaultSkillDict = {};
   this.usableSkills = [];
   var len = this.defaultSkillList.length;
   for (var i = 0; i < len; i++)
   {
      var skill = this.defaultSkillList[i];
      if (skill.parent)
      {
         skill.nameIncludingParent = skill.parent + ": " + skill.name;
      }
      else
      {
         skill.nameIncludingParent = skill.name;
      }
      _defaultSkillDict[skill.name] = skill;
      if (   (!skill.specialties || skill.specialties.length === 0)
          && !(   skill.name === "Trade"
               || skill.name === "Jack of all Trades"))
      {
         this.usableSkills.push(skill);
      }
   }
   this.usableSkills.sort(function(a,b){return a.nameIncludingParent.localeCompare(b.nameIncludingParent);});

   this.lookupDefaultSkill = function(name) {
      return _defaultSkillDict[name];
   }

   this.skillExternalFactors = {};
   
   var _buildEFsFromJsonEFs = angular.bind(this, function(jsonEFs)
   {
      for (var prop in this.skillExternalFactors)
      {
         if (this.skillExternalFactors.hasOwnProperty(prop))
         {
            delete this.skillExternalFactors[prop];
         }
      }
      angular.merge(this.skillExternalFactors, jsonEFs);
   });
   
   this.addSkillExternalFactor = function(skillName, externalFactor, value)
   {
      if (!this.skillExternalFactors[skillName])
      {
         this.skillExternalFactors[skillName] = [];
      }
      this.skillExternalFactors[skillName].push({externalFactor, value});
   }
   
   this.deleteSkillExternalFactor = function(skillName, externalFactor)
   {
      for (var i = 0; i < this.skillExternalFactors[skillName].length; i++)
      {
         if (this.skillExternalFactors[skillName][i] === externalFactor)
         {
            this.skillExternalFactors[skillName][i].splice(i, 1);
            if (this.skillExternalFactors[skillName][i].length === 0)
            {
               delete(this.skillExternalFactors[skillName]);
            }
            break;
         }
      }
   }
   
   dataStorageService.register(this, 'skillExternalFactors', _buildEFsFromJsonEFs);
}]);

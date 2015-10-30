skillsModule = angular.module('travellerSkills', []); //declare the module for handling skills
      
skillsModule.factory('skills', [function() {
   var skills = function() {
      this.fullList = [
         { name:"Admin",                                                              specialties:[] },
         { name:"Advocate",                                                           specialties:[] },
         { name:"Animals",                                                            specialties:["Animals (Riding)", "Animals (Veterinary)", "Animals (Training)", "Animals (Farming)"] },
         { name:"Animals (Riding)",                       parent:"Animals",           specialties:[] },
         { name:"Animals (Veterinary)",                   parent:"Animals",           specialties:[] },
         { name:"Animals (Training)",                     parent:"Animals",           specialties:[] },
         { name:"Animals (Farming)",                      parent:"Animals",           specialties:[] },
         { name:"Athletics",                                                          specialties:["Athletics (Co-ordination)", "Athletics (Endurance)", "Athletics (Strength)", "Athletics (Flying)"] },
         { name:"Athletics (Co-ordination)",              parent:"Athletics",         specialties:[] },
         { name:"Athletics (Endurance)",                  parent:"Athletics",         specialties:[] },
         { name:"Athletics (Strength)",                   parent:"Athletics",         specialties:[] },
         { name:"Athletics (Flying)",                     parent:"Athletics",         specialties:[] },
         { name:"Art",                                                                specialties:["Art (Acting)", "Art (Dance)", "Art (Holography)", "Art (Instrument)", "Art (Sculpting)", "Art (Writing)"] },
         { name:"Art (Acting)",                           parent:"Art",               specialties:[] },
         { name:"Art (Dance)",                            parent:"Art",               specialties:[] },
         { name:"Art (Holography)",                       parent:"Art",               specialties:[] },
         { name:"Art (Instrument)",                       parent:"Art",               specialties:[] },
         { name:"Art (Sculpting)",                        parent:"Art",               specialties:[] },
         { name:"Art (Writing)",                          parent:"Art",               specialties:[] },
         { name:"Astrogation",                                                        specialties:[] },
         { name:"Battle Dress",                                                       specialties:[] },
         { name:"Broker",                                                             specialties:[] },
         { name:"Carouse",                                                            specialties:[] },
         { name:"Comms",                                                              specialties:[] },
         { name:"Computers",                                                          specialties:[] },
         { name:"Deception",                                                          specialties:[] },
         { name:"Diplomat",                                                           specialties:[] },
         { name:"Drive",                                                              specialties:["Drive (Mole)", "Drive (Tracked)", "Drive (Wheeled)"] },
         { name:"Drive (Mole)",                           parent:"Drive",             specialties:[] },
         { name:"Drive (Tracked)",                        parent:"Drive",             specialties:[] },
         { name:"Drive (Wheeled)",                        parent:"Drive",             specialties:[] },
         { name:"Engineer",                                                           specialties:["Engineer (Manoeuver Drive (M-Drive))", "Engineer (Jump Drive (J-Drive))", "Engineer (Electronics)", "Engineer (Life Support)", "Engineer (Power)"] },
         { name:"Engineer (Manoeuver Drive (M-Drive))",   parent:"Engineer",          specialties:[] },
         { name:"Engineer (Jump Drive (J-Drive))",        parent:"Engineer",          specialties:[] },
         { name:"Engineer (Electronics)",                 parent:"Engineer",          specialties:[] },
         { name:"Engineer (Life Support)",                parent:"Engineer",          specialties:[] },
         { name:"Engineer (Power)",                       parent:"Engineer",          specialties:[] },
         { name:"Explosives",                                                         specialties:[] },
         { name:"Flyer",                                                              specialties:["Flyer (Grav)", "Flyer (Rotor)", "Flyer (Wing)"] },
         { name:"Flyer (Grav)",                           parent:"Flyer",             specialties:[] },
         { name:"Flyer (Rotor)",                          parent:"Flyer",             specialties:[] },
         { name:"Flyer (Wing)",                           parent:"Flyer",             specialties:[] },
         { name:"Gambler",                                                            specialties:[] },
         { name:"Gunner",                                                             specialties:["Gunner (Turrets)", "Gunner (Ortillery)", "Gunner (Screens)", "Gunner (Capital Weapons)"] },
         { name:"Gunner (Turrets)",                       parent:"Gunner",            specialties:[] },
         { name:"Gunner (Ortillery)",                     parent:"Gunner",            specialties:[] },
         { name:"Gunner (Screens)",                       parent:"Gunner",            specialties:[] },
         { name:"Gunner (Capital Weapons)",               parent:"Gunner",            specialties:[] },
         { name:"Gun Combat",                                                         specialties:["Gun Combat (Slug Rifle)", "Gun Combat (Slug Pistol)", "Gun Combat (Shotgun)", "Gun Combat (Energy Rifle)", "Gun Combat (Energy Pistol)"] },
         { name:"Gun Combat (Slug Rifle)",                parent:"Gun Combat",        specialties:[] },
         { name:"Gun Combat (Slug Pistol)",               parent:"Gun Combat",        specialties:[] },
         { name:"Gun Combat (Shotgun)",                   parent:"Gun Combat",        specialties:[] },
         { name:"Gun Combat (Energy Rifle)",              parent:"Gun Combat",        specialties:[] },
         { name:"Gun Combat (Energy Pistol)",             parent:"Gun Combat",        specialties:[] },
         { name:"Heavy Weapons",                                                      specialties:["Heavy Weapons (Launchers)", "Heavy Weapons (Man Portable Artillery)", "Heavy Weapons (Field Artillery)"] },
         { name:"Heavy Weapons (Launchers)",              parent:"Heavy Weapons",     specialties:[] },
         { name:"Heavy Weapons (Man Portable Artillery)", parent:"Heavy Weapons",     specialties:[] },
         { name:"Heavy Weapons (Field Artillery)",        parent:"Heavy Weapons",     specialties:[] },
         { name:"Investigate",                                                        specialties:[] },
         { name:"Jack of all Trades",                                                 specialties:[] },
         { name:"Language",                                                           specialties:["Language (Anglic)", "Language (Vilani)", "Language (Zdetl)", "Language (Oynprith)"] },
         { name:"Language (Anglic)",                      parent:"Language",          specialties:[] },
         { name:"Language (Vilani)",                      parent:"Language",          specialties:[] },
         { name:"Language (Zdetl)",                       parent:"Language",          specialties:[] },
         { name:"Language (Oynprith)",                    parent:"Language",          specialties:[] },
         { name:"Leadership",                                                         specialties:[] },
         { name:"Life Sciences",                                                      specialties:["Life Sciences (Biology)", "Life Sciences (Cybernetics)", "Life Sciences (Genetics)", "Life Sciences (Psionicology)"] },
         { name:"Life Sciences (Biology)",                parent:"Life Sciences",     specialties:[] },
         { name:"Life Sciences (Cybernetics)",            parent:"Life Sciences",     specialties:[] },
         { name:"Life Sciences (Genetics)",               parent:"Life Sciences",     specialties:[] },
         { name:"Life Sciences (Psionicology)",           parent:"Life Sciences",     specialties:[] },
         { name:"Mechanic",                                                           specialties:[] },
         { name:"Medic",                                                              specialties:[] },
         { name:"Melee",                                                              specialties:["Melee (Unarmed Combat)", "Melee (Blade)", "Melee (Bludgeon)", "Melee (Natural Weapons)"] },
         { name:"Melee (Unarmed Combat)",                 parent:"Melee",             specialties:[] },
         { name:"Melee (Blade)",                          parent:"Melee",             specialties:[] },
         { name:"Melee (Bludgeon)",                       parent:"Melee",             specialties:[] },
         { name:"Melee (Natural Weapons)",                parent:"Melee",             specialties:[] },
         { name:"Navigation",                                                         specialties:[] },
         { name:"Persuade",                                                           specialties:[] },
         { name:"Pilot",                                                              specialties:["Pilot (Small Craft)", "Pilot (Spacecraft)", "Pilot (Capital Ships)"] },
         { name:"Pilot (Small Craft)",                    parent:"Pilot",             specialties:[] },
         { name:"Pilot (Spacecraft)",                     parent:"Pilot",             specialties:[] },
         { name:"Pilot (Capital Ships)",                  parent:"Pilot",             specialties:[] },
         { name:"Physical Sciences",                                                  specialties:["Physical Sciences (Physics)", "Physical Sciences (Chemistry)", "Physical Sciences (Electronics)"] },
         { name:"Physical Sciences (Physics)",            parent:"Physical Sciences", specialties:[] },
         { name:"Physical Sciences (Chemistry)",          parent:"Physical Sciences", specialties:[] },
         { name:"Physical Sciences (Electronics)",        parent:"Physical Sciences", specialties:[] },
         { name:"Recon",                                                              specialties:[] },
         { name:"Remote Operations",                                                  specialties:[] },
         { name:"Seafarer",                                                           specialties:["Seafarer (Sail)", "Seafarer (Submarine)", "Seafarer (Ocean Ships)", "Seafarer (Motorboats)"] },
         { name:"Seafarer (Sail)",                        parent:"Seafarer",          specialties:[] },
         { name:"Seafarer (Submarine)",                   parent:"Seafarer",          specialties:[] },
         { name:"Seafarer (Ocean Ships)",                 parent:"Seafarer",          specialties:[] },
         { name:"Seafarer (Motorboats)",                  parent:"Seafarer",          specialties:[] },
         { name:"Sensors",                                                            specialties:[] },
         { name:"Social Sciences",                                                    specialties:["Social Sciences (Archeology)", "Social Sciences (Economics)", "Social Sciences (History)", "Social Sciences (Linguistics)", "Social Sciences (Philosophy)", "Social Sciences (Psychology)", "Social Sciences (Sophontology)"] },
         { name:"Social Sciences (Archeology)",           parent:"Social Sciences",   specialties:[] },
         { name:"Social Sciences (Economics)",            parent:"Social Sciences",   specialties:[] },
         { name:"Social Sciences (History)",              parent:"Social Sciences",   specialties:[] },
         { name:"Social Sciences (Linguistics)",          parent:"Social Sciences",   specialties:[] },
         { name:"Social Sciences (Philosophy)",           parent:"Social Sciences",   specialties:[] },
         { name:"Social Sciences (Psychology)",           parent:"Social Sciences",   specialties:[] },
         { name:"Social Sciences (Sophontology)",         parent:"Social Sciences",   specialties:[] },
         { name:"Space Sciences",                                                     specialties:["Space Sciences (Planetology)", "Space Sciences (Robotics)", "Space Sciences (Xenology)"] },
         { name:"Space Sciences (Planetology)",           parent:"Space Sciences",    specialties:[] },
         { name:"Space Sciences (Robotics)",              parent:"Space Sciences",    specialties:[] },
         { name:"Space Sciences (Xenology)",              parent:"Space Sciences",    specialties:[] },
         { name:"Stealth",                                                            specialties:[] },
         { name:"Steward",                                                            specialties:[] },
         { name:"Streetwise",                                                         specialties:[] },
         { name:"Survival",                                                           specialties:[] },
         { name:"Tactics",                                                            specialties:["Tactics (Military Tactics)", "Tactics (Naval Tactics)"] },
         { name:"Tactics (Military Tactics)",             parent:"Tactics",           specialties:[] },
         { name:"Tactics (Naval Tactics)",                parent:"Tactics",           specialties:[] },
         { name:"Trade",                                                              specialties:[] },
         { name:"Vacc Suit",                                                          specialties:[] },
         { name:"Zero-G",                                                             specialties:[] }
      ];
      
      this.skillLookup = {};
      for (var i = 0, len = this.fullList.length; i < len; i++)
      {
         this.skillLookup[this.fullList[i].name] = this.fullList[i];
      };
   };
   
   skills.prototype.displaySkill = function(name)
   {
      var skill = this.skillLookup[name];
      if (   !skill.parent
          || this.skillLookup[skill.parent].hasOwnProperty("value"))
      {
         return true;
      }
      return false;
   }

   skills.prototype.toggleEnabled = function(name)
   {
      var skill = this.skillLookup[name];
      if (!skill.parent)
      {
         if (skill.hasOwnProperty("value"))
         {
            if (skill.value === 0)
            {
               delete skill.value;
               for (var i = 0, len = skill.specialties.length; i < len; i++)
               {
                  delete this.skillLookup[skill.specialties[i]].value;
               }
            }
         }
         else
         {
            skill.value = 0;
            for (var i = 0, len = skill.specialties.length; i < len; i++)
            {
               this.skillLookup[skill.specialties[i]].value = 0;
            }
         }
      }
   }

   return skills;
}]);

charModule = angular.module('travellerCharacters', []); //declare the module for handling chracters
      
charModule.controller('charactersController', ['charactersService', function(charactersService) {
   this.char1 = charactersService.firstCharacter;
   this.skills = [
      { name:"Admin",              specialties:[]                                                                                                },
      { name:"Advocate",           specialties:[]                                                                                                },
      { name:"Animals",            specialties:["Riding", "Veterinary", "Training", "Farming"]                                                   },
      { name:"Athletics",          specialties:["Co-ordination", "Endurance", "Strength", "Flying"]                                              },
      { name:"Art",                specialties:["Acting", "Dance", "Holography", "Instrument", "Sculpting", "Writing"]                           },
      { name:"Astrogation",        specialties:[]                                                                                                },
      { name:"Battle Dress",       specialties:[]                                                                                                },
      { name:"Broker",             specialties:[]                                                                                                },
      { name:"Carouse",            specialties:[]                                                                                                },
      { name:"Comms",              specialties:[]                                                                                                },
      { name:"Computers",          specialties:[]                                                                                                },
      { name:"Deception",          specialties:[]                                                                                                },
      { name:"Diplomat",           specialties:[]                                                                                                },
      { name:"Drive",              specialties:["Mole", "Tracked", "Wheeled"]                                                                    },
      { name:"Engineer",           specialties:["Manoeuver Drive (M-Drive)", "Jump Drive (J-Drive)", "Electronics", "Life Support", "Power"]     },
      { name:"Explosives",         specialties:[]                                                                                                },
      { name:"Flyer",              specialties:["Grav", "Rotor", "Wing"]                                                                         },
      { name:"Gambler",            specialties:[]                                                                                                },
      { name:"Gunner",             specialties:["Turrets", "Ortillery", "Screens", "Capital Weapons"]                                            },
      { name:"Gun Combat",         specialties:["Slug Rifle", "Slug Pistol", "Shotgun", "Energy Rifle", "Energy Pistol"]                         },
      { name:"Heavy Weapons",      specialties:["Launchers", "Man Portable Artillery", "Field Artillery"]                                        },
      { name:"Investigate",        specialties:[]                                                                                                },
      { name:"Jack of all Trades", specialties:[]                                                                                                },
      { name:"Language",           specialties:["Anglic", "Vilani", "Zdetl", "Oynprith"]                                                         },
      { name:"Leadership",         specialties:[]                                                                                                },
      { name:"Life Sciences",      specialties:["Biology", "Cybernetics", "Genetics", "Psionicology"]                                            },
      { name:"Mechanic",           specialties:[]                                                                                                },
      { name:"Medic",              specialties:[]                                                                                                },
      { name:"Melee",              specialties:["Unarmed Combat", "Blade", "Bludgeon", "Natural Weapons"]                                        },
      { name:"Navigation",         specialties:[]                                                                                                },
      { name:"Persuade",           specialties:[]                                                                                                },
      { name:"Pilot",              specialties:["Small Craft", "Spacecraft", "Capital Ships"]                                                    },
      { name:"Physical Sciences",  specialties:["Physics", "Chemistry", "Electronics"]                                                           },
      { name:"Recon",              specialties:[]                                                                                                },
      { name:"Remote Operations",  specialties:[]                                                                                                },
      { name:"Seafarer",           specialties:["Sail", "Submarine", "Ocean Ships", "Motorboats"]                                                },
      { name:"Sensors",            specialties:[]                                                                                                },
      { name:"Social Sciences",    specialties:["Archeology", "Economics", "History", "Linguistics", "Philosophy", "Psychology", "Sophontology"] },
      { name:"Space Sciences",     specialties:["Planetology", "Robotics", "Xenology"]                                                           },
      { name:"Stealth",            specialties:[]                                                                                                },
      { name:"Steward",            specialties:[]                                                                                                },
      { name:"Streetwise",         specialties:[]                                                                                                },
      { name:"Survival",           specialties:[]                                                                                                },
      { name:"Tactics",            specialties:["Military Tactics", "Naval Tactics"]                                                             },
      { name:"Trade",              specialties:[]                                                                                                },
      { name:"Vacc Suit",          specialties:[]                                                                                                },
      { name:"Zero-G",             specialties:[]                                                                                                }
   ];
}]);

charModule.factory('Character', [function() {
   var Character = function() {};
   return Character;
}]);

charModule.service('charactersService', ['Character', function(Character) {
   this.firstCharacter = new Character();
}]);

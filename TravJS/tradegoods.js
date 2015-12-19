var goods = [
   [
      {
         //11
         "type": "Basic Electronics",
         "available": ["All"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [6000, 14000],
         "purchaseDM": { "In": 2, "Ht": 3, "Ri": 1 },
         "saleDM": { "Ni": 2, "Lt": 1, "Po": 1 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods":
         [
            {
               "definedTradeGood": "Calculators/Adding Machines",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 6000
            },
            {
               "definedTradeGood": "Video Game and Entertainment Systems",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 8000
            },
            {
               "definedTradeGood": "Personal and Commercial Computers",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Banking Machines and Security Systems",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 12000
            },
            {
               "definedTradeGood": "Microprocessor Assemblies",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 14000
            }
         ]
      },
      {
         //12
         "type": "Basic Machine Parts",
         "available": ["All"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [8000, 12000],
         "purchaseDM": { "Na": 2, "In": 5 },
         "saleDM": { "Ni": 3, "Ag": 2 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Stamped/Poured Cogs and Sprockets",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 8000
            },
            {
               "definedTradeGood": "Piping and Attachment Pieces",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 9000
            },
            {
               "definedTradeGood": "Engine Components",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Pneumatics and Hydraulics",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 11000
            },
            {
               "definedTradeGood": "Starship-Quality Components",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 12000
            }
         ]
      },
      {
         //13
         "type": "Basic Manufactured Goods",
         "available": ["All"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [8000, 12000],
         "purchaseDM": { "Na": 2, "In": 5 },
         "saleDM": { "Ni": 3, "Hi": 2 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Second Stage Components",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 8000
            },
            {
               "definedTradeGood": "Uniforms/Clothing Products",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 9000
            },
            {
               "definedTradeGood": "Residential Appliances",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Furniture/Storage Systems/Tools",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 11000
            },
            {
               "definedTradeGood": "Vehicle/Survival Accessories",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 12000
            }
         ]
      },
      {
         //14
         "type": "Basic Raw Materials",
         "available": ["All"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [1000, 9000],
         "purchaseDM": { "Ag": 3, "Ga": 2 },
         "saleDM": { "In": 2, "Po": 2 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Foundation Stones and Base Elements",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Workable Metals",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 3000
            },
            {
               "definedTradeGood": "Workable Alloys",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Fabricated Plastics",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 7000
            },
            {
               "definedTradeGood": "Chemical Solutions or Compounds",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 9000
            }
         ]
      },
      {
         //15
         "type": "Basic Consumables",
         "available": ["All"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [500, 5000],
         "purchaseDM": { "Ag": 3, "Wa": 2, "Ga": 1, "As": 4 },
         "saleDM": { "As": 1, "Fl": 1, "Ic": 1, "Hi": 1 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Feed-grade Vegetation",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 500
            },
            {
               "definedTradeGood": "Food-grade Vegetation",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Pre-packaged Food and Drink",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 2000
            },
            {
               "definedTradeGood": "Survival Rations and Storage-packed Liquids",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 3000
            },
            {
               "definedTradeGood": "Junk food/Soda/Beer",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 5000
            }
         ]
      },
      {
         //16
         "type": "Basic Ore",
         "available": ["All"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [250, 2000],
         "purchaseDM": { "As": 4 },
         "saleDM": { "In": 3, "Ni": 1 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Bornite or Galena or Sedimentary Stone",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 250
            },
            {
               "definedTradeGood": "Chalcocite or Talc",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 500
            },
            {
               "definedTradeGood": "Bauxite, Coltan and Wolframite",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Acanthite, Cobalitite or Magnetite",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 1500
            },
            {
               "definedTradeGood": "Chromite or Cinnabar",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 2000
            }
         ]
      }
   ],
   [
      {
         //21
         "type": "Advanced Electronics",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [25000, 150000],
         "purchaseDM": { "In": 2, "Ht": 3 },
         "saleDM": { "Ni": 1, "Ri": 2, "As": 3 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Circuitry Bundles",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Fibre-optic Components",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "VR Computer and Sensor Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Weapon Components",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 125000
            },
            {
               "definedTradeGood": "Starship Bridge Components",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 150000
            }
         ]
      },
      {
         //22
         "type": "Advanced Machine Parts",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [25000, 100000],
         "purchaseDM": { "In": 2, "Ht": 1 },
         "saleDM": { "As": 2, "Ni": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Alloy and Plastic Tool Kits",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Starship Deckplate/Atmospheric Filters",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Fusion Conduits/Power Plant Shells",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 75000
            },
            {
               "definedTradeGood": "Weapon Cores/Starship Hull",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 90000
            },
            {
               "definedTradeGood": "Gravitic Gyros, Navigation Magnetics",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 100000
            }
         ]
      },
      {
         //23
         "type": "Advanced Manufactured Goods",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [25000, 100000],
         "purchaseDM": { "In": 1 },
         "saleDM": { "Hi": 1, "Ri": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "High-Pressure or Temperature-Resistant Components",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Protective or Specialized Clothing",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Survival Equipment/Colonization Kits",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Computerized Job-related Gear",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 125000
            },
            {
               "definedTradeGood": "Starship Add-Ons/Powered Armour Components",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 150000
            }
         ]
      },
      {
         //24
         "type": "Advanced Weapons",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [50000, 250000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "Po": 1, "Az": 2, "Rz": 4 },
         "maxRisk": 3,
         "dangerousGoodsDM": 0,
         "definedTradeGoods": [
            {
               "definedTradeGood": "(TL7 or less) Slug Weapons",
               "tons": function() { return rawroll(1, 6).total * 7 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "(TL10 or less) Slug Weapons",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "(TL12 or less) Slug or Energy Weapons/Heavy Slug Weapons",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 150000
            },
            {
               "definedTradeGood": "(TL15 or less) Slug or Energy Weapons/Explosives",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 200000
            },
            {
               "definedTradeGood": "Artillery, Heavy Energy Weapons",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            }
         ]
      },
      {
         //25
         "type": "Advanced Vehicles",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [100000, 250000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "As": 2, "Ri": 2 },
         "maxRisk": 3,
         "dangerousGoodsDM": 0,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Engine Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Seafaring or Mole Vehicle Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 140000
            },
            {
               "definedTradeGood": "Air Raft Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 180000
            },
            {
               "definedTradeGood": "Grav-Vehicle Components",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 200000
            },
            {
               "definedTradeGood": "Spacecraft Components",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            }
         ]
      },
      {
         //26
         "type": "Biochemicals",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [10000, 80000],
         "purchaseDM": { "Ag": 1, "Wa": 2 },
         "saleDM": { "In": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Organic Glues, Acids or Bases/Vegetable Oil",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Ethanol/Fructose Syrup",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Biodiesel/Cooking Compounds",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Oxygenated Cleaner/Biodegradable Concentrates",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 60000
            },
            {
               "definedTradeGood": "Gelid Oxygen-Substitutes/Bio-fusion Cell Fuel",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 80000
            }
         ]
      }
   ],
   [
      {
         //31
         "type": "Crystals and Gems",
         "available": ["As", "De", "Ic"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [5000, 45000],
         "purchaseDM": { "As": 2, "De": 1, "Ic": 1 },
         "saleDM": { "In": 3, "Ri": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": -1,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Rock Salt/Compressed Coal",
               "tons": function() { return rawroll(1, 6).total * 7 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Graphite/Quartz",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Silica/Focuser-Quality Gems",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 20000
            },
            {
               "definedTradeGood": "Photonics/Synthetic Gems",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 30000
            },
            {
               "definedTradeGood": "Industrial Diamond/Jewellery-Quality Gems",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 45000
            }
         ]
      },
      {
         //32
         "type": "Cybernetics",
         "available": ["Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [100000, 500000],
         "purchaseDM": {},
         "saleDM": { "As": 1, "Ic": 1, "Ri": 2 },
         "maxRisk": 3,
         "dangerousGoodsDM": 1,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Cybernetic Lubricants",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Cybernetic Components/Physical Augments",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 200000
            },
            {
               "definedTradeGood": "Cyber-Prosthetics",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            },
            {
               "definedTradeGood": "Cosmetic Prosthetics",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 350000
            },
            {
               "definedTradeGood": "Real-Life Replacements and Augments",
               "tons": function() { return 1 },
               "basePrice": 500000
            }
         ]
      },
      {
         //33
         "type": "Live Animals",
         "available": ["Ag", "Ga"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [2500, 15000],
         "purchaseDM": { "Ag": 2 },
         "saleDM": { "Lo": 3 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Beasts of Burden",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 2500
            },
            {
               "definedTradeGood": "Untrained Riding Animals",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Trained Riding Animals/Common Pets",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Untrained Guard Animals",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 12500
            },
            {
               "definedTradeGood": "Trained Guard Animals/Exotic Pets",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 15000
            }
         ]
      },
      {
         //34
         "type": "Luxury Consumables",
         "available": ["Ag", "Ga", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [5000, 50000],
         "purchaseDM": { "Ag": 2, "Wa": 1 },
         "saleDM": { "Ri": 2, "Hi": 2 },
         "maxRisk": 3,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Common Desserts/Rare Food Additives",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Common Desserts/Common Wine",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Rare Foods/Common Liquor",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 20000
            },
            {
               "definedTradeGood": "Exotic Foods/Rare Desserts/Rare Liquor",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 30000
            },
            {
               "definedTradeGood": "Exotic Desserts/Exotic Liquor",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 50000
            }
         ]
      },
      {
         //35
         "type": "Luxury Goods",
         "available": ["Hi"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [50000, 500000],
         "purchaseDM": {},
         "saleDM": { "Ri": 4 },
         "maxRisk": 3,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Rare Literature/Art",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Jewellery/Alien Textiles",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Rare Clothing/Home Decorations",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 200000
            },
            {
               "definedTradeGood": "VR Electronic Entertainment Devices",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            },
            {
               "definedTradeGood": "Exotic Furnishings/Exquisite Jewellery",
               "tons": function() { return 1 },
               "basePrice": 500000
            }
         ]
      },
      {
         //36
         "type": "Medical Supplies",
         "available": ["Ht", "Hi"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [10000, 100000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "In": 2, "Po": 1, "Ri": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Medical Uniforms/Disposable Tools",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Cosmetic Chemicals/Practicioner's Tools",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 30000
            },
            {
               "definedTradeGood": "General Medical Equipment or Supplies",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Specialist Equipment or Supplies",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 75000
            },
            {
               "definedTradeGood": "Micro-surgical Equipment or Supplies",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 100000
            }
         ]
      }
   ],
   [
      {
         //41
         "type": "Petrochemicals",
         "available": ["De", "Fl", "Ic", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [2500, 30000],
         "purchaseDM": { "De": 2 },
         "saleDM": { "In": 2, "Ag": 1, "Lt": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Crude Oil/Diesel",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Refined Kerosene/Purified Oil",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Gasoline/Machine Lubricants",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Jet Fuel/Gelid Adhesives",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 20000
            },
            {
               "definedTradeGood": "Rocket Fuel/Power Plant Starter Charges",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 30000
            }
         ]
      },
      {
         //42
         "type": "Pharmaceuticals",
         "available": ["As", "De", "Hi", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [25000, 500000],
         "purchaseDM": { "As": 2, "Hi": 1 },
         "saleDM": { "Ri": 2, "Lt": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": 3,
         "definedTradeGoods": [
            {
               "definedTradeGood": "OTC Drugs/Antibiotics",
               "tons": function() { return rawroll(1, 6).total + 3 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Antivenin/Prescription Medications",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Prescription Medications/Surgical",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Anagathics",
               "tons": function() { return 2 },
               "basePrice": 200000
            },
            {
               "definedTradeGood": "Psi-Related Drugs/Viral Therapy Doses",
               "tons": function() { return 1 },
               "basePrice": 500000
            }
         ]
      },
      {
         //43
         "type": "Polymers",
         "available": ["In"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [1000, 10000],
         "purchaseDM": {},
         "saleDM": { "Ri": 2, "Ni": 1 },
         "maxRisk": 1,
         "dangerousGoodsDM": 0,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Rubber/Vinyl Spooling",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Insulation/Polyurethane Foam",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 3000
            },
            {
               "definedTradeGood": "Poured Plastics/Synthetic Fibre Spools",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 7000
            },
            {
               "definedTradeGood": "Kevlar/Teflon",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 9000
            },
            {
               "definedTradeGood": "Advanced Ballistic Weave",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 10000
            }
         ]
      },
      {
         //44
         "type": "Precious Metals",
         "available": ["As", "De", "Ic", "Fl"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [10000, 100000],
         "purchaseDM": { "As": 3, "De": 1, "Ic": 2 },
         "saleDM": { "Ri": 2, "In": 2, "Ht": 1 },
         "maxRisk": 3,
         "dangerousGoodsDM": 4,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Bismuth/Indium",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Beryllium/Silver",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Ruthenium/Rhenium",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Gold/Osmium/Iridium",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 75000
            },
            {
               "definedTradeGood": "Platinum/Rhodium",
               "tons": function() { return 1 },
               "basePrice": 100000
            }
         ]
      },
      {
         //45
         "type": "Radioactives",
         "available": ["As", "De", "Lo"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [500000, 1500000],
         "purchaseDM": { "As": 2, "Lo": 2 },
         "saleDM": { "In": 3, "Ht": 1, "Ni": -2, "Ag": -3 },
         "maxRisk": 4,
         "dangerousGoodsDM": 3,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Nuclear Waste/Deactivated Materials",
               "tons": function() { return rawroll(1, 6).total + 3 },
               "basePrice": 500000
            },
            {
               "definedTradeGood": "Industrial Isotopes",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 750000
            },
            {
               "definedTradeGood": "Medical Isotopes/Reactor-Grade Uranium",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 1000000
            },
            {
               "definedTradeGood": "Weapons-Grade Plutonium/Fusion Cell Rods",
               "tons": function() { return 1 },
               "basePrice": 1250000
            },
            {
               "definedTradeGood": "Superwapon-grade Isotopes",
               "tons": function() { return 1 },
               "basePrice": 1500000
            }
         ]
      },
      {
         //46
         "type": "Robots",
         "available": ["In"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [150000, 650000],
         "purchaseDM": {},
         "saleDM": { "Ag": 2, "Ht": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": 1,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Automated Robotics/Cargo Drones",
               "tons": function() { return rawroll(1, 6).total * 7 },
               "basePrice": 150000
            },
            {
               "definedTradeGood": "Industrial or Personal Drones",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 300000
            },
            {
               "definedTradeGood": "Combat or Guardian Drones",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 400000
            },
            {
               "definedTradeGood": "Scout and Sensor Drones",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 500000
            },
            {
               "definedTradeGood": "Advanced Robotics",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 650000
            }
         ]
      }
   ],
   [
      {
         //51
         "type": "Spices",
         "available": ["Ga", "De", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [1000, 12000],
         "purchaseDM": { "De": 2 },
         "saleDM": { "Hi": 2, "Ri": 3, "Po": 3 },
         "maxRisk": 2,
         "dangerousGoodsDM": -1,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Table Salt/Black Pepper",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Adobo/Basil/Sage",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 3000
            },
            {
               "definedTradeGood": "Aniseed/Curry/Fennel/White Pepper",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 6000
            },
            {
               "definedTradeGood": "Cinnamon/Marjoram/Wasabi",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 9000
            },
            {
               "definedTradeGood": "Black Salt/Saffron/Alien Flavourings",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 12000
            }
         ]
      },
      {
         //52
         "type": "Textiles",
         "available": ["Ag", "Ni"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [1000, 5000],
         "purchaseDM": { "Ag": 7 },
         "saleDM": { "Hi": 3, "Na": 2 },
         "maxRisk": 1,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Yarn/Wool/Canvas",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Animal-based Fabrics",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 2000
            },
            {
               "definedTradeGood": "Cotton or Flax-based Fabrics",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 3000
            },
            {
               "definedTradeGood": "Synthetic Silks/Finished Common Clothing",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 4000
            },
            {
               "definedTradeGood": "Organic Silk/Satin/Finished Fine Clothing",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 5000
            }
         ]
      },
      {
         //53
         "type": "Uncommon Ore",
         "available": ["As", "Ic"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [1000, 10000],
         "purchaseDM": { "As": 4 },
         "saleDM": { "In": 3, "Ni": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Lead/Zinc",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Copper/Tin",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 2500
            },
            {
               "definedTradeGood": "Nickel/Sodium/Tungsten",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Gold/Silver/Ilmenite",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 7500
            },
            {
               "definedTradeGood": "Platinum/Uranium",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 10000
            }
         ]
      },
      {
         //54
         "type": "Uncommon Raw Materials",
         "available": ["Ag", "De", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [5000, 50000],
         "purchaseDM": { "Ag": 2, "Wa": 1 },
         "saleDM": { "In": 2, "Ht": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Aluminium/Brass/Calcium",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Carbonate/Magnesium/Meteoric Iron",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Marble/Potassium/Titanium",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 20000
            },
            {
               "definedTradeGood": "Stellite/Tombac",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 35000
            },
            {
               "definedTradeGood": "Depleted Uranium/Ceramic-Alloy",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 50000
            }
         ]
      },
      {
         //55
         "type": "Wood",
         "available": ["Ag", "Ga"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [100, 4000],
         "purchaseDM": { "Ag": 6 },
         "saleDM": { "Ri": 2, "In": 1 },
         "maxRisk": 1,
         "dangerousGoodsDM": -4,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Low-grade Rough Cuts/Construction Scrap",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 100
            },
            {
               "definedTradeGood": "High-Grade Rough-Cut",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 500
            },
            {
               "definedTradeGood": "Construction-grade Timber",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "definedTradeGood": "Furniture-grade Timber/Rare Grades",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 2000
            },
            {
               "definedTradeGood": "Exotics (Pernambuco, White Mahogany, etc.)",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 4000
            }
         ]
      },
      {
         //56
         "type": "Vehicles",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 10,
         "priceRange": [5000, 30000],
         "purchaseDM": { "In": 2, "Ht": 1 },
         "saleDM": { "Ni": 2, "Hi": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Wheeled Repair Components",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 5000
            },
            {
               "definedTradeGood": "Tracked Repair Components",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Wheeled Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 15000
            },
            {
               "definedTradeGood": "Wheeled Vehicles/Tracked Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 20000
            },
            {
               "definedTradeGood": "Tracked Vehicles",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 30000
            }
         ]
      }
   ],
   [
      {
         //61
         "type": "Illegal Biochemicals",
         "available": ["Ag", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [10000, 200000],
         "purchaseDM": { "Wa": 2 },
         "saleDM": { "In": 6 },
         "maxRisk": 4,
         "dangerousGoodsDM": 4,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Herbal Stimulants/Ultra-Caffeine",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Raw Growth Hormones",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Chemical Solvents/Protein Duplexer Steroids",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Bio-Acid/Pheromone Extracts",
               "tons": function() { return 2 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Genetic Mutagens/Organic Toxins",
               "tons": function() { return 1 },
               "basePrice": 200000
            }
         ]
      },
      {
         //62
         "type": "Illegal Cybernetics",
         "available": ["Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [100000, 650000],
         "purchaseDM": {},
         "saleDM": { "As": 4, "Ic": 4, "Ri": 8, "Az": 6, "Rz": 6 },
         "maxRisk": 5,
         "dangerousGoodsDM": 5,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Unlicensed Augment Tools and Parts",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Physical Enhancement Tissues",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 150000
            },
            {
               "definedTradeGood": "Unlicensed Augmentatives/Combat Implant Additives",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            },
            {
               "definedTradeGood": "Combat Prosthetics/Surgical Duplications",
               "tons": function() { return 2 },
               "basePrice": 400000
            },
            {
               "definedTradeGood": "Mimicry Augmetics",
               "tons": function() { return 1 },
               "basePrice": 650000
            }
         ]
      },
      {
         //63
         "type": "Illegal Drugs",
         "available": ["As", "De", "Hi", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [25000, 300000],
         "purchaseDM": {},
         "saleDM": { "Ri": 6, "Hi": 6 },
         "maxRisk": 4,
         "dangerousGoodsDM": 6,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Herbal Stimulants/Biological Hallucinogens",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Chemical Depressants/Natural Narcotics",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Chemical Stimulants and Hallucinogens",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Designer Narcotics",
               "tons": function() { return 2 },
               "basePrice": 200000
            },
            {
               "definedTradeGood": "Alien Synthetics/Psi-Drugs",
               "tons": function() { return 1 },
               "basePrice": 300000
            }
         ]
      },
      {
         //64
         "type": "Illegal Luxuries",
         "available": ["Ag", "Ga", "Wa"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 1,
         "priceRange": [10000, 200000],
         "purchaseDM": { "Ag": 2, "Wa": 1 },
         "saleDM": { "Ri": 6, "Hi": 4 },
         "maxRisk": 4,
         "dangerousGoodsDM": 4,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Anti-Governmental Propaganda/Endangered Animal Products",
               "tons": function() { return 1 },
               "basePrice": 10000
            },
            {
               "definedTradeGood": "Black-data Recordings/Slaving Gear",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 25000
            },
            {
               "definedTradeGood": "Extinct Animal Products",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "BTL Devices/Cloning Equipment",
               "tons": function() { return 2 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Forbidden Pleasures",
               "tons": function() { return 1 },
               "basePrice": 200000
            }
         ]
      },
      {
         //65
         "type": "Illegal Weapons",
         "available": ["In", "Ht"],
         "maxTonsDie": "1d6",
         "maxTonsMult": 5,
         "priceRange": [50000, 450000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "Po": 6, "Az": 8, "Rz": 10 },
         "maxRisk": 5,
         "dangerousGoodsDM": 6,
         "definedTradeGoods": [
            {
               "definedTradeGood": "Chain-drive Weaponry/Armour-Piercing Ammunition",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 50000
            },
            {
               "definedTradeGood": "Protected Technologies/Explosive or Incendiary Ammunition",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "definedTradeGood": "Synthetic Poisons/Personal-scale Mass Trauma Explosives",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 150000
            },
            {
               "definedTradeGood": "Arclight Weaponry/Biological or Chemical Weaponry/Naval Starship Weaponry",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 300000
            },
            {
               "definedTradeGood": "Disintegrators/Psi-Weaponry/Weapons of Mass Destruction",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 450000
            }
         ]
      }
   ]
];
goods.commonGoodsStart = 0;
goods.commonGoodsEnd = 0;
goods.legalGoodsStart = 1;
goods.legalGoodsEnd = 4;
goods.illegalGoodsStart = 5;
goods.illegalGoodsEnd = 5;

function findAllCommonGoods(goodsArray) {
   for (var i = goods.commonGoodsStart; i <= goods.commonGoodsEnd; i++) {
      for (var j = 0; j < goods[i].length; j++) {
         goodsArray.push(goods[i][j]);
      }
   }
};

function findAllAvailableLegalGoods(goodsArray, availableOn) {
   for (var i = goods.legalGoodsStart; i <= goods.legalGoodsEnd; i++) {
      for (var j = 0; j < goods[i].length; j++) {
         if (goods[i][j].available.indexOf(availableOn) >= 0) {
            goodsArray.push(goods[i][j]);
         }
      }
   }
};

function findAllAvailableIllegalGoods(goodsArray, availableOn) {
   for (var i = goods.illegalGoodsStart; i <= goods.illegalGoodsEnd; i++) {
      for (var j = 0; j < goods[i].length; j++) {
         if (goods[i][j].available.indexOf(availableOn) >= 0) {
            goodsArray.push(goods[i][j]);
         }
      }
   }
};

function findRandomGood(goodsArray, validClasses) {
   //TODO: Handle exotic goods properly
   var d66;
   do {
      d66 = rolld66();
   } while (d66.total === 66)

   var tens = d66.rolls[0] - 1;
   var ones = d66.rolls[1] - 1;

   if (   (tens >= goods.commonGoodsStart && tens <= goods.commonGoodsEnd && validClasses.indexOf("common") >= 0)
       || (tens >= goods.legalGoodsStart && tens <= goods.legalGoodsEnd && validClasses.indexOf("legal") >= 0)
       || (tens >= goods.illegalGoodsStart && tens <= goods.illegalGoodsEnd && validClasses.indexOf("illegal") >= 0)) {
      goodsArray.push(goods[tens][ones]);
   }
}

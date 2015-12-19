var goods = [
   [
      {
         //11
         "type": "Basic Electronics",
         "available": ["All"],
         "maxTons": function() { return rawroll(1, 6).total * 10 },
         "priceRange": [6000, 14000],
         "purchaseDM": { "In": 2, "Ht": 3, "Ri": 1 },
         "saleDM": { "Ni": 2, "Lt": 1, "Po": 1 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods":
         [
            {
               "name": "Calculators/Adding Machines",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 6000
            },
            {
               "name": "Video Game and Entertainment Systems",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 8000
            },
            {
               "name": "Personal and Commercial Computers",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "name": "Banking Machines and Security Systems",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 12000
            },
            {
               "name": "Microprocessor Assemblies",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 14000
            }
         ]
      },
      {
         //12
         "type": "Basic Machine Parts",
         "available": ["All"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [8000, 12000],
         "purchaseDM": { "Na": 2, "In": 5 },
         "saleDM": { "Ni": 3, "Ag": 2 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "name": "Stamped/Poured Cogs and Sprockets",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 8000
            },
            {
               "name": "Piping and Attachment Pieces",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 9000
            },
            {
               "name": "Engine Components",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "name": "Pneumatics and Hydraulics",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 11000
            },
            {
               "name": "Starship-Quality Components",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 12000
            }
         ]
      },
      {
         //13
         "type": "Basic Manufactured Goods",
         "available": ["All"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [8000, 12000],
         "purchaseDM": { "Na": 2, "In": 5 },
         "saleDM": { "Ni": 3, "Hi": 2 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "name": "Second Stage Components",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 8000
            },
            {
               "name": "Uniforms/Clothing Products",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 9000
            },
            {
               "name": "Residential Appliances",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "name": "Furniture/Storage Systems/Tools",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 11000
            },
            {
               "name": "Vehicle/Survival Accessories",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 12000
            }
         ]
      },
      {
         //14
         "type": "Basic Raw Materials",
         "available": ["All"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [1000, 9000],
         "purchaseDM": { "Ag": 3, "Ga": 2 },
         "saleDM": { "In": 2, "Po": 2 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "name": "Foundation Stones and Base Elements",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 1000
            },
            {
               "name": "Workable Metals",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 3000
            },
            {
               "name": "Workable Alloys",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "name": "Fabricated Plastics",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 7000
            },
            {
               "name": "Chemical Solutions or Compounds",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 9000
            }
         ]
      },
      {
         //15
         "type": "Basic Consumables",
         "available": ["All"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [500, 5000],
         "purchaseDM": { "Ag": 3, "Wa": 2, "Ga": 1, "As": 4 },
         "saleDM": { "As": 1, "Fl": 1, "Ic": 1, "Hi": 1 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "name": "Feed-grade Vegetation",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 500
            },
            {
               "name": "Food-grade Vegetation",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "name": "Pre-packaged Food and Drink",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 2000
            },
            {
               "name": "Survival Rations and Storage-packed Liquids",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 3000
            },
            {
               "name": "Junk food/Soda/Beer",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 5000
            }
         ]
      },
      {
         //16
         "type": "Basic Ore",
         "available": ["All"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [250, 2000],
         "purchaseDM": { "As": 4 },
         "saleDM": { "In": 3, "Ni": 1 },
         "maxRisk": 0,
         "dangerousGoodsDM": -6,
         "definedTradeGoods": [
            {
               "name": "Bornite or Galena or Sedimentary Stone",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 250
            },
            {
               "name": "Chalcocite or Talc",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 500
            },
            {
               "name": "Bauxite, Coltan and Wolframite",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "name": "Acanthite, Cobalitite or Magnetite",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 1500
            },
            {
               "name": "Chromite or Cinnabar",
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
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [25000, 150000],
         "purchaseDM": { "In": 2, "Ht": 3 },
         "saleDM": { "Ni": 1, "Ri": 2, "As": 3 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "name": "Circuitry Bundles",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 25000
            },
            {
               "name": "Fibre-optic Components",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "name": "VR Computer and Sensor Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "name": "Weapon Components",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 125000
            },
            {
               "name": "Starship Bridge Components",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 150000
            }
         ]
      },
      {
         //22
         "type": "Advanced Machine Parts",
         "available": ["In", "Ht"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [25000, 100000],
         "purchaseDM": { "In": 2, "Ht": 1 },
         "saleDM": { "As": 2, "Ni": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "name": "Alloy and Plastic Tool Kits",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 25000
            },
            {
               "name": "Starship Deckplate/Atmospheric Filters",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "name": "Fusion Conduits/Power Plant Shells",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 75000
            },
            {
               "name": "Weapon Cores/Starship Hull",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 90000
            },
            {
               "name": "Gravitic Gyros, Navigation Magnetics",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 100000
            }
         ]
      },
      {
         //23
         "type": "Advanced Manufactured Goods",
         "available": ["In", "Ht"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [25000, 100000],
         "purchaseDM": { "In": 1 },
         "saleDM": { "Hi": 1, "Ri": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "name": "High-Pressure or Temperature-Resistant Components",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 25000
            },
            {
               "name": "Protective or Specialized Clothing",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "name": "Survival Equipment/Colonization Kits",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "name": "Computerized Job-related Gear",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 125000
            },
            {
               "name": "Starship Add-Ons/Powered Armour Components",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 150000
            }
         ]
      },
      {
         //24
         "type": "Advanced Weapons",
         "available": ["In", "Ht"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [50000, 250000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "Po": 1, "Az": 2, "Rz": 4 },
         "maxRisk": 3,
         "dangerousGoodsDM": 0,
         "definedTradeGoods": [
            {
               "name": "(TL7 or less) Slug Weapons",
               "tons": function() { return rawroll(1, 6).total * 7 },
               "basePrice": 50000
            },
            {
               "name": "(TL10 or less) Slug Weapons",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 100000
            },
            {
               "name": "(TL12 or less) Slug or Energy Weapons/Heavy Slug Weapons",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 150000
            },
            {
               "name": "(TL15 or less) Slug or Energy Weapons/Explosives",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 200000
            },
            {
               "name": "Artillery, Heavy Energy Weapons",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            }
         ]
      },
      {
         //25
         "type": "Advanced Vehicles",
         "available": ["In", "Ht"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [100000, 250000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "As": 2, "Ri": 2 },
         "maxRisk": 3,
         "dangerousGoodsDM": 0,
         "definedTradeGoods": [
            {
               "name": "Engine Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "name": "Seafaring or Mole Vehicle Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 140000
            },
            {
               "name": "Air Raft Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 180000
            },
            {
               "name": "Grav-Vehicle Components",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 200000
            },
            {
               "name": "Spacecraft Components",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            }
         ]
      },
      {
         //26
         "type": "Biochemicals",
         "available": ["In", "Ht"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [10000, 80000],
         "purchaseDM": { "Ag": 1, "Wa": 2 },
         "saleDM": { "In": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "name": "Organic Glues, Acids or Bases/Vegetable Oil",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "name": "Ethanol/Fructose Syrup",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 25000
            },
            {
               "name": "Biodiesel/Cooking Compounds",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "name": "Oxygenated Cleaner/Biodegradable Concentrates",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 60000
            },
            {
               "name": "Gelid Oxygen-Substitutes/Bio-fusion Cell Fuel",
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
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [5000, 45000],
         "purchaseDM": { "As": 2, "De": 1, "Ic": 1 },
         "saleDM": { "In": 3, "Ri": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": -1,
         "definedTradeGoods": [
            {
               "name": "Rock Salt/Compressed Coal",
               "tons": function() { return rawroll(1, 6).total * 7 },
               "basePrice": 5000
            },
            {
               "name": "Graphite/Quartz",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "name": "Silica/Focuser-Quality Gems",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 20000
            },
            {
               "name": "Photonics/Synthetic Gems",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 30000
            },
            {
               "name": "Industrial Diamond/Jewellery-Quality Gems",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 45000
            }
         ]
      },
      {
         //32
         "type": "Cybernetics",
         "available": ["Ht"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [100000, 500000],
         "purchaseDM": {},
         "saleDM": { "As": 1, "Ic": 1, "Ri": 2 },
         "maxRisk": 3,
         "dangerousGoodsDM": 1,
         "definedTradeGoods": [
            {
               "name": "Cybernetic Lubricants",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 100000
            },
            {
               "name": "Cybernetic Components/Physical Augments",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 200000
            },
            {
               "name": "Cyber-Prosthetics",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            },
            {
               "name": "Cosmetic Prosthetics",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 350000
            },
            {
               "name": "Real-Life Replacements and Augments",
               "tons": function() { return 1 },
               "basePrice": 500000
            }
         ]
      },
      {
         //33
         "type": "Live Animals",
         "available": ["Ag", "Ga"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [2500, 15000],
         "purchaseDM": { "Ag": 2 },
         "saleDM": { "Lo": 3 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "name": "Beasts of Burden",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 2500
            },
            {
               "name": "Untrained Riding Animals",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "name": "Trained Riding Animals/Common Pets",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "name": "Untrained Guard Animals",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 12500
            },
            {
               "name": "Trained Guard Animals/Exotic Pets",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 15000
            }
         ]
      },
      {
         //34
         "type": "Luxury Consumables",
         "available": ["Ag", "Ga", "Wa"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [5000, 50000],
         "purchaseDM": { "Ag": 2, "Wa": 1 },
         "saleDM": { "Ri": 2, "Hi": 2 },
         "maxRisk": 3,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "name": "Common Desserts/Rare Food Additives",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 5000
            },
            {
               "name": "Common Desserts/Common Wine",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 10000
            },
            {
               "name": "Rare Foods/Common Liquor",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 20000
            },
            {
               "name": "Exotic Foods/Rare Desserts/Rare Liquor",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 30000
            },
            {
               "name": "Exotic Desserts/Exotic Liquor",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 50000
            }
         ]
      },
      {
         //35
         "type": "Luxury Goods",
         "available": ["Hi"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [50000, 500000],
         "purchaseDM": {},
         "saleDM": { "Ri": 4 },
         "maxRisk": 3,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "name": "Rare Literature/Art",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 50000
            },
            {
               "name": "Jewellery/Alien Textiles",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 100000
            },
            {
               "name": "Rare Clothing/Home Decorations",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 200000
            },
            {
               "name": "VR Electronic Entertainment Devices",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            },
            {
               "name": "Exotic Furnishings/Exquisite Jewellery",
               "tons": function() { return 1 },
               "basePrice": 500000
            }
         ]
      },
      {
         //36
         "type": "Medical Supplies",
         "available": ["Ht", "Hi"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [10000, 100000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "In": 2, "Po": 1, "Ri": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "name": "Medical Uniforms/Disposable Tools",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "name": "Cosmetic Chemicals/Practicioner's Tools",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 30000
            },
            {
               "name": "General Medical Equipment or Supplies",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "name": "Specialist Equipment or Supplies",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 75000
            },
            {
               "name": "Micro-surgical Equipment or Supplies",
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
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [2500, 30000],
         "purchaseDM": { "De": 2 },
         "saleDM": { "In": 2, "Ag": 1, "Lt": 2 },
         "maxRisk": 2,
         "dangerousGoodsDM": 2,
         "definedTradeGoods": [
            {
               "name": "Crude Oil/Diesel",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 25000
            },
            {
               "name": "Refined Kerosene/Purified Oil",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "name": "Gasoline/Machine Lubricants",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 10000
            },
            {
               "name": "Jet Fuel/Gelid Adhesives",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 20000
            },
            {
               "name": "Rocket Fuel/Power Plant Starter Charges",
               "tons": function() { return rawroll(1, 6).total * 4 },
               "basePrice": 30000
            }
         ]
      },
      {
         //42
         "type": "Pharmaceuticals",
         "available": ["As", "De", "Hi", "Wa"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [25000, 500000],
         "purchaseDM": { "As": 2, "Hi": 1 },
         "saleDM": { "Ri": 2, "Lt": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": 3,
         "definedTradeGoods": [
            {
               "name": "OTC Drugs/Antibiotics",
               "tons": function() { return rawroll(1, 6).total + 3 },
               "basePrice": 25000
            },
            {
               "name": "Antivenin/Prescription Medications",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 50000
            },
            {
               "name": "Prescription Medications/Surgical",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 100000
            },
            {
               "name": "Anagathics",
               "tons": function() { return 2 },
               "basePrice": 200000
            },
            {
               "name": "Psi-Related Drugs/Viral Therapy Doses",
               "tons": function() { return 1 },
               "basePrice": 500000
            }
         ]
      },
      {
         //43
         "type": "Polymers",
         "available": ["In"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [1000, 10000],
         "purchaseDM": {},
         "saleDM": { "Ri": 2, "Ni": 1 },
         "maxRisk": 1,
         "dangerousGoodsDM": 0,
         "definedTradeGoods": [
            {
               "name": "Rubber/Vinyl Spooling",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 1000
            },
            {
               "name": "Insulation/Polyurethane Foam",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 3000
            },
            {
               "name": "Poured Plastics/Synthetic Fibre Spools",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 7000
            },
            {
               "name": "Kevlar/Teflon",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 9000
            },
            {
               "name": "Advanced Ballistic Weave",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 10000
            }
         ]
      },
      {
         //44
         "type": "Precious Metals",
         "available": ["As", "De", "Ic", "Fl"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [10000, 100000],
         "purchaseDM": { "As": 3, "De": 1, "Ic": 2 },
         "saleDM": { "Ri": 2, "In": 2, "Ht": 1 },
         "maxRisk": 3,
         "dangerousGoodsDM": 4,
         "definedTradeGoods": [
            {
               "name": "Bismuth/Indium",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 10000
            },
            {
               "name": "Beryllium/Silver",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 25000
            },
            {
               "name": "Ruthenium/Rhenium",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 50000
            },
            {
               "name": "Gold/Osmium/Iridium",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 75000
            },
            {
               "name": "Platinum/Rhodium",
               "tons": function() { return 1 },
               "basePrice": 100000
            }
         ]
      },
      {
         //45
         "type": "Radioactives",
         "available": ["As", "De", "Lo"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [500000, 1500000],
         "purchaseDM": { "As": 2, "Lo": 2 },
         "saleDM": { "In": 3, "Ht": 1, "Ni": -2, "Ag": -3 },
         "maxRisk": 4,
         "dangerousGoodsDM": 3,
         "definedTradeGoods": [
            {
               "name": "Nuclear Waste/Deactivated Materials",
               "tons": function() { return rawroll(1, 6).total + 3 },
               "basePrice": 500000
            },
            {
               "name": "Industrial Isotopes",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 750000
            },
            {
               "name": "Medical Isotopes/Reactor-Grade Uranium",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 1000000
            },
            {
               "name": "Weapons-Grade Plutonium/Fusion Cell Rods",
               "tons": function() { return 1 },
               "basePrice": 1250000
            },
            {
               "name": "Superwapon-grade Isotopes",
               "tons": function() { return 1 },
               "basePrice": 1500000
            }
         ]
      },
      {
         //46
         "type": "Robots",
         "available": ["In"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [150000, 650000],
         "purchaseDM": {},
         "saleDM": { "Ag": 2, "Ht": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": 1,
         "definedTradeGoods": [
            {
               "name": "Automated Robotics/Cargo Drones",
               "tons": function() { return rawroll(1, 6).total * 7 },
               "basePrice": 150000
            },
            {
               "name": "Industrial or Personal Drones",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 300000
            },
            {
               "name": "Combat or Guardian Drones",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 400000
            },
            {
               "name": "Scout and Sensor Drones",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 500000
            },
            {
               "name": "Advanced Robotics",
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
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [1000, 12000],
         "purchaseDM": { "De": 2 },
         "saleDM": { "Hi": 2, "Ri": 3, "Po": 3 },
         "maxRisk": 2,
         "dangerousGoodsDM": -1,
         "definedTradeGoods": [
            {
               "name": "Table Salt/Black Pepper",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 1000
            },
            {
               "name": "Adobo/Basil/Sage",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 3000
            },
            {
               "name": "Aniseed/Curry/Fennel/White Pepper",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 6000
            },
            {
               "name": "Cinnamon/Marjoram/Wasabi",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 9000
            },
            {
               "name": "Black Salt/Saffron/Alien Flavourings",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 12000
            }
         ]
      },
      {
         //52
         "type": "Textiles",
         "available": ["Ag", "Ni"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [1000, 5000],
         "purchaseDM": { "Ag": 7 },
         "saleDM": { "Hi": 3, "Na": 2 },
         "maxRisk": 1,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "name": "Yarn/Wool/Canvas",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 1000
            },
            {
               "name": "Animal-based Fabrics",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 2000
            },
            {
               "name": "Cotton or Flax-based Fabrics",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 3000
            },
            {
               "name": "Synthetic Silks/Finished Common Clothing",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 4000
            },
            {
               "name": "Organic Silk/Satin/Finished Fine Clothing",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 5000
            }
         ]
      },
      {
         //53
         "type": "Uncommon Ore",
         "available": ["As", "Ic"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [1000, 10000],
         "purchaseDM": { "As": 4 },
         "saleDM": { "In": 3, "Ni": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "name": "Lead/Zinc",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "name": "Copper/Tin",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 2500
            },
            {
               "name": "Nickel/Sodium/Tungsten",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 5000
            },
            {
               "name": "Gold/Silver/Ilmenite",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 7500
            },
            {
               "name": "Platinum/Uranium",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 10000
            }
         ]
      },
      {
         //54
         "type": "Uncommon Raw Materials",
         "available": ["Ag", "De", "Wa"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [5000, 50000],
         "purchaseDM": { "Ag": 2, "Wa": 1 },
         "saleDM": { "In": 2, "Ht": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "name": "Aluminium/Brass/Calcium",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 5000
            },
            {
               "name": "Carbonate/Magnesium/Meteoric Iron",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 10000
            },
            {
               "name": "Marble/Potassium/Titanium",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 20000
            },
            {
               "name": "Stellite/Tombac",
               "tons": function() { return rawroll(1, 6).total * 8 },
               "basePrice": 35000
            },
            {
               "name": "Depleted Uranium/Ceramic-Alloy",
               "tons": function() { return rawroll(1, 6).total * 3 },
               "basePrice": 50000
            }
         ]
      },
      {
         //55
         "type": "Wood",
         "available": ["Ag", "Ga"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [100, 4000],
         "purchaseDM": { "Ag": 6 },
         "saleDM": { "Ri": 2, "In": 1 },
         "maxRisk": 1,
         "dangerousGoodsDM": -4,
         "definedTradeGoods": [
            {
               "name": "Low-grade Rough Cuts/Construction Scrap",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 100
            },
            {
               "name": "High-Grade Rough-Cut",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 500
            },
            {
               "name": "Construction-grade Timber",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 1000
            },
            {
               "name": "Furniture-grade Timber/Rare Grades",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 2000
            },
            {
               "name": "Exotics (Pernambuco, White Mahogany, etc.)",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 4000
            }
         ]
      },
      {
         //56
         "type": "Vehicles",
         "available": ["In", "Ht"],
         "maxTons": function () { return rawroll(1, 6).total * 10 },
         "priceRange": [5000, 30000],
         "purchaseDM": { "In": 2, "Ht": 1 },
         "saleDM": { "Ni": 2, "Hi": 1 },
         "maxRisk": 2,
         "dangerousGoodsDM": -2,
         "definedTradeGoods": [
            {
               "name": "Wheeled Repair Components",
               "tons": function() { return rawroll(1, 6).total * 14 },
               "basePrice": 5000
            },
            {
               "name": "Tracked Repair Components",
               "tons": function() { return rawroll(1, 6).total * 12 },
               "basePrice": 10000
            },
            {
               "name": "Wheeled Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 10 },
               "basePrice": 15000
            },
            {
               "name": "Wheeled Vehicles/Tracked Components or Packages",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 20000
            },
            {
               "name": "Tracked Vehicles",
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
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [10000, 200000],
         "purchaseDM": { "Wa": 2 },
         "saleDM": { "In": 6 },
         "maxRisk": 4,
         "dangerousGoodsDM": 4,
         "definedTradeGoods": [
            {
               "name": "Herbal Stimulants/Ultra-Caffeine",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 10000
            },
            {
               "name": "Raw Growth Hormones",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 25000
            },
            {
               "name": "Chemical Solvents/Protein Duplexer Steroids",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 50000
            },
            {
               "name": "Bio-Acid/Pheromone Extracts",
               "tons": function() { return 2 },
               "basePrice": 100000
            },
            {
               "name": "Genetic Mutagens/Organic Toxins",
               "tons": function() { return 1 },
               "basePrice": 200000
            }
         ]
      },
      {
         //62
         "type": "Illegal Cybernetics",
         "available": ["Ht"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [100000, 650000],
         "purchaseDM": {},
         "saleDM": { "As": 4, "Ic": 4, "Ri": 8, "Az": 6, "Rz": 6 },
         "maxRisk": 5,
         "dangerousGoodsDM": 5,
         "definedTradeGoods": [
            {
               "name": "Unlicensed Augment Tools and Parts",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 100000
            },
            {
               "name": "Physical Enhancement Tissues",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 150000
            },
            {
               "name": "Unlicensed Augmentatives/Combat Implant Additives",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 250000
            },
            {
               "name": "Combat Prosthetics/Surgical Duplications",
               "tons": function() { return 2 },
               "basePrice": 400000
            },
            {
               "name": "Mimicry Augmetics",
               "tons": function() { return 1 },
               "basePrice": 650000
            }
         ]
      },
      {
         //63
         "type": "Illegal Drugs",
         "available": ["As", "De", "Hi", "Wa"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [25000, 300000],
         "purchaseDM": {},
         "saleDM": { "Ri": 6, "Hi": 6 },
         "maxRisk": 4,
         "dangerousGoodsDM": 6,
         "definedTradeGoods": [
            {
               "name": "Herbal Stimulants/Biological Hallucinogens",
               "tons": function() { return rawroll(1, 6).total + 2 },
               "basePrice": 25000
            },
            {
               "name": "Chemical Depressants/Natural Narcotics",
               "tons": function() { return rawroll(1, 6).total + 1 },
               "basePrice": 50000
            },
            {
               "name": "Chemical Stimulants and Hallucinogens",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 100000
            },
            {
               "name": "Designer Narcotics",
               "tons": function() { return 2 },
               "basePrice": 200000
            },
            {
               "name": "Alien Synthetics/Psi-Drugs",
               "tons": function() { return 1 },
               "basePrice": 300000
            }
         ]
      },
      {
         //64
         "type": "Illegal Luxuries",
         "available": ["Ag", "Ga", "Wa"],
         "maxTons": function () { return rawroll(1, 6).total },
         "priceRange": [10000, 200000],
         "purchaseDM": { "Ag": 2, "Wa": 1 },
         "saleDM": { "Ri": 6, "Hi": 4 },
         "maxRisk": 4,
         "dangerousGoodsDM": 4,
         "definedTradeGoods": [
            {
               "name": "Anti-Governmental Propaganda/Endangered Animal Products",
               "tons": function() { return 1 },
               "basePrice": 10000
            },
            {
               "name": "Black-data Recordings/Slaving Gear",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 25000
            },
            {
               "name": "Extinct Animal Products",
               "tons": function() { return rawroll(1, 6).total * 1 },
               "basePrice": 50000
            },
            {
               "name": "BTL Devices/Cloning Equipment",
               "tons": function() { return 2 },
               "basePrice": 100000
            },
            {
               "name": "Forbidden Pleasures",
               "tons": function() { return 1 },
               "basePrice": 200000
            }
         ]
      },
      {
         //65
         "type": "Illegal Weapons",
         "available": ["In", "Ht"],
         "maxTons": function () { return rawroll(1, 6).total * 5 },
         "priceRange": [50000, 450000],
         "purchaseDM": { "Ht": 2 },
         "saleDM": { "Po": 6, "Az": 8, "Rz": 10 },
         "maxRisk": 5,
         "dangerousGoodsDM": 6,
         "definedTradeGoods": [
            {
               "name": "Chain-drive Weaponry/Armour-Piercing Ammunition",
               "tons": function() { return rawroll(1, 6).total * 6 },
               "basePrice": 50000
            },
            {
               "name": "Protected Technologies/Explosive or Incendiary Ammunition",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 100000
            },
            {
               "name": "Synthetic Poisons/Personal-scale Mass Trauma Explosives",
               "tons": function() { return rawroll(1, 6).total * 5 },
               "basePrice": 150000
            },
            {
               "name": "Arclight Weaponry/Biological or Chemical Weaponry/Naval Starship Weaponry",
               "tons": function() { return rawroll(1, 6).total * 2 },
               "basePrice": 300000
            },
            {
               "name": "Disintegrators/Psi-Weaponry/Weapons of Mass Destruction",
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

function getRandomDefinedTradeGood(good) {
   switch(rawroll(2, 6).total) {
      case 2:
         return good.definedTradeGoods[0];
      case 3:
      case 4:
      case 5:
         return good.definedTradeGoods[1];
      case 6:
      case 7:
      case 8:
         return good.definedTradeGoods[2];
      case 9:
      case 10:
      case 11:
         return good.definedTradeGoods[3];
      case 12:
         return good.definedTradeGoods[4];
   }
}

function enumerateDefinedTradeGoods(good) {
   var definedTradeGoods = [];
   var tonsRemaining = good.maxTons();
   while (tonsRemaining) {
      var definedTradeGood = getRandomDefinedTradeGood(good);
      var tons = definedTradeGood.tons();
      tons = tons > tonsRemaining ? tonsRemaining : tons;
      tonsRemaining -= tons;
      definedTradeGoods.push({ good: definedTradeGood, tons: tons });
   }
   return definedTradeGoods;
}
	var pokemonNames = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetchd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr.Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

	var pokeCP = { 
		"pokemon":[
			{"Name":"Bulbasaur",   	"newCP":	"2.22",	"minCP" : "1.52",	"maxCP": "1.60", "minHPLvl" : "0.25", "maxHPLvl" : "4.32"      },					
			{"Name":"Ivysaur",		"newCP":	"1.91",	"minCP" : "1.58",	"maxCP": "1.65", "minHPLvl" : "0.34", "maxHPLvl" : "5.55"      },		
			{"Name":"Charmander",	"newCP":	"2.34",	"minCP" : "1.63",	"maxCP": "1.74", "minHPLvl" : "0.22", "maxHPLvl" : "3.83"      },
			{"Name":"Charmeleon",	"newCP":	"2.01",	"minCP" : "1.67",	"maxCP": "1.75", "minHPLvl" : "0.33", "maxHPLvl" : "5.39"      },
			{"Name":"Squirtle",		"newCP":   "1.74",	"minCP" : "1.57",	"maxCP": "1.66", "minHPLvl" : "0.25", "maxHPLvl" : "4.24"      },
			{"Name":"Wartortle",	"newCP":	"1.83",	"minCP" : "1.61",	"maxCP": "1.68", "minHPLvl" : "0.33", "maxHPLvl" : "5.47"      },
			{"Name":"Caterpie",		"newCP":   "1.49",	"minCP" : "1.08",	"maxCP": "1.09", "minHPLvl" : "0.25", "maxHPLvl" : "4.32"      },
			{"Name":"Metapod",		"newCP":	"3.38",	"minCP" : "3.04",	"maxCP": "3.64", "minHPLvl" : "0.28", "maxHPLvl" : "4.73"      },
			{"Name":"Weedle",		"newCP":	"1.17",	"minCP" : "1.08",	"maxCP": "1.09", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },
			{"Name":"Kakuna",		"newCP":	"3.28",	"minCP" : "2.97",	"maxCP": "3.51", "minHPLvl" : "0.25", "maxHPLvl" : "4.32"      },
			{"Name":"Pidgey",		"newCP":	"1.92",	"minCP" : "1.80",	"maxCP": "1.96", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },
			{"Name":"Pidgeotto",	"newCP":	"1.94",	"minCP" : "1.71",	"maxCP": "1.81", "minHPLvl" : "0.35", "maxHPLvl" : "5.80"      },
			{"Name":"Rattata",		"newCP":	"2.63",	"minCP" : "2.48",	"maxCP": "2.84", "minHPLvl" : "0.17", "maxHPLvl" : "3.09"      },
			{"Name":"Spearow",		"newCP":	"2.64",	"minCP" : "2.54",	"maxCP": "2.87", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },
			{"Name":"Ekans",		"newCP":	"2.22",	"minCP" : "2.14",	"maxCP": "2.36", "minHPLvl" : "0.20", "maxHPLvl" : "3.50"      },
			{"Name":"Pikachu",		"newCP":	"2.46",	"minCP" : "2.28",	"maxCP": "2.52", "minHPLvl" : "0.20", "maxHPLvl" : "3.50"      },
			{"Name":"Sandshrew",	"newCP":	"2.35",	"minCP" : "2.27",	"maxCP": "2.51", "minHPLvl" : "0.28", "maxHPLvl" : "4.73"      },	
			{"Name":"Nidoran", 		"newCP":   "1.71",	"minCP" : "1.60",	"maxCP": "1.70", "minHPLvl" : "0.31", "maxHPLvl" : "5.14"      },	
			{"Name":"Nidorina",		"newCP":   "1.84",	"minCP" : "1.77",	"maxCP": "1.87", "minHPLvl" : "0.39", "maxHPLvl" : "6.38"      },	
			{"Name":"Nidoran", 		"newCP":   "1.68",	"minCP" : "1.63",	"maxCP": "1.73", "minHPLvl" : "0.26", "maxHPLvl" : "4.40"      },	
			{"Name":"Nidorino",		"newCP":   "1.83",	"minCP" : "1.80",	"maxCP": "1.91", "minHPLvl" : "0.34", "maxHPLvl" : "5.64"      },
			{"Name":"Clefairy",		"newCP":   "1.93",	"minCP" : "2.00",	"maxCP": "2.14", "minHPLvl" : "0.39", "maxHPLvl" : "6.38"      },
			{"Name":"Vulpix",		"newCP":	"2.5",	"minCP" : "2.63",	"maxCP": "2.95", "minHPLvl" : "0.21", "maxHPLvl" : "3.74"      },	
			{"Name":"Jigglypuff",	"newCP":	"2.41",	"minCP" : "2.37",	"maxCP": "2.67", "minHPLvl" : "0.65", "maxHPLvl" : "10.08"     },	
			{"Name":"Zubat",		"newCP":	"3.15",	"minCP" : "2.99",	"maxCP": "3.44", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Oddish",		"newCP":	"1.53",	"minCP" : "1.47",	"maxCP": "1.54", "minHPLvl" : "0.25", "maxHPLvl" : "4.32"      },	
			{"Name":"Gloom",		"newCP":	"2.05",	"minCP" : "1.48",	"maxCP": "1.53", "minHPLvl" : "0.34", "maxHPLvl" : "5.55"      },	
			{"Name":"Paras",		"newCP":	"1.94",	"minCP" : "1.91",	"maxCP": "2.07", "minHPLvl" : "0.20", "maxHPLvl" : "3.50"      },	
			{"Name":"Venonat",		"newCP":	"1.9",	"minCP" : "1.84",	"maxCP": "1.97", "minHPLvl" : "0.34", "maxHPLvl" : "5.55"      },	
			{"Name":"Diglett",		"newCP":	"3.18",	"minCP" : "2.56",	"maxCP": "3.27", "minHPLvl" : "0.06", "maxHPLvl" : "1.44"      },	
			{"Name":"Meowth",		"newCP":	"2.2",	"minCP" : "2.16",	"maxCP": "2.38", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Psyduck",		"newCP":	"2.31",	"minCP" : "2.15",	"maxCP": "2.33", "minHPLvl" : "0.28", "maxHPLvl" : "4.73"      },
			{"Name":"Mankey",		"newCP":	"2.14",	"minCP" : "2.12",	"maxCP": "2.32", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Growlithe",	"newCP":	"2.35",	"minCP" : "2.24",	"maxCP": "2.41", "minHPLvl" : "0.31", "maxHPLvl" : "5.14"      },	
			{"Name":"Poliwag",		"newCP":	"1.72",	"minCP" : "1.68",	"maxCP": "1.81", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Poliwhirl",	"newCP":	"1.79",	"minCP" : "1.87",	"maxCP": "1.98", "minHPLvl" : "0.37", "maxHPLvl" : "5.96"      },	
			{"Name":"Abra",			"newCP":   "2.59",	"minCP" : "1.89",	"maxCP": "2.09", "minHPLvl" : "0.14", "maxHPLvl" : "2.67"      },	
			{"Name":"Kadabra",		"newCP":	"2.09",	"minCP" : "1.60",	"maxCP": "1.69", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Machop",		"newCP":	"1.69",	"minCP" : "1.62",	"maxCP": "1.71", "minHPLvl" : "0.39", "maxHPLvl" : "6.38"      },	
			{"Name":"Machoke",		"newCP":	"1.56",	"minCP" : "1.47",	"maxCP": "1.52", "minHPLvl" : "0.45", "maxHPLvl" : "7.20"      },	
			{"Name":"Bellsprout",	"newCP":	"1.89",	"minCP" : "1.54",	"maxCP": "1.63", "minHPLvl" : "0.28", "maxHPLvl" : "4.73"      },	
			{"Name":"Weepinbell",	"newCP":	"1.49",	"minCP" : "1.47",	"maxCP": "1.52", "minHPLvl" : "0.37", "maxHPLvl" : "5.96"      },	
			{"Name":"Tentacool",	"newCP":	"3.47",	"minCP" : "2.45",	"maxCP": "2.72", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Geodude",		"newCP":	"1.84",	"minCP" : "1.69",	"maxCP": "1.81", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Graveler",		"newCP":   "1.68",	"minCP" : "1.61",	"maxCP": "1.68", "minHPLvl" : "0.31", "maxHPLvl" : "5.14"      },	
			{"Name":"Ponyta",		"newCP":	"1.5",	"minCP" : "1.45",	"maxCP": "1.51", "minHPLvl" : "0.28", "maxHPLvl" : "4.73"      },	
			{"Name":"Slowpoke",		"newCP":   "2.23",	"minCP" : "2.13",	"maxCP": "2.31", "minHPLvl" : "0.51", "maxHPLvl" : "8.02"      },	
			{"Name":"Magnemite",	"newCP":	"2.23",	"minCP" : "2.11",	"maxCP": "2.35", "minHPLvl" : "0.14", "maxHPLvl" : "2.67"      },	
			{"Name":"Doduo",		"newCP":	"2.2",	"minCP" : "2.15",	"maxCP": "2.36", "minHPLvl" : "0.20", "maxHPLvl" : "3.50"      },	
			{"Name":"Seel",			"newCP":   "1.68",	"minCP" : "1.94",	"maxCP": "2.08", "minHPLvl" : "0.37", "maxHPLvl" : "5.96"      },	
			{"Name":"Grimer",		"newCP":	"2.44",	"minCP" : "2.03",	"maxCP": "2.17", "minHPLvl" : "0.45", "maxHPLvl" : "7.20"      },	
			{"Name":"Shellder",		"newCP":   "2.58",	"minCP" : "2.49",	"maxCP": "2.79", "minHPLvl" : "0.17", "maxHPLvl" : "3.09"      },	
			{"Name":"Gastly",		"newCP":	"1.95",	"minCP" : "1.72",	"maxCP": "1.86", "minHPLvl" : "0.17", "maxHPLvl" : "3.09"      },	
			{"Name":"Haunter",		"newCP":	"1.9",	"minCP" : "1.51",	"maxCP": "1.57", "minHPLvl" : "0.25", "maxHPLvl" : "4.32"      },	
			{"Name":"Drowzee",		"newCP":	"2.09",	"minCP" : "2.03",	"maxCP": "2.19", "minHPLvl" : "0.34", "maxHPLvl" : "5.55"      },	
			{"Name":"Krabby",		"newCP":	"2.36",	"minCP" : "2.30",	"maxCP": "2.57", "minHPLvl" : "0.17", "maxHPLvl" : "3.09"      },	
			{"Name":"Voltorb",		"newCP":	"2.01",	"minCP" : "1.96",	"maxCP": "2.13", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },	
			{"Name":"Exeggcute",	"newCP":	"2.61",	"minCP" : "2.69",	"maxCP": "2.96", "minHPLvl" : "0.34", "maxHPLvl" : "5.55"      },	
			{"Name":"Cubone",		"newCP":	"1.79",	"minCP" : "1.65",	"maxCP": "1.74", "minHPLvl" : "0.28", "maxHPLvl" : "4.73"      },	
			{"Name":"Koffing",		"newCP":	"4",	"minCP" : "1.95",	"maxCP": "2.10", "minHPLvl" : "0.23", "maxHPLvl" : "3.91"      },
			{"Name":"Rhyhorn",		"newCP":	"2.06",	"minCP" : "1.90",	"maxCP": "2.03", "minHPLvl" : "0.45", "maxHPLvl" : "7.20"      },	
			{"Name":"Horsea",		"newCP":	"2.19",	"minCP" : "2.16",	"maxCP": "2.39", "minHPLvl" : "0.17", "maxHPLvl" : "3.09"      },	
			{"Name":"Goldeen",		"newCP":	"2.21",	"minCP" : "2.12",	"maxCP": "2.31", "minHPLvl" : "0.25", "maxHPLvl" : "4.32"      },	
			{"Name":"Staryu",		"newCP":	"2.37",	"minCP" : "2.33",   "maxCP": "2.58", "minHPLvl" : "0.17", "maxHPLvl" : "3.09"      },	
			{"Name":"Magikarp",		"newCP":   "10.55","minCP" : "10.24",   "maxCP": "15.22","minHPLvl" : "0.11", "maxHPLvl" : "2.26"      },
			{"Name":"Eevee",		"newCP":   "10.55","minCP" : "10.24",   "maxCP": "15.22","minHPLvl" : "0.11", "maxHPLvl" : "2.26"      },
			{"Name":"Vaporeon",		"newCP":   "10.55","minCP" : "2.61",   "maxCP": "2.87","minHPLvl" : "0.11", "maxHPLvl" : "2.26"      },
			{"Name":"Jolteon",		"newCP":   "10.55","minCP" : "1.99",   "maxCP": "2.13","minHPLvl" : "0.11", "maxHPLvl" : "2.26"      },
			{"Name":"Flareon",		"newCP":   "10.55","minCP" : "2.45",   "maxCP": "2.68","minHPLvl" : "0.11", "maxHPLvl" : "2.26"      },
			{"Name":"Omanyte",		"newCP":	"4.44",	"minCP" : "1.99",	"maxCP": "2.17", "minHPLvl" : "0.20", "maxHPLvl" : "3.50"      },	
			{"Name":"Kabuto",		"newCP":	"2.11",	"minCP" : "1.93",	"maxCP": "2.10", "minHPLvl" : "0.17", "maxHPLvl" : "3.09"      },	
			{"Name":"Dratini",		"newCP":	"2.56",	"minCP" : "1.78",	"maxCP": "1.90", "minHPLvl" : "0.23", "maxHPLvl" : "3.99"      },	
			{"Name":"Dragonair",	"newCP":	"2.01",	"minCP" : "2.00",	"maxCP": "2.12", "minHPLvl" : "0.34", "maxHPLvl" : "5.64"      }
		]      
	};

	// var value = [];
	// var propname = [];
	// var pokemonInfo = [];
	// for (var key in pokemonList.pokemon[0]) {
	// 	value.push(pokemonList.pokemon[0][key]);
	// }
	// for (property in pokemonList.pokemon[0]) {
	// 	propname.push(property);
	// }

	// for (var i=0; i < value.length; i++) {
	// 	pokemonInfo.push($("<h1>").text(propname[i] + " : " + value[i]));
	// }
	// $(".pokemonContainer").append(pokemonInfo); 


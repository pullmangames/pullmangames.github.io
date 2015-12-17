
var PassengersByTradeType={
	departure:{
		As:1,
		Ba:-5,
		De:-1,
		Ga:2,
		Ic:1,
		In:2,
		Po:-2,
		Ri:-1,//,
		Az:2,//Injected by modifiersPerTradeCode, if not using that, inject yourself
		Rd:4 //Injected by modifiersPerTradeCode, if not using that, inject yourself
	},
	arrival:{
		As:-1,
		Ba:-5,
		De:-1,
		Ga:2,
		Hi:4,
		Ic:-1,
		In:1,
		Lo:-4,
		Ni:-1,
		Po:-1,
		Ri:2,
		Az:-2, //Injected by modifiersPerTradeCode, if not using that, inject yourself
		Rd:-4 //Injected by modifiersPerTradeCode, if not using that, inject yourself
	}
	};



var AvailablePassengers={
	low:[
 		function(){ return 0},
		function(){ return Math.max(rawroll(2,6).total-6,0)},// 		function(){ return 2d6-6",
		function(){ return rawroll(2,6).total},// 		function(){ return 2d6",
		function(){ return rawroll(2,6).total},// 		function(){ return 2d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(1,6).total,0)},// 		function(){ return 3d6-1d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(1,6).total,0)},// 		function(){ return 3d6-1d6",
		function(){ return rawroll(3,6).total},// 		function(){ return 3d6",
		function(){ return rawroll(3,6).total},// 		function(){ return 3d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(5,6).total},// 		function(){ return 5d6",
		function(){ return rawroll(5,6).total},// 		function(){ return 5d6",
		function(){ return rawroll(6,6).total},// 		function(){ return 6d6",
		function(){ return rawroll(6,6).total},// 		function(){ return 6d6",
		function(){ return rawroll(7,6).total},// 		function(){ return 7d6",
		function(){ return rawroll(8,6).total},// 		function(){ return 8d6",
		function(){ return rawroll(9,6).total}// 		function(){ return 9d6"
	],
	mid:[
 		function(){ return 0},
 		function(){ return 0},
		function(){ return Math.max(rawroll(1,6).total-2,0)},// 		function(){ return 1d6-2",
		function(){ return rawroll(1,6).total},// 		function(){ return 1d6",
		function(){ return Math.max(rawroll(2,6).total-rawroll(1,6).total,0)},// 		function(){ return 2d6-1d6",
		function(){ return Math.max(rawroll(2,6).total-rawroll(1,6).total,0)},// 		function(){ return 2d6-1d6",
		function(){ return rawroll(2,6).total},// 		function(){ return 2d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(2,6).total,0)},// 		function(){ return 3d6-2d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(1,6).total,0)},// 		function(){ return 3d6-1d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(1,6).total,0)},// 		function(){ return 3d6-1d6",
		function(){ return rawroll(3,6).total},// 		function(){ return 3d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(5,6).total},// 		function(){ return 5d6",
		function(){ return rawroll(5,6).total},// 		function(){ return 5d6",
		function(){ return rawroll(6,6).total}// 		function(){ return 6d6"
	],
	high:[
 		function(){ return 0},
 		function(){ return 0},
 		function(){ return 0},
		function(){ return Math.max(rawroll(1,6).total-rawroll(1,6).total,0)},// 		function(){ return 1d6-1d6",
		function(){ return Math.max(rawroll(2,6).total-rawroll(2,6).total,0)},// 		function(){ return 2d6-2d6",
		function(){ return Math.max(rawroll(2,6).total-rawroll(1,6).total,0)},// 		function(){ return 2d6-1d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(2,6).total,0)},// 		function(){ return 3d6-2d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(2,6).total,0)},// 		function(){ return 3d6-2d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(1,6).total,0)},// 		function(){ return 3d6-1d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(1,6).total,0)},// 		function(){ return 3d6-1d6",
		function(){ return Math.max(rawroll(3,6).total-rawroll(1,6).total,0)},// 		function(){ return 3d6-1d6",
		function(){ return rawroll(3,6).total},// 		function(){ return 3d6",
		function(){ return rawroll(3,6).total},// 		function(){ return 3d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(4,6).total},// 		function(){ return 4d6",
		function(){ return rawroll(5,6).total}// 		function(){ return 5d6"
	]
	};


var RandomPassenger={};

var PassengerWorldEvents={
	"departure":{
		"war":5,
		"epidemic":6,
		"celebration":-2,
		"Tourist Attractions":-3,
		"Economic Boom":-1,
		"Media Attention":-1},
	"arrival":{
		"war":-5,
		"epidemic":-10,
		"celebration":3,
		"Tourist Attractions":2,
		"Economic Boom":2,
		"Media Attention":1}
	};



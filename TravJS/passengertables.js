
var PassengersByTradeType={
	departure:{
		As:1,
		Ba:-5,
		De:-1,
		Ga:2,
		Ic:1,
		In:2,
		Po:-2,
		Ri:-1//,
		//Az:2 How to see if it's amber?
		//Rd:4 how to see if it's red?
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
		Ri:+2//,
		//Az:-2, How to see if it's amber?
		//Rd:-4 How to see if it's red?
	}
	};



var AvailablePassengers={
	low:[
 		"0",
		"Math.max(rawroll(2,6).total-6,0)",// 		"2d6-6",
		"rawroll(2,6).total",// 		"2d6",
		"rawroll(2,6).total",// 		"2d6",
		"rawroll(3,6).total-rawroll(1,6).total",// 		"3d6-1d6",
		"rawroll(3,6).total-rawroll(1,6).total",// 		"3d6-1d6",
		"rawroll(3,6).total",// 		"3d6",
		"rawroll(3,6).total",// 		"3d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(5,6).total",// 		"5d6",
		"rawroll(5,6).total",// 		"5d6",
		"rawroll(6,6).total",// 		"6d6",
		"rawroll(6,6).total",// 		"6d6",
		"rawroll(7,6).total",// 		"7d6",
		"rawroll(8,6).total",// 		"8d6",
		"rawroll(9,6).total"// 		"9d6"
	],
	mid:[
 		"0",
 		"0",
		"Math.max(rawroll(1,6).total-2)",// 		"1d6-2",
		"rawroll(1,6).total",// 		"1d6",
		"Math.max(rawroll(2,6).total-rawroll(1,6).total)",// 		"2d6-1d6",
		"Math.max(rawroll(2,6).total-rawroll(1,6).total)",// 		"2d6-1d6",
		"rawroll(2,6).total",// 		"2d6",
		"rawroll(3,6).total-rawroll(2,6).total",// 		"3d6-2d6",
		"rawroll(3,6).total-rawroll(1,6).total",// 		"3d6-1d6",
		"rawroll(3,6).total-rawroll(1,6).total",// 		"3d6-1d6",
		"rawroll(3,6).total",// 		"3d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(5,6).total",// 		"5d6",
		"rawroll(5,6).total",// 		"5d6",
		"rawroll(6,6).total"// 		"6d6"
	],
	high:[
 		"0",
 		"0",
 		"0",
		"Math.max(rawroll(1,6).total-rawroll(1,6).total)",// 		"1d6-1d6",
		"Math.max(rawroll(2,6).total-rawroll(2,6).total)",// 		"2d6-2d6",
		"Math.max(rawroll(2,6).total-rawroll(1,6).total)",// 		"2d6-1d6",
		"Math.max(rawroll(3,6).total-rawroll(2,6).total)",// 		"3d6-2d6",
		"Math.max(rawroll(3,6).total-rawroll(2,6).total)",// 		"3d6-2d6",
		"Math.max(rawroll(3,6).total-rawroll(1,6).total)",// 		"3d6-1d6",
		"Math.max(rawroll(3,6).total-rawroll(1,6).total)",// 		"3d6-1d6",
		"Math.max(rawroll(3,6).total-rawroll(1,6).total)",// 		"3d6-1d6",
		"rawroll(3,6).total",// 		"3d6",
		"rawroll(3,6).total",// 		"3d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(4,6).total",// 		"4d6",
		"rawroll(5,6).total"// 		"5d6"
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



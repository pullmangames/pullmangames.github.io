
var PassengersByTradeType={
	current:{
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
	destination:{
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
		"2d6-6",
		"2d6",
		"2d6",
		"3d6-1d6",
		"3d6-1d6",
		"3d6",
		"3d6",
		"4d6",
		"4d6",
		"5d6",
		"5d6",
		"6d6",
		"6d6",
		"7d6",
		"8d6",
		"9d6"
	],
	mid:[
		"0",
		"0",
		"1d6-2",
		"1d6",
		"2d6-1d6",
		"2d6-1d6",
		"2d6",
		"3d6-2d6",
		"3d6-1d6",
		"3d6-1d6",
		"3d6",
		"4d6",
		"4d6",
		"4d6",
		"5d6",
		"5d6",
		"6d6"
	],
	high:[
		"0",
		"0",
		"0",
		"1d6-1d6",
		"2d6-2d6",
		"2d6-1d6",
		"3d6-2d6",
		"3d6-2d6",
		"3d6-1d6",
		"3d6-1d6",
		"3d6-1d6",
		"3d6",
		"3d6",
		"4d6",
		"4d6",
		"4d6",
		"5d6"
	]
	};


var RandomPassenger={};

var PassengerWorldEvents={
	"Current":{
		"war":5,
		"epidemic":6,
		"celebration":-2,
		"Tourist Attractions":-3,
		"Economic Boom":-1,
		"Media Attention":-1},
	"Destination":{
		"war":-5,
		"epidemic":-10,
		"celebration":3,
		"Tourist Attractions":2,
		"Economic Boom":2,
		"Media Attention":1}
	};



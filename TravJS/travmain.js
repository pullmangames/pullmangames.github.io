
     app = angular.module('TravApp', ['ngRoute', 'travellerCharacters', 'diceRoller']) //declare the main module
      
app.config(function ($routeProvider) {
   $routeProvider
      .when("/roll",       {controller: "RollController as roller",           templateUrl: "roll.view"})
      .when("/characters", {controller: "charactersController as characters", templateUrl: "characters.view"})
      .otherwise({redirectTo: "/roll"});
});


//--------------------------------------------------------------------
// Freight Section



// Steps:
// 	Find a source
		//Diplomat, Investigate, Streetwise (Average). Effect is days taken or wasted. 
		//Attempts per month = pop/3
// 	determine cargo specs
		//lot sizes:  Major = 1d6x10, Minor = 1d6x5, incidental = 1, no splitting
		//Trade Traffic = Destination Pop + table modifiers
		//lot count=table for traffic value
// 	determine time table
		//determine how many "days away" it is.  Referee fiat?
// 	negotiate fees
		//base 500= 20% per extra parsec (Added or multiplied?)
		//Negotiate?
			//Hire broker? consult broker table
			//Broker or persuade check vs see table for difficulty. Effect changes price.
			//If bail, no freight searches for one month
// 	travel
		//Risk vs. reward rules have halved transit hazard rules (round down)
		//I guess we have to check for transit hazards?
// 	collect
	//get paid, reduce fee by late table
	//tax?


//AvailableFreight:
var FreightAvailableLotsTable={
0:{incidental:0, minor:0, major:0},
1:{incidental:0, minor:0, major:0},
2:{incidental:0, minor:0, major:"1d6-4"},
3:{incidental:0, minor:0, major:"1d6-3"},
4:{incidental:0, minor:"1d6-4", major:"1d6-2"},
5:{incidental:0, minor:"1d6-3", major:"1d6-1"},
6:{incidental:0, minor:"1d6-2", major:"1d6"},
7:{incidental:0, minor:"1d6-1", major:"1d6+1"},
8:{incidental:0, minor:"1d6", major:"1d6+2"},
9:{incidental:"1d6-4", minor:"1d6+1", major:"1d6+3"},
10:{incidental:"1d6-3", minor:"1d6+2", major:"1d6+4"},
11:{incidental:"1d6-2", minor:"1d6+3", major:"1d6+5"},
12:{incidental:"1d6-1", minor:"1d6+4", major:"1d6+6"},
13:{incidental:"1d6", minor:"1d6+5", major:"1d6+7"},
14:{incidental:"1d6+1", minor:"1d6+6", major:"1d6+8"},
15:{incidental:"1d6+2", minor:"1d6+7", major:"1d6+9"},
16:{incidental:"1d6+3", minor:"1d6+8", major:"1d6+10"}
} //or, incidental = 1d6+(Traffic-13), minor= 1d6+(Traffic-8), major=1d6+(Traffic-6)



var FreightWorldTypeModsCurrentWorld={
"Agricultural":2,
"Asteroid":-3,
"Barren":0, //Says "none".  Does that mean "0" or "no freight"?
"Desert":-3,
"Fluid Oceans":-3,
"Garden":2,
"High Population":2,
"Ice-Capped":-3,
"Industrial":3,
"Low Population":-5,
"Non-Agricultural":-3,
"Non-Industrial":-3,
"Poor":-3,
"Rich":2,
"Water World":-3,
"Amber Zone":5, //Is this an error in the table?
"Red Zone":-5
}

var FreightWorldTypeModsDestinationWorld={
"Agricultural":1,
"Asteroid":1,
"Barren":-5,
"Desert":0,
"Fluid Oceans":0,
"Garden":1,
"High Population":1,
"Ice-Capped":0,
"Industrial":2,
"Low Population":0,
"Non-Agricultural":1,
"Non-Industrial":1,
"Poor":-3,
"Rich":2,
"Water World":0,
"Amber Zone":-5,
"Red Zone":"-5000" //Table says "No Freight", this should cause the desired effect.
}

/*
var FreightWorldTypeModsCurrentWorld={
"Agricultural":
"Asteroid":
"Barren":
"Desert":
"Fluid Oceans":
"Garden":
"High Population":
"Ice-Capped":
"Industrial":
"Low Population":
"Non-Agricultural":
"Non-Industrial":
"Poor":
"Rich":
"Water World":
"Amber Zone":
"Red Zone":
}
*/


var WorldTypes=["Agricultural",
"Asteroid",
"Barren",
"Desert",
"Fluid Oceans",
"Garden",
"High Population",
"Ice-Capped",
"Industrial",
"Low Population",
"Non-Agricultural",
"Non-Industrial",
"Poor",
"Rich",
"Water World",
"Amber Zone",
"Red Zone",
]

const SIMPLE = 6;
const EASY = 4;
const ROUTINE = 2;
const AVERAGE = 0;
const DIFFICULT = -2;
const VERYDIFFICULT = -4;
const FORMIDABLE = -6;

var diff = {	simple:6,
				easy:4,
				routine:2,
				average:0,
				difficult:-2,
				verydifficult:-4,
				formidable: -6
			}

/*
app.controller('TodoListController', function() { //declare a controller
        var todoList = this;    					//reference to self (module?)
        todoList.todos = [							//local var for initial list
          {text:'learn angular', done:true},		//...
          {text:'build an angular app', done:false}];//...
     
        todoList.addTodo = function() {    			//declare handler for add button
          todoList.todos.push({text:todoList.todoText, done:false}); //push new item from form to list
          todoList.todoText = '';					//clear web form todo item
        };
     
        todoList.remaining = function() {			//declare function for counting items
          var count = 0;							//duh
          angular.forEach(todoList.todos, function(todo) {	//execute new function for each item in the list
            count += todo.done ? 0 : 1;				// ternary operator, add one to the count if the thing isn't done
          });										//end of "for loop" body
          return count;								//returns value from remaining function
        };
     
        todoList.archive = function() {				//declare handler for archive function
          var oldTodos = todoList.todos;			//copy the todolist for evaluation since we'll be editing
          todoList.todos = [];						//clear the main todolist
          angular.forEach(oldTodos, function(todo) { //define "for loop" function to iterate oldtodolist
            if (!todo.done) todoList.todos.push(todo);  // if the old item is not done, add it to the new list
          });
        };
      })
    */
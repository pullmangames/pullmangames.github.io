
app = angular.module('TravApp', ['ngRoute', 'travellerCharacters', 'travellerSkills', 'diceRoller', 'shipManagement']) //declare the main module
      
app.config(function ($routeProvider) {
   $routeProvider
      .when("/roll",       {controller: "RollController as roller",           templateUrl: "roll.html"})
      .when("/characters", {controller: "charactersController as characters", templateUrl: "characters.view"})
      .when("/shipManagement", {controller: "shipManagementController as shipMan", templateUrl: "shipMan.html"})
      .otherwise({redirectTo: "/roll"});
});




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

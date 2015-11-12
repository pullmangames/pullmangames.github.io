
app = angular.module('TravApp', ['ngRoute', 'ui.bootstrap', 'travellerAlerts', 'travellerCharacters', 'travellerSkills', 'diceRoller', 'shipManagement', 'randomModule']) //declare the main module
      
app.config(function ($routeProvider) {
   $routeProvider
      .when("/roll",           {controller: "RollController as roller",            templateUrl: "roll.view"})
      .when("/characters",     {controller: "charactersController as characters",  templateUrl: "characters.view"})
      .when("/shipManagement", {controller: "shipManagementController as shipMan", templateUrl: "shipMan.view"})
      .when("/random",         {controller: "randomController as tables",          templateUrl: "randomtables.view"})
      .otherwise({redirectTo: "/roll"});
});

app.directive('travellerAutofocus', function($timeout) {
   return {
      link: function(scope, element) {
         element[0].focus();
      }
   };
});

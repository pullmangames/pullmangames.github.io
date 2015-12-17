app = angular.module('TravApp', ['ngRoute',
                                 'ngSanitize',
                                 'ui.bootstrap',
                                 'ui.select',
                                 'travellerAlerts',
                                 'travellerCharacters',
                                 'travellerSkills',
                                 'travDataStorage',
                                 'travAppConfig',
                                 'diceRoller',
                                 'shipManagement',
                                 'randomModule',
                                 'decoder']) //declare the main module
      
app.config(function ($routeProvider) {
   $routeProvider
      .when("/roll",           {controller: "RollController as roller",            templateUrl: "roll.view"})
      .when("/characters",     {controller: "charactersController as characters",  templateUrl: "characters.view"})
      .when("/shipManagement", {controller: "shipManagementController as shipMan", templateUrl: "shipMan.view"})
      .when("/random",         {controller: "randomController as tables",          templateUrl: "randomtables.view"})
      .when("/decoder",        {controller: "decoderController as decoder",        templateUrl: "decoder.view"})
      .when("/config",         {controller: "configController as config",          templateUrl: "config.view"})
      .otherwise({redirectTo: "/shipManagement"});
});

app.config(function(uiSelectConfig) {
   uiSelectConfig.theme = 'bootstrap';
});

app.directive('travellerAutofocus', function($timeout) {
   return {
      link: function(scope, element) {
         element[0].focus();
      }
   };
});

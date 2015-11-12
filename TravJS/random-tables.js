rndModule = angular.module('randomModule', []); //declare the module for dice rolls


rndModule.controller('randomController', ['charactersService', function(charactersService) {
		var rnd = this;
		
		rnd.patrontext="";
		
		rnd.randomPatron=function(subtable){
			var tens=subtable===0?rawroll(1,6):subtable;
			var ones=rawroll(1,6);
			rnd.patrontext=PatronTable[""+tens+ones];
			
		
		};
		
		
		
		
		
		
		
		
		
		
		
}]);
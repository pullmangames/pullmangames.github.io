decoderModule = angular.module('decoder', []); //declare the module for decoder


decoderModule.controller('decoderController', ['charactersService', function(charactersService) {
		var dec = this;
		
		dec.input="Drink your Ovaltine";
		dec.key="SoSecret";
		dec.result="";
		

		dec.whydecode = function() {
			console.log("decoding");
			
			dec.result=vernam(window.atob(dec.input),dec.key);
			console.log("DECODED");
		};	
		
		
		
		dec.whyencode = function() {
			console.log("encoding");
			
			dec.result=window.btoa(vernam(dec.input,dec.key));
			console.log("ENCODED");
		};	


}]);		




function vernam(msg, key) {
  var l = key.length;
  var fromCharCode = String.fromCharCode;
  return msg.replace(/[\s\S]/g, function(c, i) {
    return fromCharCode(key.charCodeAt(i % l) ^ c.charCodeAt(0));
  });
}
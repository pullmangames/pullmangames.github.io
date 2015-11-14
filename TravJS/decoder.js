decoderModule = angular.module('decoder', []); //declare the module for decoder


decoderModule.controller('decoderController', ['charactersService', function(charactersService) {
		var dec = this;
		
		dec.input="";
		dec.key="";
		dec.result="";
		

		dec.whydecode = function() {
			dec.result=vernam(window.atob(dec.input),dec.key);
			dec.input="";
			dec.key="";
		};	
		
		dec.whyencode = function() {
			dec.result=window.btoa(vernam(dec.input,dec.key));
			dec.input="";
			dec.key="";
		};	


}]);		




function vernam(msg, key) {
  var l = key.length;
  var fromCharCode = String.fromCharCode;
  return msg.replace(/[\s\S]/g, function(c, i) {
    return fromCharCode(key.charCodeAt(i % l) ^ c.charCodeAt(0));
  });
}
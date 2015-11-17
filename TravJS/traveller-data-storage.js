dsModule = angular.module('travDataStorage', []); //declare the module for handling chracters

dsModule.service('dataStorageService', ['$rootScope', function($rootScope) {
   var prefix = "dataStorageService_";
   var registeredData = [];

   this.register = function(source, property, onload)
   {
      if (typeof source !== "object")
      {
         throw("dataStorageService.register: source must be an object");
      }
      
      if (typeof property !== "string")
      {
         throw("dataStorageService.register: property must be a string representing the name of a property of the source object");
      }

      var key = prefix + property;

      registeredData.push({source:source, property:property, onload:onload});

      var scope = source;
      var watchName = property;
      if (source.constructor.name !== 'Scope')
      {
         $rootScope[key] = source[property];
         scope = $rootScope;
         watchName = key;
      }

      //Tear down the registration when the scope is destroyed
      scope.$on("$destroy", function() {
         for (var i = 0; i < registeredData.length; i++)
         {
            if (registeredData[i].property === property && registeredData[i].source === source)
            {
               registeredData.splice(i, 1);
               break;
            }
         }
      });

      var propIsObject = angular.isObject(source[property]);

      scope.$watch(
         watchName,
         function(newVal) {
            var outJson = angular.toJson(newVal);
            localStorage.setItem(key, outJson);
            var readBack = localStorage.getItem(key);
         },
         propIsObject);

      var inJson = localStorage.getItem(key);
      var objectFromJson = angular.fromJson(inJson);
      onload(objectFromJson);
   };
}]);

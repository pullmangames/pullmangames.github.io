dsModule = angular.module('travDataStorage', []); //declare the module for handling chracters

dsModule.service('dataStorageService', ['$rootScope', 'alertsService', function($rootScope, alertsService) {
   var prefix = "dataStorageService_";
   var prefixLen = prefix.length;
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

      registeredData.push({source:source, property:property, key:key, onload:onload});

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
         },
         propIsObject);

      var inJson = localStorage.getItem(key);
      var objectFromJson = angular.fromJson(inJson);
      onload(objectFromJson);
   };
   
   this.exportAll = function()
   {
      var objsToBeExported = {};
      for (var key in localStorage)
      {
         if (key.substring(0, prefixLen) === prefix)
         {
            objsToBeExported[key] = angular.fromJson(localStorage.getItem(key));
         }
      }
      var jsonToExport = angular.toJson(objsToBeExported, 3);
      var element = document.createElement('a');
      element.setAttribute('href', 'data:application/json,' + encodeURIComponent(jsonToExport));
      element.setAttribute('download', 'traveller_data.json');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
   }

   this.importAll = function(fileToRead)
   {
      var reader = new FileReader();
      reader.onload = function(e) { $rootScope.$apply(function() {
         try {
            var importedObjects = angular.fromJson(e.target.result);
         } catch (err) {
            alertsService.addAlert("danger", "The file you tried to import does not appear to be valid");
            return;
         }

         for (var key in importedObjects)
         {
            if (key.substring(0, prefixLen) === prefix)
            {
               localStorage.setItem(key, angular.toJson(importedObjects[key]));
            }
            for (var i = 0; i < registeredData.length; i++)
            {
               if (registeredData[i].key === key)
               {
                  registeredData[i].onload(importedObjects[key]);
               }
            }
         }
      })};

      try {
         reader.readAsText(fileToRead);
      } catch (err) {
         alertsService.addAlert("danger", "Unable to read " + fileToRead.name)
      }
   }
}]);

dsModule = angular.module('travDataStorage', []); //declare the module for handling chracters

//Persistent storage for settings. This handles both auto-saving to local
//storage and importing/exporting to a JSON file on demand.
//
//To configure persistent storage, call dataStorageService.register() with the
//following parameters:
//   source - The object containing the property to store. This means that you
//            cannot store a naked object - it must be a property of some other
//            object.
//            If the object to store is persistent (e.g., part of a service),
//            simply pass in the containing object.
//            If the object to store is transient (e.g, part of a controller),
//            the source must be of class Scope (i.e., the controller's $scope)
//   property - The name of the property to store. This parameter must be a
//            string.
//   onload - Function to call when the stored object is loaded from persistent
//            storage. This happens when register() is called and also when
//            the settings are imported from JSON. The function is passed a
//            single object, which is the stored object after it has been
//            restored from JSON. If the object needs to be revived (such as
//            reattaching methods that aren't saved in JSON), it is up to the
//            onload() function to do this.
dsModule.service('dataStorageService', ['$rootScope', 'alertsService', function($rootScope, alertsService) {
   var prefix = "dataStorageService_";
   var prefixLen = prefix.length;
   var registeredData = [];

   //Register a property with the storage service
   this.register = function(source, property, onload)
   {
      //The source must be an object with properties
      if (typeof source !== "object")
      {
         throw("dataStorageService.register: source must be an object");
      }
      
      //The name of the property must be a string
      if (typeof property !== "string")
      {
         throw("dataStorageService.register: property must be a string representing the name of a property of the source object");
      }

      //The key for localStorage
      var key = prefix + property;

      //Save the registration
      registeredData.push({source:source, property:property, key:key, onload:onload});

      var scope = source;
      var watchName = property;
      
      //If the source isn't a scope, we need to save the property into the
      //$rootScope so that we can $watch it
      if (source.constructor.name !== 'Scope')
      {
         $rootScope[key] = source[property];
         scope = $rootScope;
         watchName = key;
      }

      //Delete the registration when the scope is destroyed
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

      //Watch the variable and save it to localstorage whenever it changes
      scope.$watch(
         watchName,
         function(newVal) {
            localStorage.setItem(key, angular.toJson(newVal));
         },
         angular.isObject(source[property]));

      //Load whatever's in local storage and pass it to the onload function
      onload(angular.fromJson(localStorage.getItem(key)));
   };
   
   //Export all of the settings in localStorage to a JSON file
   this.exportAll = function()
   {
      var objsToBeExported = {};
      //Search the localScope for keys with the prefix dataStorageService_
      //Any that match were saved by this service and need to be exported
      for (var key in localStorage)
      {
         if (key.substring(0, prefixLen) === prefix)
         {
            //Get the object to be exported
            objsToBeExported[key] = angular.fromJson(localStorage.getItem(key));
         }
      }
      //Convert all the objects to be exported into JSON
      var jsonToExport = angular.toJson(objsToBeExported, 3);
      //Download the JSON "file"
      var element = document.createElement('a');
      element.setAttribute('href', 'data:application/json,' + encodeURIComponent(jsonToExport));
      element.setAttribute('download', 'traveller_data.json');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
   }

    //Import all of the settings from the given JSON file
   this.importAll = function(fileToRead)
   {
      var reader = new FileReader();

      //Called after the reader has finished reading the file
      reader.onload = function(e) { $rootScope.$apply(function() {
         //Try to convert the file data into an object
         try {
            var importedObjects = angular.fromJson(e.target.result);
         } catch (err) {
            alertsService.addAlert("danger", "The file you tried to import does not appear to be valid");
            return;
         }

         //Search the object for keys start with dataStorageService_
         //Any that match are objects that need to be written into local
         //storage.
         for (var key in importedObjects)
         {
            if (key.substring(0, prefixLen) === prefix)
            {
               localStorage.setItem(key, angular.toJson(importedObjects[key]));
            }
            //Search the list of registrations for any that match this key.
            for (var i = 0; i < registeredData.length; i++)
            {
               //If a match is found, call its onload() function to overwrite
               //the existing object with the imported data.
               if (registeredData[i].key === key)
               {
                  registeredData[i].onload(importedObjects[key]);
               }
            }
         }
      })};

      //Try to read the file
      try {
         reader.readAsText(fileToRead);
      } catch (err) {
         alertsService.addAlert("danger", "Unable to read " + fileToRead.name)
      }
   }

   //Export all of the settings as a javascript object that can be archived with the project, if people can't import game data the usual way
   this.exportVersionControlledData = function () {
      var vcData = {};
      //Search the localScope for keys with the prefix dataStorageService_
      //Any that match were saved by this service and need to be exported
      for (var key in localStorage) {
         if (key.substring(0, prefixLen) === prefix) {
            //Get the object to be exported
            vcData[key] = angular.fromJson(localStorage.getItem(key));
         }
      }
      //Convert all the objects to be exported into JSON
      var jsToExport = angular.toJson(vcData, false);
      //Convert the JSON into actual javascript code
      jsToExport = "travellerArchivedGameData = " + jsToExport + ";"
      //Download the js "file"
      var element = document.createElement('a');
      element.setAttribute('href', 'data:application/json,' + encodeURIComponent(jsToExport));
      //Note: You can't actually put ".js" on the end of the file. Browsers will block it as potentially malicious
      element.setAttribute('download', 'traveller-version-controlled-data');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
   }

   //Import all of the settings from the archived game data
   this.useVersionControlledData = function () {
      for (var key in travellerArchivedGameData) {
         if (key.substring(0, prefixLen) === prefix) {
            localStorage.setItem(key, angular.toJson(travellerArchivedGameData[key]));
         }
         //Search the list of registrations for any that match this key.
         for (var i = 0; i < registeredData.length; i++) {
            //If a match is found, call its onload() function to overwrite
            //the existing object with the imported data.
            if (registeredData[i].key === key) {
               registeredData[i].onload(travellerArchivedGameData[key]);
            }
         }
      }
   }

}]);

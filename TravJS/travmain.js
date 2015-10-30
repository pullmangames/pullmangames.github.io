
app = angular.module('TravApp', ['ngRoute', 'travellerCharacters', 'diceRoller', 'shipManagement']) //declare the main module
      
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
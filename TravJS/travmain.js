

     app = angular.module('TravApp', []) //declare the main module
      
      
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
      
      
      app.controller('RollController', function() {
			var roller = this;
			roller.sides=6;
			roller.numdice=1;
			//roller.result=0;
			//roller.rolls=[];
			roller.result={ total:0, rolls:[] };
			
			roller.roll = function() {
				roller.result=rawroll(roller.numdice, roller.sides);
			};		
			
			roller.d66 = function() {
				roller.result=rolld66();
			};
				
	})


function rawroll(numdice, sides){	
		var rollresult = { total:0, rolls:[] }
	
		for (var i=0; i<numdice; i++)
		{
			var temproll = Math.floor(Math.random()*sides)+1;
			rollresult.total += temproll;
			rollresult.rolls.push(temproll);
		}
	
		return rollresult;
}	
		
function rolld66(){
	var rollresult = rawroll(2,6);
	rollresult.total=rollresult.rolls[0]*10+rollresult.rolls[1];
	return rollresult;
	
	}
var todoList = {
  todos: [],
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position){
  this.todos.splice(position,1);
},
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed=!todo.completed;
  },
  
  toggleAll: function(){
    totalTodos =  this.todos.length;
    console.log('Total todos:', totalTodos);
    var completedTodos = 0;
    // find # of completed todos
    for (var i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++
      }
      console.log('Completed todos:', completedTodos);
    }
    // if all true, mark all as false
    if (completedTodos === totalTodos)
        for (var i = 0; i < totalTodos; i++){
          (this.todos[i].completed = false)
        }
        // else mark all as true 
        else{
          for (var i = 0; i < totalTodos; i++){
          (this.todos[i].completed = true)
          }
        }

  
  }
  
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleButton =  document.getElementById('toggleButton');

/*
console.log(displayTodosButton)
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});
 
console.log(toggleButton)
toggleButton.addEventListener('click', function(){
   todoList.toggleAll();
 });
 */
 
var handlers = {
  
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();

  },
  changeTodo: function(){
    var changeTodoPositionInput =  document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput =  document.getElementById('changeTodoPositionText');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value );
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();

  },
  deleteTodo: function(){
    var deleteTodoPosition =  document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = '';
    view.displayTodos();

  },

  toggleCompleted: function(){
    var toggleTodoPosition = document.getElementById('toggleTodoPosition')
    todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
    toggleTodoPosition.value = '';
    view.displayTodos();

  }
};

var view = {
  displayTodos: function(){
    var todosUl  = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++ ){
      var todoLi = document.createElement('li');
      
      var todoTextWithCompletion = ''
      var todo = todoList.todos[i]
      if (todo.completed === true){
       todoTextWithcompletion = '(x)' + todo.todoText; 
      } else{
        todoTextWithcompletion = '( )' + todo.todoText
      }
      
      todoLi.textContent = todoTextWithcompletion;
      todosUl.appendChild(todoLi);
      }
    }
  };

 
var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log('Your todo list is empty')
    } else {
      for (var i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed === true){
                  console.log('(x)', this.todos[i].todoText);
        }else{
                  console.log('( )', this.todos[i].todoText);
        }
    }
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
  this.todos.splice(position,1);
  this.displayTodos();
},
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed=!todo.completed;
    this.displayTodos();
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
    this.displayTodos();

  
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
  
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function(){
    var changeTodoPositionInput =  document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput =  document.getElementById('changeTodoPositionText');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value );
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function(){
    var deleteTodoPosition =  document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = '';
  },
  
  toggleCompleted: function(){
    var toggleTodoPosition = document.getElementById('toggleTodoPosition')
    todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
    toggleTodoPosition.value = '';
  }
  
}
 
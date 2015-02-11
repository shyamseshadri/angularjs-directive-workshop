angular.module('todoApp').controller('LandingCtrl', ['TodoService',
    function(TodoService) {
  var self = this;

  self.todos = [];

  self.getTodoClass = function(todo) {
    return {
      completed: todo.completed
    };
  };
  TodoService.query().then(function(response) {
    self.todos = response.data;
  }, function(error) {
    console.error('Error fetching list of todos', error.data);
  });

  self.magic = function(id, author) {
    console.log('Amazing magic has happened ', id, author);
  };


}]);

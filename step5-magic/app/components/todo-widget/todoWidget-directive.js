angular.module('todoApp')
    .directive('todoWidget', [function() {
    return {
      restrict: 'E',
      templateUrl: 'components/todo-widget/todo-widget.html',
      scope: {
        todoItem: '=',
        whenMagic: '&'
      },
      link: function($scope, $element, $attrs) {

        $scope.getTodoClass = function(todo) {
          return {
            completed: todo.completed
          };
        };

        $scope.performMagic = function() {
          $scope.whenMagic({id: $scope.todoItem.id, author: $scope.todoItem.author});
        };
      }
    };
  }]);

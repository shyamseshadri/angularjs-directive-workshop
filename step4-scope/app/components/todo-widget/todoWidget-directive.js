angular.module('todoApp')
    .directive('todoWidget', [function() {
    return {
      restrict: 'E',
      templateUrl: 'components/todo-widget/todo-widget.html',
      scope: {
        todoItem: '='
      },
      link: function($scope, $element, $attrs) {

        $scope.getTodoClass = function(todo) {
          return {
            completed: todo.completed
          };
        };
      }
    };
  }]);

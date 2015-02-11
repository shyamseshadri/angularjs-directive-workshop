angular.module('todoApp')
    .directive('todoWidget', [function() {
    return {
      restrict: 'E',
      templateUrl: 'components/todo-widget/todo-widget.html'
    };
  }]);

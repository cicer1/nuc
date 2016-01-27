'use strict';

angular.module('nuc').directive('footer', [function () {
    var obj = {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/footer/footer.html',
        link: function(scope, elem, attrs) {
            scope.menuVisible = false;
            scope.foo = function() {
                console.log("foo");
            };
        }
    };
    return obj;
}]);

'use strict';

angular.module('nuc').directive('navbar', [function () {
    var obj = {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/navbar/navbar.html',
        link: function(scope, elem, attrs) {
            scope.menuVisible = false;
            scope.foo = function() {
                console.log("foo");
            };
        }
    };
    return obj;
}]);

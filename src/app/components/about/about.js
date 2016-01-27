'use strict';

angular.module('nuc').directive('about', [function () {
    var obj = {
        restrict: 'E',
        replace: true,
        scope: { },
        templateUrl: 'app/components/about/about.html',
        link: function(scope, elem, attrs) {

        }
    };
    return obj;
}]);

'use strict';

angular.module('nuc').directive('homeSlick', ['$interval', '$timeout', '$rootScope', function ($interval, $timeout, $rootScope) {
  var obj = {
    restrict: 'E',
    replace: false,
    scope: true,
    templateUrl: 'app/components/homeSlick/home-slick.html',
    link: function (scope, elem, attrs) {

      scope.number1 = [1, 2, 3];
      scope.slickConfig1Loaded = true;
      scope.updateNumber1 = function () {
        scope.slickConfig1Loaded = false;
        scope.number1[2] = '123';
        scope.number1.push(Math.floor((Math.random() * 10) + 100));
        $timeout(function () {
          scope.slickConfig1Loaded = true;
        }, 5);
      };
      scope.slickCurrentIndex = 0;
      scope.slickConfig = {
        dots: false,
        autoplay: true,
        initialSlide: 1,
        infinite: true,
        autoplaySpeed: 4000,
        prevArrow: null,
        nextArrow: null,
        method: {}
      };
    }
  };
  return obj;
}]);


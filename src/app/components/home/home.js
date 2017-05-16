'use strict';

angular.module('nuc').directive('home', ['$interval','$timeout', '$rootScope',function ($interval,$timeout,$rootScope) {
    var obj = {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'app/components/home/home.html',
        link: function(scope, elem, attrs) {

    scope.number1 = [1, 2];
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
      initialSlide: 3,
      infinite: true,
      autoplaySpeed: 100000,
      method: {}
    };

            // var intervalPromise;

            // scope.carouselCall = function() {
            //         intervalPromise = $interval(function() {
            //         $rootScope.carousel = $rootScope.carousel + 1;
            //         var clientWidth = document.documentElement.clientWidth;
            //         var $contentHome = $('.content-home');
            //         if (clientWidth > 991){
            //             visibleImage++;
            //             if (visibleImage === 10){
            //                 visibleImage = 1;
            //             }
            //             $contentHome.css('background', 'url(../assets/images/0'+ visibleImage +'_homeslider.jpg) no-repeat center fixed');
            //             $contentHome.css('-webkit-background-size', 'cover');
            //             $contentHome.css('-moz-background-size', 'cover');
            //             $contentHome.css('-o-background-size', 'cover');
            //             $contentHome.css('background-size', 'cover');
            //             $contentHome.css('transition', 'background 2s');
            //         }else{
            //             $contentHome.css('background', 'none');
            //             elem.find('img').hide();
            //             elem.find('img.img-'+visibleImageMobile).fadeIn(1000);
            //             visibleImageMobile++;
            //             if (visibleImageMobile === 10){
            //                 visibleImageMobile = 1;
            //             }
            //         }
            //     }, 4000);
            // }

            // scope.$on('$destroy', function () { $interval.cancel(intervalPromise); });

            // //elem.find('img').hide();
            // elem.find('img.img-2').hide();
            // elem.find('img.img-3').hide();
            // elem.find('img.img-4').hide();
            // elem.find('img.img-5').hide();
            // elem.find('img.img-6').hide();
            // elem.find('img.img-7').hide();
            // elem.find('img.img-8').hide();
            // elem.find('img.img-9').hide();
            // var visibleImageMobile = 2;
            // var visibleImage = 1;
            // scope.carouselCall();
        }
    };
    return obj;
}]);

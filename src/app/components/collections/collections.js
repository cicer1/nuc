'use strict';

angular.module('nuc').directive('collections', ['$timeout','$animate', function ($timeout,$animate) {
    var obj = {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'app/components/collections/collections.html',
        link: function(scope, elem, attrs) {
            scope.galleryMode = true;

            scope.setArrowPosition = function(i){
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                 // some code..
                 }else{
                    var h = elem.find('.model')[i].height;
                    var e = elem.find('.arrow')[i];
                    angular.element( e ).css('top', h/2 - 15 + 'px');
                 }
            };

            scope.showDetails = function(i){
                scope.galleryMode = false;
                scope.selectedModel = scope.$parent.main.models[i];
                scope.selectedModelBig = 0;
                scope.$emit('scroll_trigger');
            };

            scope.selectAsBig = function(i){
                scope.selectedModelBig = i;
                var bigpic = angular.element( elem.find('#bigpic')[0] );
                if ( bigpic.hasClass('pulse-anim') ){
                    bigpic.removeClass('pulse-anim');
                }
                $animate.addClass(bigpic, 'pulse-anim');
            }


            scope.$on('changePage', function(event, mass) { scope.galleryMode = true; });

            scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
                if ( scope.$parent.main.page === 'collections' &&  scope.galleryMode === false ){
                    event.preventDefault();
                    scope.galleryMode = true;
                }
            });

        }
    };
    return obj;
}]);

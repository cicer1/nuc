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
                $timeout(function(){
                    scope.galleryMode = false;
                    scope.selectedModel = scope.$parent.main.models[i];
                    var littleone = document.getElementById('littleone');
                    var littletwo = document.getElementById('littletwo');
                    angular.element( littletwo ).hide();
                    angular.element( littletwo ).load(function(){
                     angular.element( littletwo ).show();
                    });
                    littleone.src = scope.selectedModel.pics[0];
                    littletwo.src = scope.selectedModel.pics[1];
                    scope.selectedModelBig = 0;
                    scope.$emit('scroll_trigger');
                });
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

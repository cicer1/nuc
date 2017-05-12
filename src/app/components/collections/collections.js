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

            scope.prevItem = function(){
              if( scope.isPrevItemAvailable() ){
                scope.showDetails(scope.selectedModel.index - 1);
              }
            };

            scope.nextItem = function(){
              if( scope.isNextItemAvailable() ){
                scope.showDetails(scope.selectedModel.index + 1);
              }
            };

            scope.isPrevItemAvailable = function(){
              return (scope.selectedModel && scope.selectedModel.index > 0);
            };

            scope.isNextItemAvailable = function(){
              return (scope.selectedModel && scope.selectedModel.index < scope.$parent.main.models.length-1);
            };

            scope.showDetails = function (i) {
              $timeout(function () {
                scope.galleryMode = false;
                scope.selectedModel = scope.$parent.main.models[i];
                scope.selectedModel.index = i;
                console.log(scope)
                var littleone = document.getElementById('littleone');
                var littletwo = document.getElementById('littletwo');
                var littlethree = document.getElementById('littlethree');
                angular.element(littletwo).hide();
                if (littlethree) {
                  angular.element(littlethree).hide();
                  angular.element(littlethree).on('load', function () {
                    angular.element(littlethree).show();
                  });
                  littlethree.src = scope.selectedModel.pics[2];
                }
                angular.element(littletwo).on('load', function () {
                  angular.element(littletwo).show();
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

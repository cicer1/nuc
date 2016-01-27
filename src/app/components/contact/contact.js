'use strict';

angular.module('nuc').directive('contact', ['$http','$timeout',function ($http,$timeout) {
    var obj = {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'app/components/contact/contact.html',
        link: function(scope, elem, attrs) {


                          scope.sendEmail = function(){
                              var str = (window.location.href + "mail.php");
                              var url = str.replace("contact", "");
                              console.log('sending '+scope.mailtext+' to '+url);
                              var request = $http({
                                    method: "post",
                                    url: url,
                                    data: {
                                        text: scope.mailtext
                                    },
                                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                                });

                                /* Check whether the HTTP Request is successful or not. */
                                request.success(function (data) {
                                    if(data === '1'){
                                        scope.mailsuccess = true;
                                        $timeout(function(){
                                            scope.mailsuccess = false;
                                        },5000);
                                    }
                                });
                        };


        }
    };
    return obj;
}]);

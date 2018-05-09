"use strict";

angular.module("nuc").controller("MainCtrl", [
  "$timeout",
  "$interval",
  "$scope",
  "$location",
  "$routeParams",
  "$anchorScroll",
  "$rootScope",
  "$window",
  function(
    $timeout,
    $interval,
    $scope,
    $location,
    $routeParams,
    $anchorScroll,
    $rootScope,
    $window
  ) {
    var main = this;

    function init() {
      $scope.$on("scroll_trigger", function(event, newUrl, oldUrl) {
        scrollTo("top");
      });

      main.isMenuOpen = false;
      $rootScope.carousel = 0;
      var entry = $location.path() === "/" ? "/home" : $location.path();
      main.collId = $routeParams.collId || null;
      entry = entry.substring(1, entry.length);
      main.page = entry;
      main.collections = business();
      main.models = main.collections[main.collId];
    }

    main.changePage = function(pageName, collId) {
      main.isMenuOpen = false;
      scrollTo("top");
      $scope.$broadcast("changePage");
      if (collId) {
        $location.path("/" + pageName).search({ collId: collId });
      } else {
        $location.path("/" + pageName);
      }
      if (pageName === "collections" && collId) {
        //   main.models = main.collections[collId];
      } else {
        $location.search("");
      }
    };

    main.toggleMenu = function() {
      main.isMenuOpen = !main.isMenuOpen;
    };

    main.collName = function(collId) {
      if (collId === "coll1") {
        return "Autunno / Inverno 15-16";
      }
      if (collId === "coll2") {
        return "Primavera / Estate 16";
      }
      if (collId === "coll3") {
        return "Primavera / Estate 17";
      }
      if (collId === "coll4") {
        return "Primavera / Estate 18";
      }
    };

    main.goBack = function(collId) {
      $window.history.back();
    };

    main.clickOnUpload = function() {
      $timeout(function() {
        angular.element("#mc-embedded-subscribe").trigger("click");
      }, 100);
    };

    function scrollTo(elementId) {
      $timeout(function() {
        $anchorScroll(elementId);
      });
    }

    init();
  }
]);

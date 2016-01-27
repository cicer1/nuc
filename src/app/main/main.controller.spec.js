'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('nuc'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

});

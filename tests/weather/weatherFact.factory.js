(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: weatherFact', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.weather'));

    var weatherFact;

    beforeEach(inject(function($injector){

      weatherFact = $injector.get('weatherFact');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());

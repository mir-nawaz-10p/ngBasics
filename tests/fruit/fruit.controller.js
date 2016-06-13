(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Fruit', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.fruit'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Fruit', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());

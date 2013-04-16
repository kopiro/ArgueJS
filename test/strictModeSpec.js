define(['argue', 'chai'], function(__, chai) {"use strict";
  chai.Assertion.includeStack = true;
  var should = chai.should();

  describe('strict mode', function() {

    it('should be activated now', function() {
      
      should.equal( (function () { return !this; })(), true);
      should.equal( (function () { return !this; })(), true);
      
    });    
    it('should not allow arguments catch', function() {
        
      (function(){
        return arguments.callee;
      }).should.throw(/.*calle.*strict mode.*/);
          
    });
    it('should allow to bypass global restriction', function() {
          
      should.equal( (function () {
        return !Function('return this')();
      })(), false);
          
    });
    it('should not allow arguejs to catch arguments', function() {
       
      function upper() {
        return __({});
      }
      
      (function(){
        upper();
      }).should.throw('It is not possible to infer arguments in strict mode. See http://github.com/zvictor/ArgueJs#propagating-arguments for alternatives.');
       
    });
    it('should allow arguejs to catch declared arguments', function() {
      
      function upper() {
        debugger;
        return __({foo: String}, arguments);
      }
      
      should.equal(upper('bar').foo, 'bar');
      
    });
    
  });
});

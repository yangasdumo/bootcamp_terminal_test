let assert = require("assert");
let  countRegNumber= require("../CountRegNumber");


describe('test CountRegNumbers function',function(){
    it('should return the number of registration in the string 3',function(){
      var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
      assert.equal(regCount, 3);
      
  });
  it('should return the number of registration in the string 1',function(){
    var regCount = countRegNumber('CA 182736')
    assert.equal(regCount, 1);
    
  })

});

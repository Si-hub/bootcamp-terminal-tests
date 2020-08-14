let assert = require("assert");
let transportFee = require("../transportFee");

describe("The transportFee function ", function(){
  
    it ("should return R20 if its a morning shift", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal("R20", transportFee("morning"));
    }); 
  
  it ("should return R10 if its a afternoon shift ", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal("R10", transportFee("afternoon"));
    }); 
  
  it ("should return free if its a night shift", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal("free", transportFee("free"));
    }); 
});
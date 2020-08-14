let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe("The countRegNumber function ", function() {
  
    it("should return 1 for 'CY 123-223'", function() {
      
      assert.equal(1, countRegNumber("CY 123-223"));
    });
    
    it("should return 2 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 2;
      
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CY 123-123"));
    });
    
    it("should return 5 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 5;

      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CY 123-123, CY 123-123, CY 123-123, CY 123-123, CA 123-123"));
    });
    
  });
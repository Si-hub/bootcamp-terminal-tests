let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function ", function(){

    it ("should return all the registration numbers that are from Paarl", function() {
        assert.equal(countAllPaarl("CJ 678 543, CJ 67890, CL 123 894, CA 569", 'CJ'), 2);
    }); 

    it ("should return nothing for Paarl registration", function() {
        assert.equal(countAllPaarl("CY 678 543, CA 67890, CL 123 894, CA 569", 'CJ'), 0);
    }); 


});
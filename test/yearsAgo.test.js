let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("The yearsAgo function " , function(){
  
    it ("should calculate how many years that you want", function() {
        assert.equal(yearsAgo(1989), 31);
    });

    });

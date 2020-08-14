let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("The fromWhere function ", function(){

    it ("should return Bellville if the registration starts with CY", function() {
        assert.equal(fromWhere("CY 123"), "Bellville");
    }); 
    
    it ("should return Paarl if the registration starts with CJ", function() {
        assert.equal(fromWhere("CJ 123"), "Paarl");
    });

    it ("should return Cape Town if the registration starts with CA", function() {
        assert.equal(fromWhere("CA 123"), "Cape Town");
    });

    it ("should return some other places with a registration that starts with any prifex", function() {
        assert.equal(fromWhere("CL 456"), "Some other place!");
    });

});
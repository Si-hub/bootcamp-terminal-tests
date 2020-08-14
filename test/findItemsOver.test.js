let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function' , function(){

    it('should find items over (20) based on shreshold quantity' , function(){
        var threshold = 20;
        var items = [
            {name: "apples", qty : 10},
            {name: "pears", qty : 7},
            {name: "grapes", qty : 27},
            {name: "apples", qty : 13},
          ];

assert.deepEqual(findItemsOver(items,threshold), [{name: "grapes", qty : 27} ] )

    })

    it('should find items over (40) based on shreshold quantity' , function(){
        var threshold = 40;
        var items = [
            {name: "apples", qty : 10},
            {name: "pears", qty : 47},
            {name: "grapes", qty : 5},
            {name: "apples", qty : 43},
          ];

assert.deepEqual(findItemsOver(items,threshold), [{name: "pears", qty : 47}, {name: "apples", qty : 43} ] )

    })
});
let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function' , function(){

    it('should calculate and display all items over 20 in an object ' , function(){
        var objectList = [
            {name: "apples", qty : 10},
            {name: "pears", qty : 37},
            {name: "bananas", qty : 27},
            {name: "apples", qty : 3},
          ];

assert.deepEqual(findItemsOver20(objectList), [{name: "pears", qty : 37}, {name: "bananas", qty : 27}] )

    })

    it('should not display items over 20 because the is none' , function(){
        var objectList = [
            {name: "apples", qty : 10},
            {name: "pears", qty : 16},
            {name: "bananas", qty : 14},
            {name: "apples", qty : 3},

            ];
    
    assert.deepEqual(findItemsOver20(objectList), [] )
    
        })
});